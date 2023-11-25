import React from "react";
import "../Styles/Body.css";
import { motion } from "framer-motion";

function Body() {
    return(
        <>
        <div className="body-container">
            <div className="heading">
            <motion.h1
            initial={{ x: -200, opacity: 0.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}>
            Elderly Health Care
            </motion.h1>
                <motion.p
                initial={{ x: -200, opacity: 0.1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                Introducing Healthify-You – your dedicated health companion for seniors. Easily manage exercises, medication reminders, and health tracking. Stay connected, join a supportive community, and embrace a healthier future. Aging gracefully starts here.
                </motion.p>
                <button>Read More</button>
            </div>
            <div className="body-icon"><img src="https://img.freepik.com/free-vector/nursing-home-concept-illustration_114360-2816.jpg" /></div>
            
        </div>
        </>
    )
}
export default Body;