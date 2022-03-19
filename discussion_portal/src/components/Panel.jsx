import { useState } from "react";

// components
import Header from "./LeftComponent/Header";
import Search from "./LeftComponent/Search";
import BlogPost from "./LeftComponent/BlogPost";

const Panel = () => {

    const [text,setText] = useState("");

    return (
        <>
        <Header />
        <Search setText={setText} />
        <BlogPost />
        </>
    )
}

export default Panel;