import React, { useState, useEffect } from "react";
import axios from "axios";
import {ApiClient} from './ApiClient';
import Scard from "./Scard";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import logo from "./weather logo1.png";
import Image from 'react-bootstrap/Image';

function App() {

  const [weather, changeWeather] = useState([]); //setting useState to an empty Array
  const [fetching,changeFetching] = useState(false); //stops uers refreshing more than once
  const [theCity,changeCity] = useState("sheffield");
  const apiClient = new ApiClient(); //calling in data weather app

  const inputChange=(e) => {
    changeCity (e.target.value);
  }

  const refreshWeather= () => {
      
      changeFetching(true) //allows user to refresh

      if (theCity == "Sheffield") {
        apiClient.getWeatherSheffield() //calling in data weather app

        .then((response) => {
          changeWeather(response.data.daily)//outputting all data from data.daily          
        })
        .finally( (state) => changeFetching(false));//stops uers refreshing more than once

      } else if (theCity == "London") {
        apiClient.getWeatherLondon()

        .then((response) => {
          changeWeather(response.data.daily)//outputting all data from data.daily          
        })
        .finally( (state) => changeFetching(false));//stops uers refreshing more than once

      } else if (theCity == "Cardiff"){
        apiClient.getWeatherCardiff() //calling in data weather app

        .then((response) => {
          changeWeather(response.data.daily)//outputting all data from data.daily          
        })
        .finally( (state) => changeFetching(false));//stops uers refreshing more than once


      } else  if (theCity == "Edinburgh"){
        apiClient.getWeatherEdinburgh() //calling in data weather app

        .then((response) => {
          changeWeather(response.data.daily)//outputting all data from data.daily          
        })
        .finally( (state) => changeFetching(false));//stops uers refreshing more than once


      } else {
        apiClient.getWeatherBelfast() //calling in data weather app

        .then((response) => {
          changeWeather(response.data.daily)//outputting all data from data.daily          
        })
        .finally( (state) => changeFetching(false));//stops uers refreshing more than once

      };
    }

  useEffect(() => { //runnning refreshWeather() everytime the page in refreshed
      refreshWeather();
  }, []);


  const buildMainCard = () =>  { //pulling only wanted variables from weather app and placing them in Scard
 
  return weather.slice(0, 1).map((current, i) => (
         <Scard date = {current.dt}   
                image = {current.weather[0].icon}
                description= {current.weather[0].description}
                tempMax= {current.temp.max}
                tempMin= {current.temp.min}
                windSpeed= {current.wind_speed}
                humidity= {current.humidity}
                feelslike= {current.feels_like.day}
                latitude={current.lat}
                longitude={current.lon}
              />
      )
    );
  }

  const buildSubCards = () =>  { //pulling only wanted variables from weather app and placing them in Scard
    return weather.slice(1, 6).map((current, i) => (
          <Scard date = {current.dt}
                image = {current.weather[0].icon}
                description= {current.weather[0].description}
                tempMax= {current.temp.max}
                tempMin= {current.temp.min}
                windSpeed= {current.wind_speed}
                humidity= {current.humidity}
                feelslike= {current.feels_like.day}
                latitude={current.lat}
                longitude={current.lon}
          />
        )
      );
    }



  return (
    
    <Container>

          
        <Navbar className="navbar">            

            <div className="searchCity">

              <label for="submit"></label>
                <select className = "searchbar" name="cityName" id="cityName" onChange={(e) => inputChange(e)}>
                  <option value="Sheffield">Sheffield</option>
                  <option value="London">London</option>
                  <option value="Belfast">Belfast</option>
                  <option value="Cardiff">Cardiff</option>
                  <option value="Edinburgh">Edinburgh</option>
                </select>
                
                <button className="button button1" onClick={refreshWeather}> Submit </button>
              
            </div>

        </Navbar>
       
        
        <div className="mainCard"> {buildMainCard()} </div>
        <div className="subCards"> {buildSubCards()} </div>
     
    </Container>

    );
}

export default App;
