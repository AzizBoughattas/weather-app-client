import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherOptions from "./components/WeatherOptions";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Chart from "./components/Chart";
import axios from "axios";
import { Spin, message } from "antd";

function App() {
  const [responseData, setResponseData] = useState<any>();
  const [unit, setUnit] = useState("metric");
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/temperature")
      .then((res) => {
        setResponseData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const searchTemp = (value: string) => {
    axios
      .post("http://localhost:3001/api/temperature", {
        ville: value,
        unit,
      })
      .then((res) => {
        setResponseData(res.data);
      })
      .catch((error) => {
        console.log(error);
        messageApi.open({
          type: "error",
          content:
            "Something went wrong ! Please provide a valid city and try again",
        });
      });
  };

  return (
    <>
      {contextHolder}
      {responseData ? (
        <>
          <WeatherOptions unit={responseData?.unit} onSetUnit={setUnit} />
          <SearchBar onSearchTemp={searchTemp} />
          <Cards
            unit={responseData?.unit}
            ville={responseData?.ville}
            values={responseData?.values}
          />
          <Chart values={responseData?.values} />{" "}
        </>
      ) : (
        <Spin />
      )}
    </>
  );
}

export default App;
