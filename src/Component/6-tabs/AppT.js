import React, { useEffect, useState } from 'react';
const url = 'https://course-api.com/react-tabs-project';

const AppT = () => {
    const [loading, setloading] = useState(true);
    const [job, setjob] = useState([]);
    const [value, setvalue] = useState(0);

    const featchjob = async () => {
        const reponce = await fetch(url);
        const newjob = await reponce.json();
        setjob(newjob);
        setloading(false);
    };
    useEffect(() => {
        featchjob();
    }, []);

    if (loading) {
        return <section className='section-loading'>
            <h2>loading...</h2>
        </section>
    };

    const { company, duties, title, dates } = job[value];


    return (
        <>
            <setion className="ssection">
                <div className="title">
                    <h2>Experince</h2>
                    <div className="underline"></div>
                </div>
                <div className="job-center">
                    {/* btn containe  */}
                    {/* job info */}
                    <article className="job-info">
                        <h3>{title}</h3>
                        <h4>{company}</h4>
                        <p className="job-date">{dates}</p>
                        {duties.map((duty, index) => {
                            return (
                                <div key={index} className="job-dese">
                                    <p>{duty}</p>
                                </div>
                            )
                        })};

                        
                    </article>
                </div>
            </setion>


        </>
    )
}

export default AppT;