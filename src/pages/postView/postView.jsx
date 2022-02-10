import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './postView.scss'

const PostView = (props) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(props.location.state.postId);

    const id = props.location.state.postId;

    useEffect(() => {
        const response = axios.get(`
        https://api.themoviedb.org/3/movie/${id}?api_key=ee55005986ad462c48301bfcc7b25fb6`)
        // .then(res => console.log(res.data))
         .then(res => setPost(res.data))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    
    }, [])

    const imgLink ="https://image.tmdb.org/t/p/w1280";

    const imgStyle = {
        "width":"50%",
        "margin": "auto",
        "display": "flex",
        "height": "40vh"
    }

    const paraText = {
        "textAlign": "center",
        "fontSize": "24px",
        "fontWeight": "700"
    }
  return <section className='post-view'>
      {loading ? "loading single post" :
          <div className="post">
          <div className="content-text">
          <h3>{post.title}</h3>
          <h4 style={{fontFamily: "sans-serif", textTransform: "uppercase"}}>Overview</h4>
          <p className="overview">{post.overview}</p>
          <h4 style={{fontFamily: "sans-serif", textTransform: "uppercase"}}>Release Date  <i style={{paddingLeft: "10px"}}>{post.release_date}</i></h4>
          <h4 style={{fontFamily: "sans-serif", textTransform: "uppercase"}}>Rating <i style={{paddingLeft: "10px"}}>{post.vote_average}</i></h4>

            <Link to="/users" style={{textDecoration:"none"}}> <button>Back</button> </Link>
          
          </div>
          
                   
                   

                    <div className="content-image">

                    <img src={imgLink + post.poster_path} style={imgStyle} alt="movie-image"/>

                    </div>

                   
        </div>

        
      
            
        }
  </section>;
};

export default PostView;
