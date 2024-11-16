import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";



export const MainSlice = createSlice({
    name: "MAIN_SLICE",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            let checkBasket = state.basket.find(data => data.id === action.payload)
            if (checkBasket) {
                checkBasket.count += 1
            } else {
                let checkPr = state.products.find(data => data.id === action.payload)
                checkPr.count = 1
                state.basket.push(checkPr)
            }
            localStorage.setItem("basket", JSON.stringify(state.basket))
        },
        // plusFunc: (state,action)=>{
        //     let checkBasket=state.basket.find(data=>data.id===action.payload)
        //     checkBasket.count+=1
        //     localStorage.setItem("basket",JSON.stringify(state.basket))
        // },
        // minusFunc: (state,action)=>{
        //     let checkBasket=state.basket.find(data=>data.id===action.payload)
        //     checkBasket.count-=1
        //     if(checkBasket.count===0){
        //         let index=state.basket.findIndex(data=>data.id===action.payload)
        //         state.basket.splice(index,1)
        //     }
        //     localStorage.setItem("basket",JSON.stringify(state.basket))
        // }
        // xFunc: (state, action) => {
        //     if (action.payload.y.target.getAttribute("data-x") === "+") {
        //         let checkBasket = state.basket.find(data => data.id === action.payload.x)
        //         checkBasket.count += 1
        //         localStorage.setItem("basket", JSON.stringify(state.basket))
        //     } else {
        //         let checkBasket = state.basket.find(data => data.id === action.payload.x)
        //         checkBasket.count -= 1
        //         if (checkBasket.count === 0) {
        //             let index = state.basket.findIndex(data => data.id === action.payload.x)
        //             state.basket.splice(index, 1)
        //         }
        //         localStorage.setItem("basket", JSON.stringify(state.basket))
        //     }
        // }


        getCountriesFunc: (state,action)=>{
            state.countries=action.payload
        }
    }
})

export const Data = MainSlice.reducer;
export const { addToCart, plusFunc, minusFunc, xFunc,getCountriesFunc } = MainSlice.actions;