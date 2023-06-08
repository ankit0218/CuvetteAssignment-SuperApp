import Profile from '../../images/profileBig.png'
import './info.css'
const Info = ()=>{
    const info = JSON.parse(window.localStorage.getItem("userData"))
    const genre = JSON.parse(window.localStorage.getItem("genres"))
    return (
        <div className='info'>
        <div>
            <img src={Profile} className='img'/>
        </div>
        <div className='info-more'>
            <p id='name'>{info.name}</p>
            <p id='mail'>{info.mail}</p>
            <p id='username'>{info.username}</p>
            <Chips categories={genre} color={"#9F94FF"}/>
        </div>
        </div>
    )
}

const Chips = ({color,categories})=>{
    return(
        <div style={{width:"20vw"}}>
       {categories.map((category)=>(
                <button style={{background:`${color}`}} className='CategoryButton'> {category}  <span id='X'>X</span></button>
        ))}
        </div>
    )
}

export default Info