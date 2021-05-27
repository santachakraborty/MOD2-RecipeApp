
import React from 'react';

const VideoDetails = (props) => (
  
  <form className="video_form" onSubmit={props.getInfo}>
    <input className="video_input" type="text" name="recipeName"/>
    <button className="video_submit">Search</button>
  </form>
);

export default VideoDetails;