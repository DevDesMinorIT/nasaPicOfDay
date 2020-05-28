import React, { useState, useEffect } from "react";
import axios from "axios";
import { Jumbotron } from "reactstrap";

const MainBodySection = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=qjHEttgdxRnSWKVoQ4WUyeItOSCN4frac7XBlEvp"
      )
      .then(response => {
        console.log(response);
        setData(response.data);
      })
      .catch(error => console.log("Error", error));
  }, []);

  return (
    <div>
      <Jumbotron>
        <h1 className="nasaFont">NASA</h1> <hr />
        <h3 className="paraFont">Picture Of the Day</h3>
        <img className="pic-width" src={data.url} alt="NASA Daily pic" />
        <h3 className="paraFont">{data.copyright}</h3>
        <p className="paraFont">{data.explanation}</p>
        <hr />
        <p className="paraFont">{data.date}</p>
      </Jumbotron>
    </div>
  );
};
export default MainBodySection;
