// Importaciones necesarias para configurar el store y trabajar con la API de consultas
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterReducer from '../Features/Counter/counterSlice';
import shopReducer from '../Features/Shop/shopSlice';
import cartReducer from '../Features/Cart/CartSlice';
import { shopApi } from '../Services/shopServices';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApi } from '../Services/authServices';
import userReducer from "../Features/User/userSlice"

// Configura el store de Redux con varios reducers y una API de consultas
const store = configureStore({
    reducer: {
        counterReducer, // Reducer para la funcionalidad de contador
        shopReducer, // Reducer para la funcionalidad de la tienda
        cartReducer, // Reducer para la funcionalidad del carrito
        userReducer,
        [shopApi.reducerPath]: shopApi.reducer, // Reducer para la API de consultas (shopApi)
        [authApi.reducerPath]: authApi.reducer,

    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware), // Agrega el middleware de la API de consultas a los middlewares predeterminados
});

// Configura los listeners para las consultas de la API
setupListeners(store.dispatch);

// Exporta el store configurado para que se pueda utilizar en toda la aplicación
export default store;
