import axios from "axios";

const gasCompaniesApi = {
    fetchAllGasCompanies: () => {
        try {
            return axios.get('http://192.168.1.2:8000/gas-companies/all')
                .then((res) => res.data)
                .catch((err) => console.log('handle me!', err))
        } catch (err) {
            console.log('ERROR IN GET ALL GAS COMPANIES ENDPOINT!');
        }
    },
    fetchGasCompanyById: (id) => {
        try {
            return axios.get(`http://192.168.1.2:8000/gas-companies/details/${id}`)
                .then((res) => res.data)
                .catch((err) => console.log('handle me!', err))
        } catch (err) {
            console.log('ERROR IN GET COMPANY BY ID ENDPOINT!');
        }
    },
    fetchGasCompanyGasStations: (id) => {
        try {
            return axios.get(`http://192.168.1.2:8000/gas-companies/gas-stations/${id}`)
                .then((res) => res.data)
                .catch((err) => console.log('handle me!', err))
        } catch (err) {
            console.log('ERROR IN GET COMPANY STATIONS ENDPOINT!')
        }
    }
};

export default gasCompaniesApi;
