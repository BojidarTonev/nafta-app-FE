import {Navigation} from "./navigators/navigation";
import { Provider } from 'react-redux';
import store from './redux/store';
// fonts
import { useFonts, RobotoCondensed_400Regular, RobotoCondensed_700Bold} from '@expo-google-fonts/roboto-condensed'
import { HindMadurai_400Regular, HindMadurai_700Bold } from '@expo-google-fonts/hind-madurai'

export default function App() {
    const [loaded] = useFonts({
        'HeadingRegular': RobotoCondensed_400Regular,
        'HeadingBold': RobotoCondensed_700Bold,
        'NormalRegular': HindMadurai_400Regular,
        'NormalBold': HindMadurai_700Bold
    })

    if(!loaded) return null;

    return (
        <Provider store={ store }>
            <Navigation/>
        </Provider>
    );
}