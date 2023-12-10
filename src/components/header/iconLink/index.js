import React from 'react'
import Link from 'next/link'

function IconLink({ path, icon }) {
    return (
            <Link href={path}>
                {icon}
            </Link>
    )
}

export default IconLink
