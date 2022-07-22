import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

function Puns() {
    const [puns, setPuns] = useState([]);

    const fetchPuns = async () => {
        try {
            const response = await fetch('https://puns-app.herokuapp.com/puns')
            const data = await response.json();

            setPuns(data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPuns();
    }, [])


    return (
        <div>
            <h1>Puns</h1>

            <section>
                {
                    puns.map( pun => (
                        <Link to={`/puns/${pun._id}`}><p>{pun.content} - <i>{pun.date}</i></p></Link>
                    ))
                }
            </section>
        </div>
    )
}

export default Puns