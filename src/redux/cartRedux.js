import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartArr: JSON.parse(localStorage.getItem("cartArr")) || [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    },
    reducers: {
        //Thêm sản phẩm
        ADD_CART(state, action) {
            //Lấy id của sản phẩm
            const itemIndex = state.cartArr.findIndex(
                (item) => item._id.$oid === action.payload._id.$oid
            );
            //Kiểm tra id của sản phẩm nếu đã có thì sẽ cộng quantity thêm 1
            if(itemIndex >= 0) {
                state.cartArr[itemIndex].quantity += 1;
                toast.info(`increased ${state.cartArr[itemIndex].name} quantity`, 
                {
                    position: toast.POSITION.BOTTOM_LEFT
                }
            );
            } else {
                const tempProduct = { ...action.payload, quantity : 1};
                state.cartArr.push(tempProduct); // Thêm dữ liệu vào mảng cartArr
                //Hiển thị thông báo cho người dùng
                toast.success(`${action.payload.name} added to cart`, {
                    position: "bottom-left"
                });
            }
            //Lưu dữ liệu vào local
            localStorage.setItem("cartArr", JSON.stringify(state.cartArr));
        },

        //Giảm số lượng sản phẩm
        DECREASE_CART(state, action) {
            //Lấy id của sản phẩm
            const itemIndex = state.cartArr.findIndex(
                item => item._id.$oid === action.payload._id.$oid
            )
            //Kiểm tra số lượng của sản phẩm nếu > 1 thì sẽ trừ 1, bằng 1 thì sẽ xóa sản phẩm đó
            if(state.cartArr[itemIndex].quantity > 1) {
                state.cartArr[itemIndex].quantity -= 1
                //Hiển thị thông báo cho người dùng
                toast.info(`Decreased ${action.payload.name} cart quantity`, {
                    position: "bottom-left"
                });

            } else if (state.cartArr[itemIndex].quantity === 1) {
                const nextCartItems = state.cartArr.filter(
                    cartItem => cartItem._id.$oid !== action.payload._id.$oid
                )
    
                state.cartArr = nextCartItems;
                
                toast.error(`${action.payload.name} removed from cart`, {
                    position: "bottom-left"
                });

                localStorage.setItem('cartArr', JSON.stringify(state.cartArr));
            }
        },

        //Xóa sản phẩm
        DELETE_CART(state, action) {
            //Dùng filter để lấy id của sản phẩm khi người dùng muốn xóa
            const nextCartItems = state.cartArr.filter(
                cartItem => cartItem._id.$oid !== action.payload._id.$oid
            )
            //Dữ liệu mới sẽ được lưu lại
            state.cartArr = nextCartItems;
            //Lưu dữ liệu vào local
            localStorage.setItem('cartArr', JSON.stringify(state.cartArr));
            //Hiển thị thông báo cho người dùng
            toast.error(`${action.payload.name} removed from cart`, {
                position: "bottom-left"
            });
        },

        //Hàm lấy tổng số lượng và giá tiền
        getTotals(state, action) {
            //Sử dụng hàm reduce để lấy tổng 2 giá trị total và quantity 
            let {total, quantity } = state.cartArr.reduce((cartTotal, cartItem) => {
                const { price, quantity } = cartItem;
                const itemTotal = price * quantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += quantity

                return cartTotal
            }, {
                //Giá trị khởi tạo
                total: 0,
                quantity: 0
            });

            //Gán 2 giá trị vừa lấy vào initialState
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;