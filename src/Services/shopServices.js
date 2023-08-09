
// Importa la URL de configuración de la base de datos en tiempo real de Firebase
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { realtime_database_url } from "../Database/firebaseConfig";



// Crea el objeto shopApi usando createApi() de Redux Toolkit Query
export const shopApi = createApi({
    // Define la ruta donde se almacenará el reducer en el almacenamiento de Redux
    reducerPath: 'shopApi',

    // Define el baseQuery que se utilizará para las solicitudes de la API, //url a consultar "La nuestra"
    baseQuery: fetchBaseQuery({ baseUrl: realtime_database_url }),
    endpoints: (builder) => ({             // Define los endpoints de la API y sus consultas y transformaciones correspondientes

        //Ir a Home para llevar las categorias
        getCategories: builder.query({      // Endpoint para obtener todas las categorías
            query: () => `categories.json` //hace get al link de "realtime_database_url"/`categories.json`
        }),

        
        getProducts: builder.query({        // Endpoint para obtener todos los productos
            query: () => `products.json`
        }),

        // Endpoint para obtener productos por una categoría específica
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            // Función de transformación que registra la respuesta y devuelve un array de productos
            transformResponse: (response) => {
                console.log(response);
                const productsTransformed = Object.values(response);
                console.log(productsTransformed);
                return productsTransformed;
            }
        }),

        // Endpoint para obtener un producto por su ID
        getProductById: builder.query({
            query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
            // Función de transformación que devuelve el objeto del producto obtenido de la respuesta
            transformResponse: (response) => {
                const productTransformed = Object.values(response).pop();
                return productTransformed;
            }
        }),

        // Endpoint para enviar un nuevo pedido de carrito
        postCart: builder.mutation({
            // Consulta de mutación para enviar el pedido a la URL especificada
            query: (order) => ({
                url: `orders.json`,
                method: `POST`,
                body: order
            })
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
        }),
        //Aquí hacemos un put para que no me genere ninguna clave nueva de por medio.
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                },
            }),
        }),
    })
});

// Desestructura y exporta hooks individuales para cada consulta y mutación de los endpoints
export const {
    useGetCategoriesQuery, 
    useGetProductsQuery, 
    useGetProductsByCategoryQuery,
    useGetProductByIdQuery,
    usePostCartMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
} = shopApi
