import { useEffect, useState } from "react";
import "./App.css";

const getRandomNumberFromAPI = async (): Promise<number> => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  console.log("antes del .text()", res);
  const numberString = await res.text();
  return +numberString;
};

export const App = () => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    getRandomNumberFromAPI().then((number) => setNumber(number));
  }, []);

  return (
    <div>
      <h1>Random number: {number}</h1>
    </div>
  );
};