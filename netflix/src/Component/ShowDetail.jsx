import { useEffect, useState } from "react"
import FetchMovies from "./Fetch"






const ShowDetail = (props) => {
    const [show, setShow] = useState('null')

    useEffect(() => {
        let id = props.match.params.id
        let movie = <FetchMovies />
        console.log('this is movies', movie)
        movie.find()
    })
    return (
        {

        }
    )



}
export default ShowDetail




