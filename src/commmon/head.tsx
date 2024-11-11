import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PageHead = () => {

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
                    <h1 className="left"><b>COSMO MEMORIES</b></h1>
                    <h1 className="right"><a href="https://cosmo-memories.github.io/">HOME</a><b> // </b>
                                    <a href="https://cosmo-memories.github.io/blog/">BLOG</a><b> // </b>
                                    <a href="https://cosmo-memories.github.io/math/">MATH</a><b> // </b>
                                    <a href="https://github.com/cosmo-memories/">GITHUB</a></h1>
                    <br />
                    <hr />
                </div>
            ) : (
                <div>
                    <h1><b>COSMO MEMORIES</b></h1>
                    <h1><a href="https://cosmo-memories.github.io/">HOME</a><b> // </b>
                                    <a href="https://cosmo-memories.github.io/blog/">BLOG</a><b> // </b>
                                    <a href="https://cosmo-memories.github.io/math/">MATH</a><b> // </b>
                                    <a href="https://github.com/cosmo-memories/">GITHUB</a></h1>
                    <br />
                    <hr />
                    <br />
                    <h1><a href="https://cosmo-memories.github.io/">MAIN</a><b> // </b>
                                    <a href="https://cosmo-memories.github.io/">ABOUT</a><b> // </b>
                                    <a href="https://cosmo-memories.github.io/">PROJECTS</a><b> // </b>
                                    <a href="https://cosmo-memories.github.io/helloworld">TESTING</a></h1>
                </div>
            )}
        </div>
    )
}

export default PageHead;