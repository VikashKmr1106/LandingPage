import React, { useState, useEffect, useTransition } from 'react';
import { getCountryApi } from '../assets/api/postApi';
import Loader from '../components/UI/Loader';
import CountryCard from '../components/UI/CountryCard';
import SearchFilter from '../components/UI/SearchFilter';

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null); // Add error state
  const [isPending, startTransition] = useTransition();

  const [search ,setSearch] = useState();
  const [filter , setFilter]  = useState('all');

  // console.log(search , filter)

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryApi();
        if (res && res.data) {
          setCountries(res.data);
          console.log(res);
					console.log(res.data);
        } else {
          throw new Error('Invalid API response');
        }
      } catch (err) {
        setError(err.message || 'Something went wrong');
        console.error('Error fetching countries:', err);
      }
    });
  }, []);

  

  if (isPending) return <h1>Loading...</h1>// Loader text while fetching data
  if (error) return <div>Error: {error}</div>; // Display error message if there's an error

  const searchCountry = (country) => {
    if(search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } return country;
  }

  const filterRegion = (country) => {
    if(filter === 'all') return country;
    return country.region === filter;
  }

  const filteredCountries  = countries.filter((country) => searchCountry(country) && filterRegion(country))

  return (
    <>
     <div className="container mx-auto p-4">

      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} 
        setCountries={setCountries} />
      
      {filteredCountries.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

					 {filteredCountries.map((country, index) => (
            <CountryCard key={index} country={country} /> 
          ))}

          {/* {countries.map((country, index) => (
            <li
              key={index}
              className="bg-white shadow-2xl rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                className="w-full h-40 object-cover p-5"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {country.name.common || country.name.official}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Region:</strong> {country.region}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Population:</strong> {country.population.toLocaleString()}
                </p>
              </div>
            </li>
          ))} */}
        </ul>
      ) : (
        <p>No countries available.</p>
      )}
    </div>
    </>
  );
};

export default Country;




// import React, { useState, useEffect, useTransition } from 'react';
// import { getCountryApi } from '../assets/api/postApi';
// import Loader from '../components/UI/Loader';
// import CountryCard from '../components/UI/CountryCard';
// import SearchFilter from '../components/UI/SearchFilter';

// const Country = () => {
//   const [countries, setCountries] = useState([]);
//   const [error, setError] = useState(null); // Add error state
//   const [isPending, startTransition] = useTransition();

//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState('all');

//   useEffect(() => {
//     startTransition(async () => {
//       try {
//         const res = await getCountryApi();
//         if (res && res.data) {
//           setCountries(res.data);
//         } else {
//           throw new Error('Invalid API response');
//         }
//       } catch (err) {
//         setError(err.message || 'Something went wrong');
//         console.error('Error fetching countries:', err);
//       }
//     });
//   }, []);

//   // Apply filtering logic
//   const filteredCountries = countries.filter((country) => {
//     // Filter by search term (checking in name)
//     const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
    
//     // Filter by filter criteria (region in this example)
//     const matchesFilter = filter === 'all' || country.region === filter;
    
//     // Return countries that match both search and filter
//     return matchesSearch && matchesFilter;
//   });

//   if (isPending) return <h1>Loading...</h1>; // Loader text while fetching data
//   if (error) return <div>Error: {error}</div>; // Display error message if there's an error

//   return (
//     <>
//       <div className="container mx-auto p-4">
//         <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
        
//         {filteredCountries.length > 0 ? (
//           <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredCountries.map((country, index) => (
//               <CountryCard key={index} country={country} /> 
//             ))}
//           </ul>
//         ) : (
//           <p>No countries available.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default Country;
