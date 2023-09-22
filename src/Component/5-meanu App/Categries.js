import React from 'react'

const Categries = ({ categoris, filterItems }) => {
    return (
        <>
            <div className="btn-container">
                {
                    categoris.map((category, index) => {
                        return (
                            <button className="filter-btn"
                                type='button' key={index}
                                onClick={() => filterItems(category)}>
                                {category}
                            </button>
                        );

                    })
                }
            </div>

        </>
    )
}

export default Categries;