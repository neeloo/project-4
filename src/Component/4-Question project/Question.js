import React, { useState } from 'react';
//import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
    const [showinfo, setshow] = useState(false);
    return (
        <>
            <article className="question">
                <header>
                    <h4>{title}</h4>
                    <button className="btn" onClick={()=>setshow(!showinfo)}>click</button>
                </header>
                {showinfo && <p>{info}</p>}
            </article>



        </>
    )
}

export default Question;