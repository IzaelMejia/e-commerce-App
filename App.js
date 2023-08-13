import { useFonts } from 'expo-font'; 
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import {dropTableSessions, init} from  "./src/SQLite/index.js"

export default function App() {

  // pARA INICIALIZAR LA BASE DE DATOS 
  useEffect(()=> {
    init()    //Ejecutamos funcion importada qu epuede resolver o rechazar 
      .then((result)=> {
        console.log('Db initialized/dropped')
        console.log(result);
      })
      .catch(err => {
        console.log("Initialization DB failed:");
        console.log(err.message);
    })
  }, [])

  // Hook de fuente de letra
  const [fontsLoaded] = useFonts({
    'Fira': require('./src/assets/fonts/FiraSansCondensed-Medium.ttf'),
  });

  // Si no hay fuentes cargadas no muestres nada
  if (!fontsLoaded) {
    return null;
  }
  return (

    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}
