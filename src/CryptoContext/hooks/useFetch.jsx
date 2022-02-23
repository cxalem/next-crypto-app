import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endPoint) => {
  const [coins, setCoins] = useState([]);
  const getData = async () => {
    const response = await axios.get(endPoint);
    setCoins(response.data);
  };

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return coins;
};

export { useFetch };
