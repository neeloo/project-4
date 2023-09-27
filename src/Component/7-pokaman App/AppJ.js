import React, { useState } from 'react'
import PokamonList from './PokamonList';

const AppJ = () => {
    const[pokaman,setpokaman] =useState("blue",'red');
  return (
    <> 
    <PokamonList pokaman={pokaman}/>

    </>
    
  )
}

export default AppJ;