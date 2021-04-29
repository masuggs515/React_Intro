const Tweet =({username, name, date, msg}) =>{
    return (
        <div className='tweet'>
            <h3>@{username}</h3> 
            <p>{msg}</p>
            <small><span>Tweet by {name} on {date}</span></small>
        </div>
    )
}