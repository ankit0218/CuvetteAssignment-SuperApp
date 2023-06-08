import { useEffect, useState } from "react"

const News = ()=>{
    const [news, setNews] = useState('')
     const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    console.log(news)
    useEffect(()=>{
        const fetchNews = async()=>{
           await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-02-09&sortBy=publishedAt&apiKey=4ef9b38002184be3bf2ccb7b066196af")
                .then(async(data)=>await data.json()).then((res)=>setNews(res.articles[0]))
        }
        fetchNews();
    },[])
     useEffect(()=>{
        const date = new Date
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime)
    })
    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; 
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setDate(formattedToday)
    })
    return (
        <div className="News-container">
            <img src={news.urlToImage} className="News-img"/>
            <div className="News-description">
                {news.description}
            </div>
            <div className="News-content">
                <p id="News-title">{news.title} </p>
                <span className="date-time">{date} </span>
                <span className="date-time">{time} </span>
            </div>
        </div>
    )
}

export default News