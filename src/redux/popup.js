import { createSlice } from '@reduxjs/toolkit';

const popupState = { showPopup: false };

const popupSlice = createSlice({
    name: "popup",
    initialState: popupState,
    reducers: {
        SHOW_POPUP(state, action) {
            state.showPopup = true;
        },
        HIDE_POPUP(state) {
            state.showPopup = !state.showPopup;
        }
    }
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;