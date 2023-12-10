import React from 'react'
import RadiusStat from '../radiusStat'
import styles from './styles.module.css'
function StatBar({ product, users }) {
    return (
        <div className={styles.statbar}>
           
            <RadiusStat title="product" count={product} />
            <RadiusStat title="user" count={users} />
        </div>
    )
}

export default StatBar
