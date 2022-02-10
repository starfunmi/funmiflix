import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './user.scss';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const User = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState("1")

    const history = useHistory();

    console.log(loading);

    useEffect(() => {
        const response = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=ee55005986ad462c48301bfcc7b25fb6&language=en-US&page=${page}`)
        // .then(res => console.log(res.data.results))
        //  https://api.themoviedb.org/3/movie/top_rated?api_key=ee55005986ad462c48301bfcc7b25fb6&language=en-US
        .then(res => setPosts(res.data.results))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    
    }, [page])

    const handleRouting = async (id) => {
        await setId(id)
        history.push(`/user/${id}`, {postId: id})
    }

    const imgLink ="https://image.tmdb.org/t/p/w1280";

    const imgStyle = {
        "width":"70%",
        "margin": "auto",
        "display": "flex"
    }

    const paraText = {
        "textAlign": "center",
        "fontSize": "24px",
        "fontWeight": "700"
    }

    const pageFire = (e) => setPage(e.target.value)

  return <div className='user'>
      <h1>TOP 500 Movies from TMDB</h1>
      <p style={{color: "#fff"}}>Result
      <select value="" style={{marginLeft: "10px"}} onChange={pageFire}>
        <option value="1">Page 1</option>
        <option value="2">Page 2</option>
        <option value="3">Page 3</option>
        <option value="4">Page 4</option>
        <option value="5">Page 5</option>
      </select>

      </p>

      {loading ? "Loading posts..." : 
          <div className="postlist">
          {posts.map(({title, id, poster_path}) => {
          return (
                <div onClick={() => handleRouting(id)} className="post" key={id}>
                    <img src={imgLink + poster_path} style={imgStyle} alt="movie-image"/>
                    <p style={paraText}>{title}</p>
                    
                </div>
          )
      })}
      </div>}
      



  </div>;
};

export default User;
