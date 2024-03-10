import React from 'react';
import './Hero.css';
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
    <section className='hero-wrapper'>
        <div className='flexCenter paddings innerWidth hero-container'>
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"></div>
                    <motion.h1
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                    duration: 2,
                    type: "ease-in",
                    }}
                    >
                            Discover<br />
                            Most Suitable<br />Property 
                    </motion.h1>
                    </div>
                    
                
                <div className="flexColStart hero-des">
                    <span>
                        Xin mot lan khuoc tu su thuong hai ma anh trao em bay lau
                    </span>
                    <span>
                        Khong hoan uot doi mi khong ai phai luu luyen chi, khong an han dieu gi
                    </span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type='text'></input>
                    <button className='button'>Search</button>
                </div>

                <div className=" flexCenter stats">
                    <div className="flexColStart stat">
                    <span>
                        <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
                    </span>
                    <span className="secondaryText">Premium Product</span>
                    </div>

                    <div className="flexColStart stat">
                    <span>
                        <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
                    </span>
                    <span className="secondaryText">Happy Custom</span>
                    </div>

                    <div className="flexColStart stat">
                    <span>
                        <CountUp  end={28} /> <span>+</span>
                    </span>
                    <span className="secondaryText">Awards Winning</span>
                    </div>
                </div>


            </div>


            <div className="hero-right">
                <motion.div
                    initial={{ x: "7rem", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                    duration: 2,
                    type: "ease-in",
                    }}
                    className="image-container"
                >
                    <img src='./hero-image.png' alt='imagehero'></img>
                </motion.div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero