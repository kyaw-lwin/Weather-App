import React from 'react';
import Card from 'react-bootstrap/Card';
import App from "./App.css";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import wind from "./trans speed white.png";
import hums from "./trans hums white.png";
import temp from "./temp icon white.png";


  function Scard (props){

    const days = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const day = new Date(parseInt(props.date) * 1000);
    const nameDay = days[day.getDay(day)]
    const month = months[day.getMonth(day)]
    const date = day.getDate(day)
    const image =  `http://openweathermap.org/img/wn/${props.image}@2x.png`
    const maxTemp = Math.round(((props.tempMax)-273.15), 1)
    const minTemp = Math.round(((props.tempMin)-273.15), 1)
    const windSpeed = Math.round(props.windSpeed, 1)
    // const dataKey = props.date + "data"
    const description = props.description
    const feelsLike = Math.round(props.feelslike, 1)
    const humidity1 = Math.round(props.humidity, 1)
    return (
    <>
        <Card className = "Cdaymainframe">
          <Card.Header className="Cheader" as="h1">
            Weather info for {nameDay}{"-"}{date}{"-"}{month}
            <br></br>
          </Card.Header>
          <Container className="CinnerCards">
              <div>
              <Card.Body className="CdayinnerBody">
                <Card.Text className= "">
                  {date}{"-"}{month}
                </Card.Text>
                <Image className="mx-auto" src={image} alt={props.alt} width={70} />
                <p className="description">
                  {description}
                </p>
                <br></br>
                  <Card className = "Cinnerframe1">
                    <Card.Body className = "">
                      Max Temp <br></br> {maxTemp} <sup>o</sup>C
                    </Card.Body>
                  </Card>
                  <Card className = "Cinnerframe2">
                    <Card.Body className = "">
                      Min Temp <br></br> {minTemp} <sup>o</sup>C
                    </Card.Body>
                  </Card>
              </Card.Body>
              </div>
              <div>
              <Card.Text className= "Cmainvars">
                <Image className="mx-auto image" src={wind} width={30} /> <br></br>
                  Wind Speed: {windSpeed}
                  <br></br>
                  <br></br>
                  <Image className="mx-auto image" src={hums} width={25} /> <br></br>
                  Humidity: {humidity1}
                  <br></br>
                  <br></br>
                  <Image className="mx-auto image" src={temp} width={30} /> <br></br>
                  Feels Like: {feelsLike}
              </Card.Text>
              </div>
          </Container>
      </Card>
    </>
    );
  }
export default Scard;







