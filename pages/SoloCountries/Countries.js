import React from "react";
import Link from "next/link";

function Countries({ input, isLoading, filteredData, countries }) {
  console.log(countries);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : input.length > 1 ? (
        <section className=" grid grid-cols-1 auto-cols-auto sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {filteredData.map((c, index) => {
            const { name, flags, population, region, capital } = c;

            return (
            
                <article id="country" className="px-5 grid " key={index}>
                  <div className="bg-white dark:bg-light-grey dark:text-white shadow-2xl my-20   font-thin rounded">
                    <img
                      className="rounded-t-lg w-full"
                      src={flags.svg}
                      alt={name.common}
                    />
                    <div className="p-8">
                      <h2 className="font-bold mb-5 text-xl">{name.common}</h2>
                      <h3 className="font-medium">
                        Population:
                        <span className="font-thin"> {population}</span>
                      </h3>
                      <h3 className="font-medium">
                        Region: <span className="font-thin">{region}</span>
                      </h3>
                      <h3 className="font-medium">
                        Capital: <span className="font-thin">{capital}</span>
                      </h3>
                    </div>
                  </div>
                </article>
     
            );
          })}
        </section>
      ) : (
        <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {countries.map((c, index) => {
            const { name, flags, population, region, capital } = c;

            return (
           
                <article id="country" className="px-8 " key={index}>
                  <div className=" flex flex-col flex-1 bg-white dark:bg-light-grey dark:text-white shadow-2xl my-20   font-thin rounded">
                    <div className="flex justify-center  ">
                      <img
                        className="rounded-t-lg w-full "
                        src={flags.svg}
                        alt={name.common}
                      />
                    </div>

                    <div className="p-8">
                      <h2 className="font-bold mb-5 text-xl">{name.common}</h2>
                      <h3 className="font-medium">
                        Population:
                        <span className="font-thin"> {population}</span>
                      </h3>
                      <h3 className="font-medium">
                        Region: <span className="font-thin">{region}</span>
                      </h3>
                      <h3 className="font-medium">
                        Capital: <span className="font-thin">{capital}</span>
                      </h3>
                    </div>
                  </div>
                </article>
      
            );
          })}
        </section>
      )}
    </>
  );
}

export default Countries;
