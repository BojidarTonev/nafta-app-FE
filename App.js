import {Navigation} from "./navigators/navigation";
import { Provider } from 'react-redux';
import store from './redux/store';

//Dispatch the fetchPosts() before our root component renders
// store.dispatch(fetchGasStationDetails());

export default function App() {
    return (
        <Provider store={ store }>
            <Navigation/>
        </Provider>
    );
}