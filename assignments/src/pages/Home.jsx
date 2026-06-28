import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
        <div>
            <h1>ASSIGNMENTS</h1>
            <ul>
                <li>DAY-1</li>
                    <ul>
                        <li><Link to= {"/student"}>assignment-1</Link></li>
                        <li><Link to= {"/employee"}>assignment-2</Link></li>
                        <li><Link to= {"/product"}>assignment-3</Link></li>
                        <li><Link to= {"/movie"}>assignment-4</Link></li>
                        <li><Link to= {"/company"}>assignment-5</Link></li>
                        <li><Link to= {"/fullpage"}>assignment-6,7,8</Link></li>

                    </ul>
                <li><Link to= {"/day3"}>DAY-3</Link></li>
                <li><Link to= {"/day8"}>DAY-8</Link></li>

                
            </ul>
        </div>
        </>
    )
}
export default Home