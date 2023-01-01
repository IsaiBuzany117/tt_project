import React from 'react'

const Expfield = ({label, value}) => {
    return (
        <div className='grid grid-cols-2 p-[0.25rem]'>
            <p className='font-semibold text-indigo-700'>{label}</p>
            <p>{value}</p>
        </div>
    )
}

export default Expfield