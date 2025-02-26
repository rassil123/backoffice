'use client'
import React, { useState } from "react";

import Sidebar from "./sidebar";
import TopHeader from "./topHeader";
import Footer from "./footer";

export default function Wrapper(props){
    let [toggle, setToggle] = useState(false)

    return(
        <div className={`${toggle ? '' : 'toggled'} page-wrapper doctris-theme`}>
            <Sidebar manuClass= "sidebar-wrapper"/>

            <main className="page-content bg-light">
                <TopHeader toggle={toggle} setToggle={setToggle}/>
                {props.children}
                <Footer/>
            </main>
        </div>
    )
}