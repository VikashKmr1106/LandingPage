import axios from 'axios';

const countryApi = axios.create({
	baseURL: 'https://restcountries.com/v3.1',
})
export const getCountryApi = () => {
	return countryApi.get('/all?fields=name,population,region,capital,flags');
}
export default countryApi;