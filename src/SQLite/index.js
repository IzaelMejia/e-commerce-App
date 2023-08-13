import * as SQLite from 'expo-sqlite';

// Importa el módulo SQLite necesario para las operaciones de la base de datos.

// Genera un nuevo archivo de base de datos SQLite llamado 'sessions.db'.
const db = SQLite.openDatabase('sessions.db');

// El siguiente código define funciones para inicializar, eliminar, insertar y recuperar datos de una tabla de base de datos SQLite.

// Inicializa la base de datos SQLite y crea la tabla 'sessions' si no existe.
export const init = () => {
    const promise = new Promise((res, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, idToken TEXT NOT NULL)',
                [],  //array vacvio para enviar parametros
                (_, resultado) => res(resultado), //callback por si resulto bien la transaccion  
                (_, error) => rej(error)           //callback de error 
            );
        });
    });
    return promise;  //devuelve promise porque la accion de asincrona
}

// Elimina la tabla 'sessions' de la base de datos si existe.
export const dropTableSessions = () => {
    const promise = new Promise((res, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'DROP TABLE IF EXISTS sessions ',
                [],
                (_, resultado) => res(resultado),
                (_, error) => rej(error)
            );
        });
    });
    return promise;
}

// Inserta una nueva sesión en la tabla 'sessions' con el correo electrónico, localId e idToken proporcionados.
export const insertSession = ({
    email,
    localId,
    idToken
}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO sessions (email, localId, idToken) VALUES (?, ?, ?);',
                [email, localId, idToken],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

// Recupera todos los registros de la tabla 'sessions'.
export const getSession = () => {
    const promise = new Promise((acc, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM sessions',
                [],
                (_, result) => acc(result),
                (_, error) => rej(error)
            )
        })
    })
    return promise
}

// Estas funciones utilizan la base de datos SQLite para gestionar datos de sesiones, lo que te permite inicializar la base de datos, crear y eliminar la tabla 'sessions', insertar nuevas sesiones y recuperar datos de sesión de la tabla.
