import { createSlice } from "@reduxjs/toolkit";
import { getCotegory } from "../../api/home/home";
import { getCotegoryById } from "../../api/home/home";
import { getProduct } from "../../api/home/home";
import { getCart } from "../../api/home/home";

const home = createSlice({
    name: 'home',
    initialState: {
        cotegory: [],
        cotegoryById:[],
        product:[],
        cart:[],
        newImg:'',
        ModalPost:false
    },
    reducers: {
        handleChange: (state, action) => {
            state[action.payload.type] = action.payload.value;
        },
        ModalPostTrue: (state, action) => {
            state.ModalPost = true;
            state.newImg = action.payload;
          },
          closeModal: (state, action) => {
            state.ModalPost = false;
          },
    },
    extraReducers: (builder) => {
        builder.addCase(getCotegory.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getCotegory.fulfilled, (state, action) => {
            state.cotegory = action.payload;
        });
        builder.addCase(getCotegory.rejected, (state, action) => {
            state.loading.false;
        });



        builder.addCase(getCotegoryById.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getCotegoryById.fulfilled, (state, action) => {
            state.cotegoryById = action.payload;
        });
        builder.addCase(getCotegoryById.rejected, (state, action) => {
            state.loading.false;
        });



        builder.addCase(getProduct.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.product = action.payload;
        });
        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading.false;
        });




        
        builder.addCase(getCart.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getCart.fulfilled, (state, action) => {
            console.log(1);
            state.cart = action.payload;
        });
        builder.addCase(getCart.rejected, (state, action) => {
            state.loading.false;
        });

    }
})
export default home.reducer
export const { handleChange, ModalPostTrue, closeModal } = home.actions;