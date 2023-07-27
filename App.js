import { useFonts } from 'expo-font'; 
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';

export default function App() {

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
