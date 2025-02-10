import React from 'react'; 
import { motion } from "motion/react"
import { col } from 'motion/react-client';
import { easeOut } from 'motion';
import team1 from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team-2.jpg"



const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className='flex-1' >

         <motion.img
            src= {team1}
            animate={{ y:[ 50,100,50] }}
            transition={{duration:8 , repeat:Infinity} }
            
           
            className="max-w-sm border-l-4 border-b-4 border-blue-500  w-64 rounded-t-[40px] rounded-br-[40px]  shadow-2xl" />

            
         <motion.img
            src={team2}
            animate={{ x:[ 100,150,100] }}
            transition={{duration:8 , repeat:Infinity} }
            
           
            className="max-w-sm border-l-4 border-b-4 border-blue-500  w-64 rounded-t-[40px] rounded-br-[40px]  shadow-2xl" />
         </div>
          <div className='flex-1' >
            
            <motion.h1
            animate={{x:50 }}
            transition={{duration:2, delay:1, ease:easeOut , repeat:Infinity}}
            tr
            className="text-5xl font-bold"> Lets 
            <motion.span 
              animate={{color:["#4441e9", '#7d21ec', "#7d21ec", "#9c11bf"] }}
              transition={{ duration:3.0, repeat:Infinity  }}
            >    Jobs</motion.span> for You </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;