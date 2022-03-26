import { useState } from "react";

// components
import Header from "./LeftComponent/Header";
import Search from "./LeftComponent/Search";
import BlogPost from "./LeftComponent/BlogPost";

const Panel = ({open,setopen,setOpenform}) => {

    const [text,setText] = useState("");

    return (
        <>
        <Header />
        <Search setText={setText} />
        <BlogPost open={open} setopen={setopen} setOpenform={setOpenform} />
        </>
    )
}

export default Panel;