import React from 'react'
import './NewsArticle.css'

function NewsArticle({title, author, urlToImage, url, description, content, publishedAt}) {
  return (
    <div className="news-card-container">
                <div className="news-card">
                    <img src={urlToImage} alt="" className="news-img" />
                    <h2 className="news-title">{title}</h2>
                    <div className="article-info">
                        <p>{author}</p>
                        <p>{publishedAt}</p>
                    </div>
                    <a href={url} target='_blank' className='btn-read-more'>Read More</a>
                </div>
                </div>
  )
}

export default NewsArticle