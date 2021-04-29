const Person = ({ age, name, hobbies }) => {
    return (
        <div className="person">
            <p>Learn some information about <i>@{name.substring(0, 6)}</i></p>
            <h3>{age >= 18 ? "Please go vote." : "You must be 18"}</h3>
            <div>
                <h4><b>Hobbies:</b></h4>
                <ul>


                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        </div>
    )
}