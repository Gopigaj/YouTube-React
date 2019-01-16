import React from "react";
import "./Youtube.css";
import { Button } from "react-bootstrap";

const ApiKey = "AIzaSyARCbccCAeSsQWNb0DgBWnObEYanJPbBio";
const result = 10;
//var search = "";

class Youtube extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: [],
      search: ""
    };
    this.clicked = this.clicked.bind(this);
    this.getSearch = this.getSearch.bind(this);
  }

  clicked(e) {
    let finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&q=${
      this.state.search
    }&key=${ApiKey}`;
    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson);
        const resultyt = responseJson.items.map(
          obj => "https://www.youtube-nocookie.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
      })
      .catch(error => {
        console.error(error);
      });
  }
  getSearch(e) {
    this.setState({ search: e.target.value });
    //console.log(this.state.search);
    e.preventDefault();
  }
  //https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCVk7uRN7g-q_uHMaAjHxk8A&maxResults=25&q=surfing&key=AIzaSyARCbccCAeSsQWNb0DgBWnObEYanJPbBio
  //https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyARCbccCAeSsQWNb0DgBWnObEYanJPbBio
  //apikey AIzaSyARCbccCAeSsQWNb0DgBWnObEYanJPbBio

  render() {
    console.log(this.state.resultyt);
    return (
      <div className="container">
        <input
          onChange={this.getSearch}
          className="d-flex justify-content-center"
        />
        <Button
          onClick={this.clicked}
          className="d-flex justify-content-center"
        >
          get video
        </Button>
        {this.state.resultyt.map((link, i) => {
          console.log(link);
          var frame = (
            <div className="youtube" key={i}>
              <iframe
                width="560"
                height="315"
                src={link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          );
          return frame;
        })}
        {this.frame}
      </div>
    );
  }
}
export default Youtube;
