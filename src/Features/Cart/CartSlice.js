// Importa la función createSlice desde la biblioteca @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define un slice llamado "Cart" con su estado inicial y las acciones (reducers) que puede manejar
export const cartSlice = createSlice({
    name: "Cart", // Nombre del slice (puede ser utilizado como prefijo para las acciones)
    initialState: { // Estado inicial del slice
        value: {
            user: "Hardcoder user", // Nombre de usuario predeterminado
            updatedAt: "", // Fecha de actualización del carrito
            total: null, // Total del carrito (inicializado en null)
            items: [] // Lista de artículos en el carrito (inicialmente vacía)
        }
    },
    reducers: {
        // Agregar roducto al carrito 
        addCartItem: (state, action) => {
            // Lógica para agregar un artículo al carrito
            // 1. Verificar si el producto ya existe en el carrito
            const productExists = state.value.items.some(item => item.id === action.payload.id);  //some devuelve true o false e caso que se cumpla 

            // 2. Lógica para manejar si el producto ya existe o no
            if (productExists) {
                // Si el producto ya existe, se actualiza la cantidad en lugar de agregar un nuevo artículo
                state.value.items = state.value.items.map(item => { //recorre item y caundo id corresponde al id que se quiera agregar le suma catidad y si o retorna catidad
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity; // Incrementa la cantidad
                        return item;
                    }
                    return item;
                });
            } else {
                // Si el producto no existe, se agrega como un nuevo artículo en el carrito
                state.value.items.push(action.payload);
            }

            // 3. Actualizar el total del carrito
            state.value.total = state.value.items.reduce(
                (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
                0
            );

            // 4. Actualizar la fecha de actualización del carrito
            state.value.updatedAt = new Date().toLocaleString();
        },
        removeCartItem: (state, action) => {
            // Lógica para eliminar un artículo del carrito (actualmente no está implementado)
        }
    }
});

// Exporta las acciones creadas por el slice (addCartItem, removeCartItem)
export const { addCartItem, removeCartItem } = cartSlice.actions;

// Exporta el reducer generado por el slice
export default cartSlice.reducer;
