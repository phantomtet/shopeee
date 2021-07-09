import React, { useState } from 'react'
import MainSlider from './../components/mainSlider';
import ItemCard from './../components/itemCard';
import Slider from 'react-slick';
const setting0 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
}
const rightGallery = [
    'https://cdn.tgdd.vn/2021/06/banner/Group3913-340x340.jpg',
    'https://cdn.tgdd.vn/2021/07/banner/laptopdesk-340x340-2.jpg',
    'https://cdn.tgdd.vn/2021/07/banner/laptopdesk-340x340.jpg',
    'https://cdn.tgdd.vn/2021/07/banner/Frame39562x-340x340.png'
]
export default function MainPage () {
    const [watchTab, setWatchTab] = useState(0)
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
            <div style={{maxWidth: '1200px', display: 'flex', margin: '20px auto', backgroundColor: '#fed101', flexDirection: 'column', borderRadius: '4px', padding: '10px'}}>
                <img src='https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/birthday17th/tgdd/boxsale_desk.png'/>
                <Slider style={{marginTop: '10px'}} slidesToShow={5} slidesToScroll={5}  >
                    <ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/>
                </Slider>
            </div>
            {/* empty div */}
            <div style={{height: '60px'}}></div>
            {/* dien thoai noi bat nhat */}
            <div style={{display: 'flex', margin: 'auto', maxWidth: '1200px', justifyContent: 'space-between'}}>
                <strong style={{fontSize: '24px'}}>ĐIỆN THOẠI NỔI BẬT NHẤT</strong>
                <div style={{display: 'flex'}}>
                    <p className='canclick4' style={{borderRadius: '20px', border: '1px solid gray', margin: 'auto 5px', padding: '4px'}}>iPhone 1 </p>
                    <p className='canclick4' style={{borderRadius: '20px', border: '1px solid gray', margin: 'auto 5px', padding: '4px'}}>iPhone 0 </p>
                    <p className='canclick4' style={{borderRadius: '20px', border: '1px solid gray', margin: 'auto 5px', padding: '4px'}}>Nokia 1280 </p>
                    <p className='canclick4' style={{borderRadius: '20px', border: '1px solid gray', margin: 'auto 5px', padding: '4px'}}>Xem tất cả <strong>999+</strong> điện thoại </p>
                </div>
            </div>
            {/*10 phones list */}
            <div style={{display: 'grid', maxWidth: '1200px', margin: '20px auto', gridTemplateColumns: 'auto auto auto auto auto', gridGap: '5px'}}>
                <ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/>
            </div>
            {/* laptop noi bat nhat */}
            <div style={{display: 'flex', margin: 'auto', maxWidth: '1200px', justifyContent: 'space-between'}}>
                <strong style={{fontSize: '24px'}}>LAPTOP, TABLET NỔI BẬT NHẤT</strong>
                <div style={{display: 'flex'}}>
                    <p className='canclick4' style={{borderRadius: '20px', border: '1px solid gray', margin: 'auto 5px', padding: '4px'}}>Laptop ASUS </p>
                    <p className='canclick4' style={{borderRadius: '20px', border: '1px solid gray', margin: 'auto 5px', padding: '4px'}}>Laptop HP </p>
                    <p className='canclick4' style={{borderRadius: '20px', border: '1px solid gray', margin: 'auto 5px', padding: '4px'}}>Laptop Dell </p>
                    <p className='canclick4' style={{borderRadius: '20px', border: '1px solid gray', margin: 'auto 5px', padding: '4px'}}>Xem tất cả <strong>999+</strong> Laptop </p>
                    <p className='canclick4' style={{borderRadius: '20px', border: '1px solid gray', margin: 'auto 5px', padding: '4px'}}>Xem tất cả <strong>999+</strong> Tablet </p>

                </div>
            </div>
            {/* 5 tablet list, we will create a carousel here later  */}
            <div style={{maxWidth: '1200px', margin: '20px auto'}}>
                <Slider style={{padding: '10px 0'}} slidesToShow={5} slidesToScroll={5} >
                    <ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/>
                </Slider>
            </div>
            <div style={{display: 'flex', maxWidth: '1200px', margin: 'auto', padding: '5px', backgroundColor: '#203E4E'}}>
                <img src='https://cdn.tgdd.vn/2021/07/banner/222440-222x440-1.png' style={{maxWidth: '220px', height: 'auto'}}/>
                <div style={{width: '100%'}}>
                    {/* some button */}
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', padding: '10px 0'}}>
                            <p className='canclick3' onClick={() => setWatchTab(0)} style={{padding: '5px', border: '1px solid whitesmoke', color: watchTab === 0 ? '#203E4E' : 'whitesmoke', backgroundColor: watchTab === 0 ? 'whitesmoke' : '#203E4E', borderRadius: '4px', marginRight: '10px'}}>Đồng hồ thông minh</p>
                            <p className='canclick3' onClick={() => setWatchTab(1)} style={{padding: '5px', border: '1px solid whitesmoke', color: watchTab === 1 ? '#203E4E' : 'whitesmoke', backgroundColor: watchTab === 1 ? 'whitesmoke' : '#203E4E', borderRadius: '4px', marginRight: '10px'}}>Đồng hồ thời trang Nam</p>
                            <p className='canclick3' onClick={() => setWatchTab(2)} style={{padding: '5px', border: '1px solid whitesmoke', color: watchTab === 2 ? '#203E4E' : 'whitesmoke', backgroundColor: watchTab === 2 ? 'whitesmoke' : '#203E4E', borderRadius: '4px', marginRight: '10px'}}>Đồng hồ thời trang Nữ</p>
                            <p className='canclick3' onClick={() => setWatchTab(3)} style={{padding: '5px', border: '1px solid whitesmoke', color: watchTab === 3 ? '#203E4E' : 'whitesmoke', backgroundColor: watchTab === 3 ? 'whitesmoke' : '#203E4E', borderRadius: '4px', marginRight: '10px'}}>Đồng hồ trẻ em</p>
                        </div>
                        <p className='canclick3' style={{color: 'whitesmoke', margin: 'auto 0'}}> Xem tất cả &nbsp;
                            {
                                watchTab === 0 ? 'Đồng hồ thông minh' : 
                                watchTab === 1 ? 'Đồng hồ thời trang Nam' :
                                watchTab === 2 ? 'Đồng hồ thời trang Nữ' :
                                watchTab === 3 ? 'Đồng hồ trẻ em' : ''  
                            }
                        </p>
                    </div>
                    {/* item card */}
                    <div style={{maxWidth: '980px'}}>
                        <Slider style={{marginTop: '10px', maxWidth: '100%', paddingRight: '15px'}} slidesToShow={4} slidesToScroll={4} >
                            <ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/><ItemCard/>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
