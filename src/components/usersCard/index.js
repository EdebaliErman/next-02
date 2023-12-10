import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { TbUserSearch } from "react-icons/tb";
function UsersCard({ data }) {
    return (
        <div className={styles.usersCard}>
            <div className='w-full flex justify-between '>
                <h1>Users <span>({data.users.length})</span>
                </h1>
                <Link href={"user"}>
                    <TbUserSearch className='w-8 h-8 text-orange-400 m-1' />
                </Link>
            </div>
            {data.users.map(item => <div className={styles.userBar}>
                <img src={item.image} />
                <div>
                    <h2>{item.username}</h2>
                    <h3>{item.firstName + " " + item.lastName}</h3>
                </div>
                <Link href={`user/${item.id}`} >
                    <MdOutlineArrowForwardIos />
                </Link>
            </div>
            ).slice(1, 6)}
        </div>
    )
}

export default UsersCard
