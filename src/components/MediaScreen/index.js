import React, {useState, useEffect} from "react";
import "./styles.css";
import axios from "../../axios";

const MediaScreen = ({heading, fetchURL}) => {

    const [data, setData] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchURL) 
      setData(response.data.results);
      return response;
      
    }
    fetchData();
  }, [fetchURL])

  console.log(data);

    return (
        <div className="mediaScreen" >
            <div>{heading}</div>
            <div className="banner">
            {data.map((item, key) => {
                return(
                <div className="mediaDiv" key={item.id}>
                    <img src={`${base_url}${item.backdrop_path}`} alt={item.name} className="mediaImg"/>
                    <div>
                <div className="title">{item.name}</div>
                </div>
                </div>)})}
            
        </div>
        </div>
    )
}

export default MediaScreen;