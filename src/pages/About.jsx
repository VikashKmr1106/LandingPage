import React from 'react';
import countrydata from  '../assets/api/countryData.json'

const About = () => {
	console.log(countrydata.countriesData)
	return (
		<>
		<div className="content-div text-center lg:text-6xl md:text-3xl sm:text-lg mt-6">
					<h2>Here are the Interesting Facts <br/>
					we're are proud of</h2>
				</div>
		  <section className="about container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-12 py-12 px-3">
			{countrydata.countriesData.map((country) => {
          return (
            <div key={country.id} className="card p-4 border rounded shadow-lg">
              <h3 className="text-lg font-bold">{country.name}</h3>
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Currency: {country.currency}</p>
            </div>
          );
        })}
			</section>
		</>
	)
}

export default About