import { createSlice } from '@reduxjs/toolkit'

const reportSlice = createSlice({
    name: 'report',
    initialState: { logs: []},
    reducers: {
        insertLog: (state, action) => {
            state.logs.push(action.payload)
        }
    }
})


export const { insertLog } = reportSlice.actions

export default reportSlice.reducer