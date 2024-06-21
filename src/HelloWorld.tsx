import { Link } from "react-router-dom";

const HelloWorld = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <h3><Link to={"/"} className='tlink'>Back to Main</Link></h3>
        </div>
    )
}

export default HelloWorld;