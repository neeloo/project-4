import React from 'react'

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className='person'>
                        <img src={image} alt="image" />
                        <div>
                            <h2>{name}</h2>
                            <p>{age} year</p>
                        </div>
                    </article>
                )

            })}






        </>
    )
}

export default List