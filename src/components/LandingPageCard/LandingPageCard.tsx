import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

interface IProps{
  title:string;
  label:string;
  to:string;
}
export default function LandingPageCard(props:IProps) {
  const {title,label,to} = props;
  return (
    <Link to={to}>
      <motion.div whileHover={{backgroundColor:"rgba(255, 255, 255, 0.2)",cursor:'pointer'}}  className='landingPageCard'
    >
      <div className='landingPageCardContainer'>
        <div className='landingPageCardContainerTop'><p className='landingPageCardContainerTopTitle'>{title}</p></div>
        <hr className='hrCard'/>
        <div className='landingPageCardContainerBottom'><p>{label}</p></div>
      </div>
      </motion.div>
      </Link>
    
  )
}
