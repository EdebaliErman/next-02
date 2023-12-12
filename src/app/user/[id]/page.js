import UserDetail from '@/components/userComponents/userDetail'
import { fecthData } from '@/services'
import React from 'react'

async function User({ params }) {
    const userDetail = await fecthData(`user/${params.id}`)
    return <UserDetail user={userDetail} />
}

export default User
