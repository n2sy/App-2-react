import { useParams } from "react-router-dom";



function OneFilm() {
    const { id, age } = useParams();
    return (
        <div>
            {id} -- {age}
        </div>
    )
}

export default OneFilm;