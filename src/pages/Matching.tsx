import React from "react";
import {PostsHeader} from "../components/PostsHeader";
import {Posts} from "../components/Posts";

export const Matching: React.FC = () => {
    return (<>
        <div style={{display: "flex", flexDirection: "column", width: "90%"}}>
            <PostsHeader/>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Posts/>
            </div>
        </div>
    </>)
}

