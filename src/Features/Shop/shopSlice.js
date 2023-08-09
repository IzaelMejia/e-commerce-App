// Importa la función createSlice desde la biblioteca @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";

// Importa la lista de productos desde el archivo products.json
import Products from '../../Data/products.json';

// Define el slice "Shop" con su estado inicial y las acciones (reducers) que puede manejar
export const shopSlice = createSlice({
    name: "Shop", // Nombre del slice (puede ser utilizado como prefijo para las acciones)
    initialState: { // Estado inicial del slice
        value: {
            categorySelected: "", // Categoría seleccionada (inicializada en vacío)
            idSelected: "", // ID del producto seleccionado (inicializado en vacío)
            allProducts: Products, // Lista de todos los productos obtenidos desde products.json
            productsSelected: [] // Lista de productos filtrados por categoría (inicialmente vacía)
        }
    },
    reducers: {
        // Reducer para establecer la categoría seleccionada
        setCategorySelected: (state, action) => {
            // Filtrar los productos según la categoría seleccionada y guardarlos en productsSelected
            state.value.productsSelected = state.value.allProducts.filter(product => product.category === action.payload);

            // Actualizar la categoría seleccionada en el estado
            state.value.categorySelected = action.payload;
        },
        // Reducer para establecer el producto seleccionado por su ID
        setIdSelected: (state, action) => {
            // Actualizar el ID del producto seleccionado en el estado
            state.value.idSelected = action.payload;
        }
    }
});

// Exporta las acciones creadas por el slice (setCategorySelected, setIdSelected)
export const { setCategorySelected, setIdSelected } = shopSlice.actions;

// Exporta el reducer generado por el slice
export default shopSlice.reducer;
