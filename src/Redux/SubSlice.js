import { createSlice } from '@reduxjs/toolkit'

export const SubSlice = createSlice({
  name: 'SubList',
  initialState:{
    SubList: [],
},
  reducers: {
    addSub: (state,action) => {
     
     
      state.SubList =[...state.SubList,action.payload]
    },
    decrement: (state) => {
      console.log("decrement")
    },
    incrementByAmount: (state, action) => {
        console.log("decamountrement")
      console.log(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addSub, decrement, incrementByAmount } = SubSlice.actions

export default SubSlice.reducer