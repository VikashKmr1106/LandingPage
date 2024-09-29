import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryApi } from '../../assets/api/postApi';

const CountryDetails = () => {
	const { id } = useParams(); // Get country name from URL
	const [country, setCountry] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchCountryDetails = async () => {
			try {
				const res = await getCountryApi();
				if (res && res.data) {
					const selectedCountry = res.data.find((c) => c.name.common === id);
					if (selectedCountry) {
						setCountry(selectedCountry);
					} else {
						throw new Error('Country not found');
					}
				} else {
					throw new Error('Invalid API response');
				}
			} catch (err) {
				setError(err.message || 'Something went wrong');
			} finally {
				setIsLoading(false);
			}
		};
		fetchCountryDetails();
	}, [id]);

	if (isLoading) return <h1>Loading...</h1>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className='container  mx-auto p-4'>
			{country ? (
				<div className='bg-white flex gap-5  shadow-2xl rounded-lg p-6'>
					<div>
						<img
							src={country.flags.png}
							alt={`Flag of ${country.name.common}`}
							className='w-full h-60 object-cover rounded'
						/>
					</div>
					<div>
						<h2 className='text-2xl font-bold mt-4'>
							{country.name.common} ({country.name.official})
						</h2>
						<p className='mt-2'>
							<strong>Capital:</strong>{' '}
							{country.capital ? country.capital[0] : 'N/A'}
						</p>
						<p>
							<strong>Region:</strong> {country.region}
						</p>
						<p>
							<strong>Population:</strong> {country.population.toLocaleString()}
						</p>
						<p>
							<strong>Subregion:</strong> {country.subregion}
						</p>
						<p>
							<strong>Languages:</strong>{' '}
							{country.languages
								? Object.values(country.languages).join(', ')
								: 'N/A'}
						</p>
					</div>
				</div>
			) : (
				<p>Country not found.</p>
			)}
		</div>
	);
};

export default CountryDetails;
