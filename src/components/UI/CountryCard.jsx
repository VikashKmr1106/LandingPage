import React from 'react';
import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <li className="bg-white shadow-2xl rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="w-full h-40 object-cover"
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
				<NavLink to={`/country/${country.name.common}`}>
          <button className="bg-slate-500 p-2 rounded text-white font-semibold mt-2">
            Read More
          </button>
        </NavLink>
				
      </div>
    </li>
  );
};

export default CountryCard;
