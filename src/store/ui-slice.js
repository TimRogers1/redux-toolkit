import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: { toggleOpen: false },
    reducers: {
        toggle: (state) => {
            state.toggleOpen = !state.toggleOpen
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;