import React from 'react';
import VideoDetails from './VideoDetails';

// import "./RecipeCard.css";
import './RecipeCard.css';
// import "../App.css";


class RecipeVideoInfo extends React.Component{

    state = {
      videos:[]
    }
    getInfo = async (e) => {

        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();

        const api_call = await fetch(`https://api.spoonacular.com/food/videos/search?apiKey=5ae9bd305b734281af48f6956f037930&query=${recipeName}&number=10`);
        const data= await api_call.json();
        console.log(data);
        // console.log(data.videos[0]);
        this.setState({videos:data.videos});
        console.log(this.state.videos);
     }


    render(){
      return(
        <div>
           <h2 className="video_heading">Search</h2>
          <VideoDetails getInfo={this.getInfo}/>
          {this.state.videos.map((video) => {
            // return <p>{video.title}</p>
             return(

          <div>
              <div className="youtube_wrapper">

                <img className="video_img" src={video.thumbnail} alt={video.shortTitle}/>
                <h4>Title : {video.shortTitle}</h4>
                <p>Youtube ID : {video.youTubeId}</p>
                <p>Total Views : {video.views}</p>
                
              </div>
          </div>
             )
          })}
        </div>
      );
    }


}
export default RecipeVideoInfo;