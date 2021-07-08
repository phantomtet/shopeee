import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function ItemCard () {
    const [isHover, setHover] = useState(false)
    return (
        <Link to='/'>
            <div className={isHover ? 'shadow canclick3' : ''} onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} style={{maxWidth: '228px',borderRadius: '10px', padding: '10px 15px', backgroundColor: 'white'}}>
                <div style={{fontSize: '12px', display: 'flex', margin: '10px 0'}}>
                    <p style={{borderRadius: '4px', backgroundColor: '#f1f1f1'}}>Trả góp 0%</p>
                </div>
                <img style={{}} src='https://cdn.tgdd.vn/Products/Images/42/213033/TimerThumb/iphone-12-pro-max-(4).jpg'/>
                {/* item name */}
                <p style={{color: isHover ? '#288ad6' : ''}}>iPhone Ultra Mega Pro</p>
                {/* item price */}
                <strong style={{fontWeight: ''}}>10.000.000.000₫</strong>
                {/* some tag, can have or not*/}
                <div style={{display: 'flex'}}>
                    <p className='test' style={{borderRadius: '4px', border: '1px solid gray', marginRight: '5px'}}>Ram 100 TB</p>
                    <p className='test' style={{borderRadius: '4px', border: '1px solid gray', marginRight: '5px'}}>SSD 256 KB </p>
                </div>
            </div>
        </Link>
    )
}