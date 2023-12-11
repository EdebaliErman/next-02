import React from 'react'
import styles from './styles.module.css'

function RadiusStat({ count, title }) {

    return (
        <div className='flex justify-center items-center flex-col p-3 border-2 border-white text-white rounded-3xl '>
            <h1 className='text-3xl font-mono my-3 capitalize'>{title}</h1>
            <div className={styles.radius}>
                <svg className='relative w-40 h-40 z-10 rounded-full shadow-white shadow-md'>
                    <circle cy={65} cx={75} r={75} strokeDashoffset={300 / count * 30} />
                </svg>
                <svg className='shadow-white  shadow-inner w-40 h-40 absolute  border-[14px] border-orange-600 rounded-full z-0'>
                </svg>
                <h1 className='text-white text-4xl  absolute z-20'>%{count}</h1>
            </div>
        </div>
    )
}

export default RadiusStat
