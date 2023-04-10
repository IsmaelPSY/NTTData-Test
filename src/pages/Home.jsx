import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <>
            <h1>Welcome to this test</h1>
            <Link to='/employees'>Go to Employees Section</Link>
        </>
    )
}