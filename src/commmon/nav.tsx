import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PageNav = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
  
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1450);
    };
  
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div>
            {isDesktop ? (
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
            ) : (
                <div>
                    <h1><Link to={"/"}>Main</Link> // <Link to={"/"}>About</Link> // <Link to={"/"}>Projects</Link> // <Link to={"/helloworld"}>Testing</Link></h1>
                </div>
            )}
        </div>
    )
}

export default PageNav;