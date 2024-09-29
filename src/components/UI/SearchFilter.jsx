import React from 'react'

const SearchFilter = ({search , setSearch , filter , setFilter , countries, setCountries}) => {

	const handleInputChange = (event) => {
		event.preventDefault()
		setSearch(event.target.value)
		console.log('search the value .....')
	}

	const handleSelectChange = (event) => {
		event.preventDefault()
		setFilter(event.target.value);
	}

	const sortCountries = (order) => {
    const sortedCountries = [...countries]; // Create a copy of the countries array to sort
    if (order === 'asc') {
      // Sort in ascending order (A-Z)
      sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (order === 'des') {
      // Sort in descending order (Z-A)
      sortedCountries.sort((a, b) => b.name.common.localeCompare(a.name.common));
    }
    setCountries(sortedCountries); // Update countries state with the sorted array
  };

	return (
		<>
		   <div className="inputSearch mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
				<div>
				<input className='border-2 p-2 w-full rounded border-black' type="text" placeholder='Search the country' value={search} onChange={handleInputChange}/>
				</div>
				<div>
				<button onClick={() => sortCountries('asc')} className=' bg-slate-500 p-2 rounded text-white w-full'>Ascending order</button>
				</div>
				<div>
				 <button onClick={() => sortCountries('des')} className=' bg-slate-500 p-2 rounded text-white w-full'>Decending order</button>
				</div>
				<div>
				   <select value={filter} onChange={handleSelectChange} className='border-2 border-black p-2 rounded w-full'>
						 <option value="all">All</option>
						 <option value="Africa">Africa</option>
						 <option value="Americas">Americas</option>
						 <option value="Asia">Asia</option>
						 <option value="Europe">Europe</option>
						 <option value="Oceania">Oceania</option>
						 
					 </select>
				</div>

				  
			 </div>
		</>
	)
}

export default SearchFilter