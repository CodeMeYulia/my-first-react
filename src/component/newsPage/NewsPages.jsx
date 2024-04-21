import { useParams } from "react-router-dom"
import style from './NewsPage.module.css'

export default function NewPage(props) {
    const { id } = useParams();
    const news = props.news.find(news => news.id == id)

    return (
        <div className={style.backred}>
            <p>
                {news.text}
            </p>

        </div>
    )
}

