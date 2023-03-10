import {Html, Head, Main, NextScript} from 'next/document' //acessando html root do NextJs


export default function Document (){
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>
            </Head>
            <body className='font-roboto'>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}