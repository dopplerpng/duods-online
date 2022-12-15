import React from 'react'
import Head from 'next/head'


interface Props{
    children?: React.ReactNode
    title?:string
}
export default function Layout({children, title="DUODS | Home"}:Props){
    return(
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
            
        </div>
    )
}