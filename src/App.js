import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/index';
import Home from './Pages/Home/index';
import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry,setselectedCountry] = useState('');
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  },[]);

  const getCountry=async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data[0].country)
    })
  }
  const values = {
    countryList,
    setselectedCountry,
    selectedCountry
  }

  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

export { MyContext };