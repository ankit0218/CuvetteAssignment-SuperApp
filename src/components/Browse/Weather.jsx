import { useEffect, useState } from "react"

const Weather = ()=>{
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [weather, setWeather] = useState(false)
    // console.log(weather)
    useEffect(()=>{
        const fetchWeather = async()=>{
            await fetch("http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=London&aqi=no")
                .then(async(data)=>await data.json()).then((data)=>setWeather(data)) 
        }
        fetchWeather()
    },[])
    useEffect(()=>{
        const date = new Date
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime)
    })
    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setDate(formattedToday)
    })
    return (
        <div className="Weather-main">
            <div className="Weather-data">
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <div>
                {weather ?<div id="Weather-container"> <div>
                    <img src={weather.current.condition.icon} id="W-img"/>
                    <p>{weather.current.condition.text}</p>
                </div>
                <div>
                   <p className="Weather-details"><span>{weather.current.temp_c}</span>C</p>
                    <p>{weather.current.pressure_mb} pressure</p>
                </div>
                <div>
                    <p className="Weather-details">{weather.current.wind_kph} wind</p>
                    <p>{weather.current.humidity} humidity</p>
                </div></div>:<></>}
              </div>
        </div>
    )
}

export default Weather

