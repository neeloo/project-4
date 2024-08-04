import React, { useState } from 'react'
import items from './Items';
import Categries from './Categries';
import Menu from './Menu';
import './Index.css';

const allc = ['all', ...new Set(items.map((item) => item.category))];
//console.log(allc)

const AppA = () => {
    
    const [menuitem, setmenu] = useState(items);
    const [categoris, setcaegoris] = useState(allc);
    const filterItems = (category) => {
        if (category === 'all') {
            setmenu(items);
            return;
        }
        const newitem = items.filter((item) => item.category === category)
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
                    <Categries categoris={categoris} filterItems={filterItems} />
                    <Menu items={menuitem} />
                </section>
            </main>
        </>
    )
}

export default AppA;