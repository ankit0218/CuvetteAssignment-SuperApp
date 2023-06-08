const Chips = ({color,id,setCategories,categories})=>{
    const handleClick = ()=>{
         const index = categories.indexOf(id)
            categories.splice(index,1)
            setCategories([...categories])
    }
    return(
        <div style={{width:"40vw"}}>
       {categories.map((category)=>(
                <button style={{background:`${color}`}} id="button-click" onClick={handleClick}>{category}  <span id="span-data">X</span></button>
        ))}
        </div>
    )
}

export default Chips