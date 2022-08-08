import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Countries from "../pages/SoloCountries/Countries"
import Header from "../components/Header";

function Home() {
  const regions = [
    {
      name: "Filter by region",
      desc: "All",
    },
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ];

  const [value, setValue] = useState(""); // controlling the state of user input

  const [country, setCountry] = useState([]); //holding all countries data in array type

  const [isLoading, setIsLoading] = useState(true); //verifying whether data is being acquired

  const url = "https://restcountries.com/v3.1/all";
  //Fethching all countries using async await.
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      console.log(newData)
      setCountry(newData);
      setIsLoading(false);
    };
    fetchData();
  
  }, [ ]);

  //Filtering through all countries to verify whether user input 
  //is included within the names of all countries.
  const filteredData = country.filter((el) => {
    if (value === "") {
      return el;
    } else {
      return el.name.common.toLowerCase().includes(value.toLowerCase());
    }
  });

//Setting user input to our value state to keep track of input.
  const handleChange = (event) => {
    let userInput = event.target.value;
    setValue(userInput);
  };

//Fetching regions dynamically 
  const filterRegions = async (region) => {
    //regions in parameter is changed on line 107 through onChange on select
    if (region) {
      const url = "https://restcountries.com/v3.1/region/";
      const res = await fetch(`${url}/${region}`);
      const data = await res.json();
      setCountry(data);
    } else {
      return null;
    }

    // console.log(data)
  };

  //filter by region
  useEffect(() => {
    filterRegions();
  }, []);

  return (
    <div className="dark:bg-light-grey">
    <Header />
      <section className="mx-8 flex flex-col md:flex md:flex-row md:w-full md:mx-0 mx-0 text-white">
        <form className="md:mx-8 md:w-6/12 shadow-xl bg-white dark:bg-light-grey dark:text-white flex items-center p-5 rounded m-8">
          <AiOutlineSearch className="dark:text-white text-black" />
          <input
            type="search"
            name="search"
            onChange={(e) =>handleChange(e)}
            value={value}
            className="p-2 text-black ml-5 bg-transparent"
            placeholder="Search for country ..."
          />
        </form>
        <div className="md:mx-8 md:w-6/12 text-black flex items-center md:justify-end itemsstart rounded ">
          <select
            name="select"
            id="select"
            value={regions.name}
            onChange={(e) => filterRegions(e.target.value)}
            className="m-8 md:m-0 shadow-xl bg-white dark:bg-light-grey dark:text-white flex items-center p-7 rounded "
          >
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Asia">Asia</option>
          </select>
        </div>
      </section>
      <Countries
        input={value}
        isLoading={isLoading}
        countries={country}
        filteredData={filteredData}
      />
    </div >
  );
}

export default Home;
