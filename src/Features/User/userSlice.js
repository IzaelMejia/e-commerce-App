import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "User", 
    initialState: { 
        value: {
            email: "", 
            idToken: "", 
            localId: "",
            profileImage:"",
        }
    },
    reducers: {
        setUser: (state, action) => {
        state.value = action.payload
        },
         
        logOut: (state) => {
            //cuando se deslogea
            state.value = {
                email: "",
                idToken: "",
                localId: "",
                profileImage: "",
            }
        },
        saveImage: (state, action) => {
            state.value.profileImage = action.payload
        }
    }
});

// Exporta las acciones creadas por el slice (setCategorySelected, setIdSelected)
export const { setUser , logOut, saveImage } = userSlice.actions;

// Exporta el reducer generado por el slice
export default userSlice.reducer;
