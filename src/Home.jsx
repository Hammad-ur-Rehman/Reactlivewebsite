import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/slide_2.webp";
import Common from "./Common";

const Home = () => {

     return (
            
       <>

       <Common name="Grow Your business with " imgsrc={web} visit="/service" btname="Get Started"/>

       </>


     )
      
}


export default Home;
