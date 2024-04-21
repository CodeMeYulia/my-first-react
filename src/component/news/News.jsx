import React from "react";
import { Link } from 'react-router-dom'
import style from './News.module.css'

function News(props) {
    const news = props.news

    return (
        <ul>
            {
                news.map((item) =>
                    <div className={style.linkNews}>
                        <Link to={`/news/${item.id}`}> {item.id}: {item.title} </Link>

                    </div>
                )
            }
        </ul>
    )
}

export default News