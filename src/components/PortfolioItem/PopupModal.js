import React, { useEffect, useState } from 'react';

const PopupModal = ({ active, close, project }) => {
    const sharedClasses = 'fixed transition duration-500 w-full h-full top-0 left-0 bg-gray-900 bg-opacity-80 md:flex items-center justify-center z-10 overflow-y-scroll max-h-screen p-4 md:p-16'
    const [appliedClasses, updateClasses] = useState(`hidden md:hidden ${sharedClasses}`)

    useEffect(() => {
        if(active) {
            updateClasses(`${sharedClasses} opacity-0`);
            setTimeout(() => {
                updateClasses(`${sharedClasses} opacity-100`);
            }, 10)
        } else {
            updateClasses(`${sharedClasses} opacity-0`);
            setTimeout(() => {
                updateClasses(`${sharedClasses} hidden md:hidden`);
            }, 201)
        }
    }, [ active ])

    useEffect(() => {
        window.addEventListener('keydown', e => {
            if(e.key === 'Escape' && active) {
                close();
            }
        })
    }, [ active, close ])

    return (
        <div className={`${appliedClasses}`}>
            <div className="absolute top-0 left-0 h-full w-full" onClick={close}></div>
            <div className="md:max-w-4xl bg-white p-8 md:p-16 rounded-2xl shadow-4xl z-10 relative">
                <button onClick={close} className="absolute top-4 right-4 w-8">
                    <svg viewBox="0 0 50 50" height="100%" width="100%" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 cuLlVI"><title>Close icon</title><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"></path><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"></path></svg>
                </button>
                <div className="container grid md:grid-cols-5">
                    <div className="md:col-start-1	md:col-end-4">
                        <div className="flex flex-col items-center justify-center md:px-8 py-4 text-center w-full">
                            <h3 className="font-title text-xl font-light tracking-wide text-gray-700">Client: {project.title}</h3>
                        </div>
                        <div
                            dangerouslySetInnerHTML={ { __html: `${project.content ? project.content : ''}` }} 
                            className="font-body text-gray-700 grid auto-rows-auto md:px-8 py-4 w-full gap-2"
                        />
                    </div>
                    <div className="md:col-start-4 md:col-end-6">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block font-title text-xl font-light tracking-wide text-gray-700 border-b border-gray-500 pb-2">Visit the Site</a>
                        <div className="shadow w-full my-4">
                            <a className="block transition border border-transparent duration-200 hover:border-current" href={project.url} target="_blank" rel="noopener noreferrer">
                                <img className="w-full" width="300" height="200" loading="lazy" src={project.img} alt={project.title}/>
                            </a>
                        </div>
                        <h3 className="font-title text-xl font-light tracking-wide text-gray-700 border-b border-gray-500 pb-2">Technologies</h3>
                        <div className="flex flex-wrap justify-center items-end text-gray-700 w-full py-2">
                            {project.logos.map((logo, i) => (
                                <div className="m-2 w-8" key={`logo-${i}`}>
                                    <logo.component />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupModal