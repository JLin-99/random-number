import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";

const getRandomNumberFromAPI = async (): Promise<number> => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );

  const numberString = await res.text();
  return +numberString;
};

export const App = () => {
  const query = useQuery(["randomNumber"], getRandomNumberFromAPI);

  return (
    <div>
      {query.isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Random number: {query.data}</h1>
      )}
      {!query.isLoading && query.isError && <h3>{`${query.error}`}</h3>}

      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? "..." : "New number"}
      </button>
    </div>
  );
};
