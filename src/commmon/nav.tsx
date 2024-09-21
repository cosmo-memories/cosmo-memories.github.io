import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const PageNav = () => {
    return (
        <div>
            <h1><Link to={"/"}>Main</Link> //</h1>
            <br />
            <h1><Link to={"/"}>About</Link> //</h1>
            <br />
            <h1><Link to={"/"}>Projects</Link> //</h1>
            <br />
            <h1><Link to={"/helloworld"}>Testing</Link> //</h1>
            <br />
        </div>
    )
}

export default PageNav;