import React, { useEffect, useState } from 'react'
import {useSpring, animated, useTransition} from 'react-spring'
const gallery = [
    'https://cdn.tgdd.vn/2021/06/banner/sn-chung-800-33002-830x300.gif',
    'https://cdn.tgdd.vn/2021/06/banner/830-300-830x300-11.png',
    'https://cdn.tgdd.vn/2021/06/banner/830-300-830x300-12.png',
    'https://cdn.tgdd.vn/2021/06/banner/830-300-830x300-13.png',
    'https://cdn.tgdd.vn/2021/06/banner/sn-dh-830-300-830x300.png'
]
export default function MainSlider () {
    const [number, setNumber] = useState(0)
    const [isHover, setHover] = useState(false)
    const style = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        reset: true
    })
    useEffect(() => {

    }, [number])
    useEffect(() => {
        const myTimer = setInterval(() => {
            if (!isHover) setNumber(prev => {
                if (prev >= 4) return 1
                else return prev + 1
            })
        }, 3000)
        return () => clearInterval(myTimer)
    }, [isHover])
    return (
        <div class='MainSlider' onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className='test' style={{maxWidth: '828px', minWidth: '652px'}}>
            <animated.img style={style} src={gallery[number]}/>
        </div>
    )
}
