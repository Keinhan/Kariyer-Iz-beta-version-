'use client'
import React from 'react';
import * as motion from "../motion";
import About from './components/about'
import Card from './components/card';
const container = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const Job =()=>{
    return(
       <motion.fg
       variants={container}
       initial='hidden'
       animate='visible'
       className='my-32 mx-auto'>
<About></About>
<div className='  xl:mx-12 grid place-items-center mb-12  xl:place-items-start lg:grid-cols-2 xl:grid-cols-4 gap-12 border-t-2 pt-8 my-[-1rem]'>
<motion.fg variants={item}>
          <Card/>
        </motion.fg>
        <motion.fg variants={item}>
          <Card/>
        </motion.fg>
        <motion.fg variants={item}>
          <Card/>
        </motion.fg>
        <motion.fg variants={item}>
          <Card/>
        </motion.fg>
        <motion.fg variants={item}>
          <Card/>
        </motion.fg>
</div>
       </motion.fg>
    )
  }

export default Job