import React, { useEffect, useState } from 'react'
const sliderGallery = [
    ['https://cdn.tgdd.vn/2021/06/banner/sn-chung-800-33002-830x300.gif', 'Mừng Sinh Nhật 17', 'Giảm Đến 47%'],
    ['https://cdn.tgdd.vn/2021/06/banner/830-300-830x300-11.png', 'Galaxy S21 Series 5G', 'Giảm Sâu Đến 5 Triệu'],
    ['https://cdn.tgdd.vn/2021/06/banner/830-300-830x300-12.png', 'OPPO Reno5 5G', 'Giảm Sâu Đến 1 Triệu'],
    ['https://cdn.tgdd.vn/2021/06/banner/830-300-830x300-13.png', 'Vivo Y72 5G', 'Giảm Sâu 300 Ngàn'],
    ['https://cdn.tgdd.vn/2021/06/banner/sn-dh-830-300-830x300.png', 'Đồng Hồ Giảm Sâu', 'Ưu Đãi Đến 47%']
]
export default function MainSlider () {
    const [number, setNumber] = useState(0)
    const [isHover, setHover] = useState(false)
    
    useEffect(() => {

    }, [number])
    useEffect(() => {
        const myTimer = setInterval(() => {
            if (!isHover) setNumber(prev => {
                if (prev >= 4) return 0
                else return prev + 1
            })
        }, 3000)
        return () => clearInterval(myTimer)
    }, [isHover])
    return (
        <div className='MainSlider' onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} style={{maxWidth: '828px', minWidth: '652px'}}>
            <img className='' style={{}} src={sliderGallery[number][0]}/>
            <div className='' style={{height: '48px', position: 'relative', bottom: '5px', display: 'flex', border: '1px solid gray'}}>
                {
                    sliderGallery.map((each, index) => 
                    <div className='canclick3' onClick={() => setNumber(index)} key={index} style={{width: '20%', textAlign: 'center', fontSize: '12px', margin: 'auto', borderRight: '1px solid #e5e5e5', borderLeft: '1px solid #e5e5e5', fontWeight: number === index ? 'bold' : ''}}>
                        {each[1]}<br/>{each[2]}
                    </div>)
                }
            </div>
        </div>
    )
}
