import React from "react";
import "./Youtube.css";
import Youtube from "./Youtube";
import { Button } from "react-bootstrap";
import VideoList from "./VideoList";

const ApiKey = "AIzaSyARCbccCAeSsQWNb0DgBWnObEYanJPbBio";
const result = 10;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      resultyt: []
    };

    this.getSearch = this.getSearch.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  getSearch(e) {
    this.setState({ search: e.target.value });
  }

  clicked(e) {
    let finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&q=${
      this.state.search
    }&key=${ApiKey}`;
    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson);
        let resultyt = responseJson.items.map(
          obj => "https://www.youtube-nocookie.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
        // console.log(this.state.resultyt);
      })
      .catch(error => {
        console.error(error);
      });
  }
  //<Video link={this.state.resultyt[0]} />
  //<VideoList resultyt={this.state.resultyt} />
  render() {
    return (
      <div className="header">
        <h1>YouTube</h1>
        <input onChange={this.getSearch} />
        <Button onClick={this.clicked}>Go</Button>
        <VideoList resultyt={this.state.resultyt} />
      </div>
    );
  }
}
export default Search;
