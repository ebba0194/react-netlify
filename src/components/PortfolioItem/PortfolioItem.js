import React, { useState } from 'react'
import PopupModal from './PopupModal';

const PortfolioItem = ({ project }) => {
    const [ showContent, toggleShow ] = useState(false);

    const close = () => toggleShow(false);
    const open = () => toggleShow(true);

    return (
        <>
            <button onClick={open} className={`bg-gray-50 p-4 h-full flex flex-col justify-between rounded-2xl shadow-xl relative origin-center md:transform duration-200 hover:scale-105 w-full ${showContent ? 'scale-105' : ''}`}>
                <div className="absolute right-4 top-4 w-5 text-gray-400 hover:text-gray-800 transition duration-200">
                    <svg viewBox="0 0 16 16" height="100%" width="100%" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 cuLlVI"><title>ArrowsAngleExpand icon</title><path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"></path></svg>
                </div>
                <div className="flex flex-col items-center justify-center px-8 py-2 md:py-4 text-center w-full">
                    <h3 className="transform duration-200 font-title text-xl font-light tracking-wide text-gray-700">Client: {project.title}</h3>
                </div>
                <div className="shadow w-full">
                    <img className="w-full" width="300" height="200" loading="lazy" src={project.img} alt={project.title}/>
                </div>
                <div className="flex flex-wrap justify-center items-end text-gray-700 h-full w-full">
                    {project.logos.map((logo, i) => (
                        <div className="m-2 w-8" key={`logo-${i}`}>
                            <logo.component />
                        </div>
                    ))}
                </div>
            </button>
            <PopupModal active={showContent} close={close} project={project} />
        </>
    )
}

export default PortfolioItem