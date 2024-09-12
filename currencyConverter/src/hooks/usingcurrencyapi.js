// import React from 'react'
import { useState, useEffect } from "react";

function usingcurrencyapi(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  console.log("Data incominggg");
  return data;
}

export default usingcurrencyapi;
