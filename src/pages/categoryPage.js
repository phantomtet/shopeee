import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemCard from '../components/itemCard'
import Slider from 'react-slick'
const setting0 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
}
export default function CategoryPage () {
    const { category } = useParams()
    useEffect(() => {
        console.log(category)
    }, [category])
    return (
        <div>
            <div style={{maxWidth: '1200px', margin: 'auto'}}>
                <Slider {...setting0}>
                    <ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><div>adsadasd</div>
                </Slider>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}