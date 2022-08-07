import React from "react";
import { useState, useEffect } from "react";
import Link from 'next/link'

function CountryInfo() {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      console.log(data)
      setCountry(data);
      setIsLoading(false);
      console.log(data);
    };

    fetchCountryData();
  }, [name]);

  return (
    <>
      {isLoading ? (
        <h1 className="flex items-center justify-center h-screen text-4xl uppercase tracking-widest text-gray-900 dark:text-white lg:text-7xl font-bold">
          Loading...
        </h1>
      ) : (
        <div className="w-screen xl:h-screen ">
          <button className="mt-10 ml-3">
            <Link
              href="/"
              className="xl:ml-20 bg-black pb-3 pt-2 pl-4 pr-6 rounded shadow text-white fobt-bold tracking-wide animate-pulse"
            >
              &larr; Back
            </Link>
          </button>

          <section className=" pt-20 px-5  ">
            {country.map(
              ({
                name,
                capital,
                region,
                tld,
                flags,
                nativeName,
                population,
                subregion,
                currencies,
                languages,
                borders,
              }) => (
                <article key={name.common} className="xl:flex xl:mx-20 ">
                  <img src={flags.svg} alt={name.common} />
                  <div className="w-full flex-col xl:ml-40">
                    <h2 className="text-4xl  font-bold text-gray-900 dark:text-white mt-10 mb-5">
                      {name.common}
                    </h2>

                    <div className="xl:flex mt-10">
                      <ul>
                        <li className="text-gray-900 dark:text-white">
                          <span className="font-bold">Native Name:</span>{" "}
                          {Object.values(name)[1]}
                        </li>
                        <li className="mt-2 text-gray-900 dark:text-white ">
                          <span className="font-bold">Population:</span>
                          {population}
                        </li>
                        <li className="mt-2 text-gray-900 dark:text-white">
                          <span className="font-bold">Region:</span>
                          {region}
                        </li>
                        <li className=" mt-2 text-gray-900 dark:text-white ">
                          <span className="font-bold">Sub Region:</span>
                          {subregion}
                        </li>
                        <li className="mt-2 text-gray-900 dark:text-white ">
                          <span className="font-bold">Capital:</span>
                          {capital}
                        </li>
                      </ul>

                      <ul className="mt-10 xl:mt-0 xl:ml-40">
                        <li className="text-gray-900 dark:text-white ">
                          <span className="font-bold">Top Level Domain:</span>
                          {tld}
                        </li>
                        <li className="mt-2 text-gray-900 dark:text-white ">
                          <span className="font-bold">Currencies:</span>
                          {Object.values(currencies)[0].name}
                        </li>
                        <li className="mt-2 text-gray-900 dark:text-white ">
                          <span className="font-bold">Languages:</span>
                          {Object.values(languages).toString()}
                        </li>
                      </ul>
                    </div>

                    <aside>
                      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-10 mb-5">
                        Borders:
                      </h2>
                      {borders ? (
                        borders.map((border) => (
                          <button className="bg-white dark:bg-light-grey dark:text-white first:mx-0 mx-2 my-3 pb-3 pt-2 pl-4 pr-6 rounded shadow  fobt-bold tracking-wide">
                            {border.toString()}
                          </button>
                        ))
                      ) : (
                        <p className=" dark:text-white font-bold tracking-wide">
                          {" "}
                          There are no borders{" "}
                        </p>
                      )}
                    </aside>
                  </div>
                </article>
              )
            )}
          </section>
        </div>
      )}
    </>
  );
}

export default CountryInfo;
