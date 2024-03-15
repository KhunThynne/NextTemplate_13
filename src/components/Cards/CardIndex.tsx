
"use client"
import { useEffect, useRef } from 'react'
import './cards.css'

const Cards = ({ children, className }: { children: React.ReactNode, className?: any }) => {




    return (

        <div className={`index-card-t md:min-w-[25vw] min-w-[100vw]  ${className && className}`} >
            <div className='shadow'>
                {children}
            </div>
        </div >

    );
}

const CardHead = ({ children, className, bgColor }:
    { children: React.ReactNode, className?: any, bgColor?: string }) => {

    return (

        <div className={`head-card bg-primary-a  ${className ? className : null}`} style={{ backgroundColor: bgColor && bgColor }} >
            <div   >
                {children}

            </div>


        </div >

    );
}

const CardBody = ({ children, className }: { children: React.ReactNode, className?: any }) => {


    return (
        <>

            <div className={`body-card  ${className ? className : null}`}>
                {children}
            </div>
        </>
    );
}

const CardFooter = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className={`foot-card`}>
                {children}
            </div>
        </>
    );
}
const Card = ({ children, className, bgColor }:
    { children: React.ReactNode, className?: any, bgColor?: string }) => {


    const ref = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className={`card-t md:min-w-[25vw] min-w-[100vw] shadow ${className}`} ref={ref} style={{ backgroundColor: bgColor && bgColor }}>
                {children}
            </div >
        </>
    );
}



export { Card, Cards, CardHead, CardBody, CardFooter }