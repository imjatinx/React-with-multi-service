import React, { useEffect, useState } from 'react'
// import demo from'./demo.txt'

export default function About() {

    const btn = {
        outline: 'none',
        border: "none"
    }

    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch('https://api.github.com/users');
        setData(await response.json());
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <div className="container-fluid text-center">
                <h1>Blogs</h1>
                <div className="row">
                    {
                        data.map((element, key) => {

                            // Array destructuring technique
                            const { id, avatar_url, html_url } = element;
                            return (
                                <div className="col-3 p-3 border border-dark" key={id}>
                                    <div style={{ width: '20vw', height: "auto" }} className="image">
                                        <img src={avatar_url} alt="Blog img" style={{width:"100%"}} />
                                    </div>
                                    <div className="title">
                                        <a href={html_url} target='_blank' rel="noopener noreferrer" className='btn btn-primary btn-sm' style={btn}>Read more</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
