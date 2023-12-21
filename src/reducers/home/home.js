import { createSlice } from "@reduxjs/toolkit";
import { getCotegory } from "../../api/home/home";
import { getCotegoryById } from "../../api/home/home";

const home = createSlice({
    name: 'home',
    initialState: {
        cotegory: [],
        cotegoryById:[]
    },
    reducers: {
        handleChange: (state, action) => {
            state[action.payload.type] = action.payload.value;
        }
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
    }
})
export default home.reducer