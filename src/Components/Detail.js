import React from "react";
import "../Styles/Detail.css";
import { motion } from "framer-motion";

function Detail(){
    return(
        <>
        <div className="detail-container">
        <motion.div
        initial={{ scale:0,opacity: 0.1 }}
        whileInView={{ scale:1,opacity: 1 }}
        transition={{ duration: 1 }}
        >
         <div className="detail-left">
            <div style={{display:"flex"}}>
            <img src="https://demo2.joomshaper.com/2020/fortune/images/2020/09/28/group490.png" alt="logo" />
            <h2>In Home Elderly Care</h2>
            </div>
            
            <p>Make friends with other seniors and never feel alone. Friendship, programs, and unlimited activities regularly.</p>
            <button>LEARN MORE</button>
        </div>
        </motion.div>
        <motion.div
        initial={{ scale:0,opacity: 0.1 }}
        whileInView={{ scale:1,opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <div className="detail-right">
            <div style={{display:"flex",justifyContent:"center"}}>
                <img src="https://demo2.joomshaper.com/2020/fortune/images/2020/09/28/group-489.png" alt="logo" />
                <h2>Senior Companionship</h2>
            </div>
            <p>Make friends with other seniors and never feel alone. Friendship, programs, and unlimited activities regularly.</p>
            <button>LEARN MORE</button>
        </div>  
        </motion.div>
        </div>
        </>
    )
}

export default Detail;