import React from 'react'
import ItemCard from './itemCard'
import MainSlider from './mainSlider'
const rightGallery = [
    'https://cdn.tgdd.vn/2021/06/banner/Group3913-340x340.jpg',
    'https://cdn.tgdd.vn/2021/07/banner/laptopdesk-340x340-2.jpg',
    'https://cdn.tgdd.vn/2021/07/banner/laptopdesk-340x340.jpg',
    'https://cdn.tgdd.vn/2021/07/banner/Frame39562x-340x340.png'
]
export default function MainPage () {
    return (
        <div>
            {/* Top page */}
            <div style={{display: 'flex', maxWidth: '1200px', justifyContent: 'space-between', margin: '20px auto'}}>
                <MainSlider/>
                <div style={{width: '350px', height: '350px', display: 'grid', gridTemplateColumns: 'auto auto', gridGap: '5px'}}>
                    {rightGallery.map((each, index) => <img key={index} src={each} style={{width: '170px'}}/>)}
                </div>
            </div>
            {/* banner cong tac ban hang */}
            <img src='https://cdn.tgdd.vn/2021/05/banner/Desktopbanner-1200x60.png' style={{maxWidth: '1200px', height: '60px', margin: '20px auto', display: 'flex'}}/>
            {/* banner san sale moi ngay */}
            <div style={{maxWidth: '1200px', display: 'flex', margin: '20px auto', backgroundColor: '#fed101', flexDirection: 'column'}}>
                <img src='https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/birthday17th/tgdd/boxsale_desk.png'/>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/>
                </div>
            </div>
        </div>
    )
}