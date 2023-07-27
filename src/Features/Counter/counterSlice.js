import { createSlice } from "@reduxjs/toolkit";

// 
export const counterSlice = createSlice({
    name: 'counter',
    initialState: { //valor inicial del estado 
        value: 20
    },
    //reducer de 4 accciones de manejar el estado 
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => { 
            state.value += action.payload   //rexibe un payload
        }
    }
})

//Exportamos las acciones del slice
export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer

