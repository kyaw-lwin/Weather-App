import axios from "axios";


export class ApiClient {
    responseStatusCheck (response)  {
        if(response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(new Error (response.statusText));
        }
    
      }

      getItems (url) {
        return axios.get(url)
        .then(this.responseStatusCheck)
        .catch( (error) => {
            console.log(error);
          })   
      }

      getWeatherSheffield() {
        return this.getItems("https://api.openweathermap.org/data/2.5/onecall?lat=53.3811&lon=1.4701&exclude=hourly,minutely&appid=f8b39e953ce6e00da6598d0f3448f83f")
        
      }
      getWeatherLondon() {
        return this.getItems("https://api.openweathermap.org/data/2.5/onecall?lat=51.5072&lon=0.1276&exclude=hourly,minutely&appid=f8b39e953ce6e00da6598d0f3448f83f")
        
      }
      getWeatherCardiff() {
        return this.getItems("https://api.openweathermap.org/data/2.5/onecall?lat=51.4837&lon=3.1681&exclude=hourly,minutely&appid=f8b39e953ce6e00da6598d0f3448f83f")
        
      }
      getWeatherEdinburgh() {
        return this.getItems("https://api.openweathermap.org/data/2.5/onecall?lat=55.9533&lon=3.1883&exclude=hourly,minutely&appid=f8b39e953ce6e00da6598d0f3448f83f")
        
      }
      getWeatherBelfast() {
        return this.getItems("https://api.openweathermap.org/data/2.5/onecall?lat=54.5973&lon=5.9301&exclude=hourly,minutely&appid=f8b39e953ce6e00da6598d0f3448f83f")
        
      }
}