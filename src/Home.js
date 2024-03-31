import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'
import NewsArticle from "./components/NewsArticle";

function Home() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('pune')

  const loadNews = async () => {
    try{
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-03-25&to=2024-03-25&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);
    
        setNews(response.data.articles);

    }
    catch(error){
        console.log(error);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

useEffect(()=>{
    loadNews()
}, [searchQuery])

  return (
    <div>
      <h1 className="app-header">News App</h1>
      <input type="text" className="search-input"
      value={searchQuery}
      onChange={(e)=>{setSearchQuery(e.target.value)}}
      />
      <div className="news-container">
      {
        news.map((newsArticle, index)=>{
            const {title, author, description, content, url, urlToImage, publishedAt}=newsArticle;
            return(<NewsArticle author={author} title={title} description={description} content={content} url={url} urlToImage={urlToImage} publishedAt={publishedAt}/>)
        })
      }
      </div>
    </div>
  );
}

export default Home;
