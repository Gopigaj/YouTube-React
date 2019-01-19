import React from "react";
import Video from "./Video";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.resultyt);
  }
  render() {
    return (
      <div>
        {this.props.resultyt.map((link, i) => (
          <Video link={link} key={i} />
        ))}
      </div>
    );
  }
}
export default VideoList;
