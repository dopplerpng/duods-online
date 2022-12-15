import Link from "next/link"


interface Props{
    title:string,
    url:string
}
export default function Button({title,url}:Props){
    return(
        <>
        <Link href={url} 
        className={
            'transition ease-in-out delay-50 hover:hover:transition-all shadow-xl hover:shadow-none hover:scale-110  cursor-pointer bg-WHITE hover:bg-THIRD hover:text-WHITE  active:text-FOUR text-THIRD font-bold py-2 px-4 rounded-[25px]'}>{title}</Link>
        </>
    )
}