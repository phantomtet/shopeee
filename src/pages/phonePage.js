import React, {useEffect, useState} from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import ItemCard from '../components/itemCard'
import Slider from 'react-slick'
import {PhoneFilter} from './../components/filter';
const setting0 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
    
}
const gallery = {
    carousel: [
        'https://cdn.tgdd.vn/2021/06/banner/800-200-800x200-165.png',
        'https://cdn.tgdd.vn/2021/07/banner/SN-A22-800-200-800x200.png',
        'https://cdn.tgdd.vn/2021/06/banner/SN-A74-800-200-800x200.png',
        'https://cdn.tgdd.vn/2021/07/banner/SN-ip12-800-200-800x200.png'
    ],
    images: [
        ''
    ]

}
export default function PhonePage () {
    const [filter, setFilter] = useState('')
    const {url} = useRouteMatch()
    return (
        <div style={{background: 'url(https://www.thegioididong.com/ContentMwg/images/birthday17th/category42/desk-min.png) no-repeat center top', paddingTop: '150px'}}>
            <div style={{maxWidth: '1200px', margin: '20px auto', display: 'flex', height: '200px'}}>
                <Slider className='mySlider ' {...setting0} autoplay style={{ width: '65%', height: '100%'}} >
                    {
                        gallery.carousel.map((ele, index) => <Link key={index} to={url}><img key={index} src={ele} style={{objectFit: 'fill', height: '200px'}}/></Link>)
                    }
                </Slider>
                <div className='' style={{width: '35%', height: '100%', marginLeft: '10px'}}>
                    <img style={{height: '49%', objectFit: 'fill'}} src='https://cdn.tgdd.vn/2021/06/banner/SN-note20-390-97-390x97.png'/>
                    <img style={{height: '49%', objectFit: 'fill'}} src='https://cdn.tgdd.vn/2021/06/banner/390-97-390x97.png'/>
                    
                </div>
            </div>
            {/* filter  */}
            <div style={{display: 'flex', margin: 'auto', maxWidth: '1200px'}}>
                <PhoneFilter/>
            </div>
            <style>
                {
                    `
                        .mySlider .slick-dots {
                            position: absolute;
                            bottom: 0
                        }
                        
                    `
                }
            </style>
        </div>
    )
}