import React, { useEffect, useState } from 'react'

export default function About() {

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
            <div className='bg-gray-300'>
                <h1 className='text-center underline text-3xl select-none'>Blogs</h1>
                <div class="container mx-auto">
                    <div class="py-4">
                        <div class="flex flex-wrap">
                            {
                                data.map((element, key) => {

                                    // Array destructuring technique
                                    const { id, avatar_url, html_url, login } = element;
                                    return (
                                        <div key={id} className="h-full border bg-white shadow-lg shad rounded-lg overflow-hidden m-2">
                                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={avatar_url} alt="blog" />

                                            <div className="p-6">
                                                <h1 className="title-font text-lg font-medium text-black mb-3">{login}</h1>
                                                <div className="flex items-center flex-wrap ">
                                                    <a href={html_url} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Know More
                                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
