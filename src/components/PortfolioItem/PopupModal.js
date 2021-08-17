import React, { useEffect, useState } from 'react';

const PopupModal = ({ active, close, project }) => {
    const sharedClasses = 'fixed transition duration-500 w-full h-full top-0 left-0 bg-gray-900 bg-opacity-10 flex items-center justify-center'
    const [appliedClasses, updateClasses] = useState(`hidden ${sharedClasses}`)

    useEffect(() => {
        if(active) {
            updateClasses(`${sharedClasses} opacity-0`);
            setTimeout(() => {
                updateClasses(`${sharedClasses} opacity-100`);
            }, 50)
        } else {
            
        }
    }, [ active ])

    useEffect(() =>  window.addEventListener('keydown', e => {
        if(e.key === 'Escape') {
            close()
        }
    }))

    return (
        <div class={appliedClasses}>
            <div className="max-w-4xl bg-white p-16 rounded-2xl shadow-4xl">
                stuff
            </div>
        </div>
    )
}

export default PopupModal