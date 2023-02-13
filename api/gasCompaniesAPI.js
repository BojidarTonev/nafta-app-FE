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
    },
    fetchGasCompaniesByFuel: (fuelName) => {
        try {
            return axios.get(`http://192.168.1.2:8000/gas-companies/by-fuel/${fuelName}`)
                .then((res) => {
                    const normalizedData = res.data.map((item) => {
                        const fuel = item.fuels.find((fuel) => fuel.fuel === fuelName);
                        return {
                            name: item.name,
                            imageUrl: item.imageUrl,
                            ...fuel
                        }
                    })
                    return normalizedData;
                })
                .catch((err) => console.log('handle me!', err))
        } catch (err) {
            console.log('ERROR IN GET GAS COMPANIES BY FUEL ENDPOINT!');
        }
    }
};

export default gasCompaniesApi;
