import React, { useState } from 'react'
import items from './Items';
import Categries from './Categries';
import Menu from './Menu';

const AppA = () => {
    const[menuitem,setmenu]=useState(items);
    const[categoris,setcaegoris] =useState([]);
    const filterItems = (category)=>{
        const newitem = items.filter((item)=> item.category === category)
        setmenu(newitem);

    }
  return (
    <>
 <main>
    <section className="menu section">
        <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
        </div>
        <Categries filterItems={filterItems}/>
        <Menu items={menuitem}/>
    </section>
 </main>
    </>
  )
}

export default AppA;