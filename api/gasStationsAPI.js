import axios from "axios";

const gasStationsApi = {
    fetchAllGasStations: () => {
        try {
            return axios.get('http://192.168.1.7:8000/gas-stations/all')
                .then((res) => res.data)
                .catch((err) => console.log('handle me!', err))
        } catch (error) {
            console.log('ERROR IN GET ALL GAS STATIONS ENDPOINT!');
        }
    }
};

export default gasStationsApi;
