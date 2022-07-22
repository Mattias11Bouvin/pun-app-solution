import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

function Pun() {
    const params = useParams();
    console.log(params);

    const [pun, setPun] = useState([]);

    const fetchPun = async () => {
        try {
            const response = await fetch('https://puns-app.herokuapp.com/puns/' + params.id)
            const data = await response.json();

            setPun(data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPun();
    }, [])

    return (
        <div>
            <h1>Pun with id: {params.id}</h1>

            <p>{pun.content} - <i>{pun.date}</i></p>
        </div>
    )
}

export default Pun