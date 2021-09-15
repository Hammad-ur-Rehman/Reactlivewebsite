import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/slide_2.webp";
import Common from "./Common";

const About = () => {

     return (
            
       <>

         <Common name="Welcome To About Page" imgsrc={web} visit="/contact" btname="Contact Now"/>

       </>


     )
      
}


export default About;
