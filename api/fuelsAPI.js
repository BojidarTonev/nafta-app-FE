import axios from "axios";

const fuelsApi = {
    fetchAllFuels: () => {
        try {
            return axios.get('http://192.168.1.7:8000/fuels/all')
                .then((res) => res.data)
                .catch((err) => console.log('handle me!', err))
        } catch (error) {
            console.log('ERROR IN GET ALL FUELS API!');
        }
    }
};

export default fuelsApi;

