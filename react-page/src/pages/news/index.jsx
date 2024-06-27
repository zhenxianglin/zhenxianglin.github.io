import React from 'react';
import "./news.css"; // 引入样式文件

const newsList = [
    { 
        date: "[2024/07]", 
        text: null, 
        link: null, 
        linkText: null 
    },
];

export default function News() {
    return (
        <>
            <div className='title'>
                <h2>News</h2> {/* 大标题 */}
            </div>
            <div className="news-container">
                <ul className="news-list">
                    {newsList.map((news, index) => (
                        <li key={index}>
                            <span className="news-date">{news.date}</span> {news.text} <a href={news.link}>{news.linkText}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
