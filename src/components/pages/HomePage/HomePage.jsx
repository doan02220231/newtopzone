import React, { useState } from 'react';
import classNames from "classnames/bind"
import style from './HomePage.scss'
import Layout from '../../layout/Layout/Layout';
import Slider from "react-slick";
import { CustomNextArrow,CustomPrevArrow } from '../../hooks/CustoArrow';
import SliderHeader from '../../Tippy/SliderHeader/SliderHeader';
import ProductFlash from '../../Tippy/ProductFlash/ProductFlash';
import BoxSlider from '../../Tippy/BoxSlider/BoxSlider';
import ReactPlayer from 'react-player';

import { Link } from 'react-router-dom';
const cx = classNames.bind(style)
const iphone = [
    {
        path : '/iphone',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/303891/s16/iphone-15-plus-blue-thumbtz-1-650x650.png',
        title:'iPhone 15 Plus 128GB',
        priceNew : '25.000.000đ',
        priceOld : '25.550.000đ',
        sell : '',
        free : ""
    },
    {
        path : '/iphone',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/299033/s16/iphone-15-pro-blue-thumbtz-650x650.png',
        title:'iPhone 15 Pro 128GB',
        priceNew : '28.000.000đ',
        priceOld : '30.550.000đ',
        sell : '',
        free : ""
    },
    {
        path : '/iphone',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/223602/s16/iphone-13-pink-thumbtz-650x650.png',
        title:'iPhone 11 68GB',
        priceNew : '25.000.000đ',
        priceOld : '25.550.000đ',
        sell : '',
        free : ""
    },
    {
        path : '/iphone',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/153856/s16/iphone-11-black-thumbtz-650x650.png',
        title:'iPhone 14 Pro 128GB',
        priceNew : '25.120.000đ',
        priceOld : '27.000.000đ',
        sell : '7',
        free : ""
    },
    {
        path : '/iphone',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/281570/s16/iphone-15-black-thumbtz_0-650x650.png',
        title:'iPhone 15 128GB',
        priceNew : '21.000.000đ',
        priceOld : '20.550.000đ',
        sell : '',
        free : ""
    },
]
const mac = [
    {
        path : '/iphone',
        new : 'Mới',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/318230/s16/mac-topzone-promax-black-650x650.png',
        title:'MacBook Pro 14 inch M3 Pro 2023 11CPU - 14GPU',
        priceNew : '49.990.000₫',
        priceOld : '25.550.000đ',
        sell : '',
        free : ""
    },
    {
        path : '/',
        new : 'Mới',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/309016/s16/mac-air-15-m2-xam-650x650.png',
        title:'MacBook Pro 14 inch M3 2023 8CPU - 10GPU',
        priceNew : '39.990.000₫',
        priceOld : '25.550.000đ',
        sell : '',
        free : ""
    },
   
    {
        path : '/',
        new : 'Mới',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/318230/s16/mac-topzone-promax-black-650x650.png',
        title:'MacBook Pro 14 inch M3 Max 2023 14CPU - 30GPU',
        priceNew : '79.990.000₫',
        priceOld : '',
        sell : '',
        free : ""
    },
   
    {
        path : '/',
        new : 'Mới',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-13-m1-vang-650x650.png',
        title:'iPhone 15 Plus 128GB',
        priceNew : '19.190.000₫',
        priceOld : '19.290.000₫',
        sell : '',
        free : ""
    },
   
    {
        path : '/',
        new : 'Mới',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/5698/238053/s16/imac-24-xanh-fix-650x650.png',
        title:'iMac 24 inch M1 2021 8CPU - 8GPU',
        priceNew : '31.990.000₫',
        priceOld : '34.990.000₫',
        sell : '-8%',
        free : ""
    },
    {
        path : '/',
        new : 'Mới',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/282827/s16/mac-air-13-m2-vang-650x650.png',
        title:'MacBook Air 13 inch M2 2022 8CPU - 8GPU',
        priceNew : '26.690.000₫',
        priceOld : '26.790.000₫',
        sell : '',
        free : ""
    },


   
]

const watch = [
    {
        path : '/watch',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/289612/s16/apple-watch-se-2022-gps-40mm-thumbtz-2-650x650.png',
        title:'Apple Watch SE 2022 GPS 40mm viền nhôm dây thể thao',
        priceNew : '6.290.000₫',
        priceOld : '7.490.000₫',
        sell : '-16%',
        free : ""
    },
    {
        path : '/watch',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/314705/s16/apple-watch-s9-gps-41mm-vien-nhom-day-silicone-hong-tn-650x650.png',
        title:'Apple Watch Series 9 GPS 41mm viền nhôm dây thể thao',
        priceNew : '10.490.000₫',
        priceOld : '',
        sell : '',
        free : ""
    },
    {
        path : '/watch',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/289814/s16/apple-watch-s8-ultra-size-m-cam-thumbtz-1-650x650.png',
        title:'Apple Watch Series 9 GPS 41mm viền nhôm dây thể thao',
        priceNew : '19.490.000₫',
        priceOld : '23.990.000₫',
        sell : '',
        free : "MUA ONLINE GIẢM SỐC 4.500.000₫"
    },
    {
        path : '/watch',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/289804/s16/apple-watch-s8-41mm-trang-kem-thumb-1-650x650.png',
        title:'Apple Watch Series 8 GPS 41mm viền nhôm dây thể thao',
        priceNew : '9.590.000₫',
        priceOld : '11.990.000₫',
        sell : '-20%',
        free : ""
    },
    {
        path : '/watch',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/314711/s16/apple-watch-ultra-lte-49mm-vien-titanium-day-alpine-size-m-nau-tb-650x650.png',
        title:'Apple Watch Ultra 2 GPS + Cellular 49mm viền Titanium dây Alpine',
        priceNew : '21.990.000₫',
        priceOld : '',
        sell : '',
        free : ""
    },
 

   
]
const AmThanh = [
    {
        path : '/amthanh',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/54/236016/s16/tai-nghe-bluetooth-airpods-2-apple-tn-650x650.png',
        title:'AirPods 2 Hộp sạc thường',
        priceNew : '2.790.000₫',
        priceOld : '3.490.000₫',
        sell : '-20%',
        free : ""
    },
    {
        path : '/amthanh',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/54/289781/s16/airpods-pro-2-thumb-650x650.png',
        title:'AirPods Pro (2nd Gen)',
        priceNew : '5.890.000₫',
        priceOld : '6.190.000₫',
        sell : '',
        free : ""
    },
    {
        path : '/amthanh',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/54/290053/s16/airpods-3-hop-sac-khong-day-thumb-650x650.png',
        title:'AirPods 3 sạc Lightning',
        priceNew : '4.090.000₫',
        priceOld : '4.490.000₫',
        sell : '',
        free : "Giá rẻ Online"
    },
    {
        path : '/amthanh',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/54/263811/s16/khong-day-powerbeats-pro-do-tn-650x650.png',
        title:'Tai nghe True Wireless Beats Powerbeats Pro',
        priceNew : '4.790.000₫',
        priceOld : '5.990.000₫',
        sell : '-20%',
        free : ""
    },
    {
        path : '/amthanh',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/54/228486/s16/tai-nghe-chup-tai-beats-studio3-mx422-mx432-den-do-tn-650x650.png',
        title:'Tai nghe không dây Beats Studio 3',
        priceNew : '5.990.000₫',
        priceOld : '7.490.000₫',
        sell : '-20%',
        free : ""
    },
    
    
    

   
]
const PhuKien = [
    {
        path : '/amthanh',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/1882/237414/s16/17-650x650.png',
        title:'Apple Pencil (thế hệ 1)',
        priceNew : '2.165.000₫',
        priceOld : '2.890.000₫',
        sell : ' -25%',
        free : "Giá rẻ Online"
    },
    {
        path : '/phukien',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/9499/230315/s16/114.34.03-650x650.png',
        title:'Adapter sạc Apple USB-C 20W',
        priceNew : '550.000₫',
        priceOld : '',
        sell : ' ',
        free : ""
    },
    {
        path : '/phukien',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/60/315058/s16/op-lung-magsafe-iphone-15-pro-max-nhua-trong-apple-mt233-thumb-650x650.png',
        title:'Ốp lưng MagSafe cho iPhone 15 Pro Max Nhựa trong Apple MT233',
        priceNew : '1.285.000₫  ',
        priceOld : '1.430.000₫ ',
        sell : ' -10% ',
        free : ""
    },
    {
        path : '/phukien',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/1882/251881/s16/magic-keyboard-thumb-650x650.png',
        title:'Magic Keyboard',
        priceNew : '2.070.000₫',
        priceOld : '3.190.000₫ ',
        sell : ' (-35%) ',
        free : "Giá rẻ Online"
    },
    {
        path : '/phukien',
        new : '',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/58/259283/s16/TimerThumb/259283.png',
        title:'Cáp sạc USB-C - Lightning 1m',
        priceNew : '550.000₫',
        priceOld : '',
        sell : '',
        free : ""
    },



]
const tekzone1 = [
    {
        path : '/tekzone',
        new : '',
        image:'https://cdn.tgdd.vn/News/0/11-0-1280x720.jpg',
        title:'Cách xem lịch sử đọc trên Wattpad, giúp bạn có thể đọc tiếp truyện đang dang dở vô cùng tiện lợi',
        priceNew : '',
        priceOld : '',
        sell : ' ',
        free : ""
    },
    {
        path : '/tekzone',
        new : '',
        image:'https://cdn.tgdd.vn/News/1557911/6-1280x720.jpg',
        title:'Cách chỉnh sửa tin nhắn đã gửi trên Messenger nếu lỡ viết sai chính tả cực kỳ hữu ích cho bạn',
        priceNew : '',
        priceOld : '',
        sell : ' ',
        free : ""
    },
    {
        path : '/tekzone',
        new : '',
        image:'https://cdn.tgdd.vn/News/1557153/cach-tat-thong-bao-reddit-tren-gmail-4-1280x720.jpg',
        title:'Cách tắt thông báo Reddit trên Gmail siêu đơn giản, giúp hộp thư Gmail của bạn sạch sẽ và gọn gàng',
        priceNew : '',
        priceOld : '',
        sell : ' ',
        free : ""
    },
    {
        path : '/tekzone',
        new : '',
        image:'https://cdn.tgdd.vn/News/1556882/1-1280x720.jpg',
        title:'Cách chèn ảnh vào Google Tài liệu chỉ với vài thao tác, giúp bạn minh họa sống động hơn cho các dữ liệu của mình',
        priceNew : '',
        priceOld : '',
        sell : ' ',
        free : ""
    },
    {
        path : '/tekzone',
        new : '',
        image:'https://cdn.tgdd.vn/News/1556876/1-1280x720.jpg',
        title:'Cách xem phim trên Netflix dành cho điện thoại, máy tính, trải nghiệm ngay bộ phim yêu thích',
        priceNew : '',
        priceOld : '',
        sell : ' ',
        free : ""
    },
    {
        path : '/tekzone',
        new : '',
        image:'https://cdn.tgdd.vn/News/0/tn-1280x720-5.jpg',
        title:'Cách đổi tên trong Among Us cực đơn giản, giúp bạn tạo nên những màn chơi kịch tích và khó đoán hơn',
        priceNew : '',
        priceOld : '',
        sell : ' ',
        free : ""
    },
   
   
   


]
const tab=[
    {path:'iphone',title:"iPhone",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IP_Desktop.png"},
    {path:'mac',title:"Mac",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Mac_Desktop.png"},
    {path:'ipad',title:"iPad",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IPad_Desktop.png"},
    {path:'Watch',title:"Watch",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Watch_Desktop.png"},
    {path:'Âm thanh',title:"Âm thanh",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Amthanh_Desktop.png"},
    {path:'Phụ kiện',title:"Phụ kiện",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/PK_Desktop.png"},
]
const flash = [
    {
        path : '/flash',
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/60/290326/s16/op-lung-magsafe-iphone-14-pro-max-nhua-trong-apple-mpu73-thumb-650x650.png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ",   
        sell:"20"
    },
    {
        path : '/flash',
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/60/290326/s16/op-lung-magsafe-iphone-14-pro-max-nhua-trong-apple-mpu73-thumb-650x650.png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ",   
        sell:"22"
    },
    {
        path : '/flash',
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/60/290321/s16/op-lung-magsafe-iphone-14-pro-nhua-trong-apple-mpu63-thumb-650x650.png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ", 
        sell:"30"
    },
    {
        path : '/flash',
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/9118/238123/s16/TimerThumb/apple-tv-4k-32gb-mxgy2-(1).png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ", 
        sell:"2"  
    },
    {
        path : '/flash',
img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/12979/251656/s16/chan-sac-world-travel-adapter-kit-apple-md837-thumb-1-650x650.png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ",   
        sell:"10"
    },
    {
        path : '/flash',
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/289700/s16/iphone-14-pro-max-purple-thumbtz-650x650.png" ,
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ",   
        sell:"15"
    },
    {
        path : '/flash',
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/54/290053/s16/airpods-3-hop-sac-khong-day-thumb-650x650.png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ",   
        sell:"19"
    },
]

const HomePage = () => {

    
    var settings = {
        infinite: true, //khi chạy xong sẽ quay về ban đầu,chạy vô tận
        speed: 300,
        autoplay:true, // tự động chạy
        autoplaySpeend:2000, // thời gian chạy
        slidesToShow: 6, // hiển thị 1 
        slidesToScroll: 3, // lướt qua 1
        rtl:true, // right -> left
        cssEase: 'linear',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    const [tinh,setTinh]=useState(false)

    return (
        <Layout title={"Topzone - Cửa hàng Apple chính hãng"}>
            <div className={cx('warpper')}>
                <div className={cx('slider_header')}>
                    <SliderHeader/>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content_flash')}>
                        <div className={cx('title_flash d-flex align-items-center justify-content-around')}>
                            <div className={cx('logo_flash d-flex align-items-center')}>
                                <div style={{width:"496px",height:"105px"}}/>
                                <div className={cx('kq_flash ')}>
                                    <h5>Kết thúc trong</h5>
                                    <span className={cx('flash_hour')}>09</span>
                                    <span>:</span>
                                    <span className={cx('flash_hour')}>40</span>
                                    <span>:</span>
                                    <span className={cx('flash_hour')}>07</span>
                                </div>
                            </div>
                            <div className={cx('sell_flash d-flex align-items-center justify-content-between')}>
                                <div className="item1">
                                    <p>Đang diễn ra</p>
                                    <h5>08:00 - 23:59</h5>
                                </div>
                                <div className="item1">
                                <p>Ngày mai</p>
                                    <h5>08:00 - 23:59</h5>
                                </div>
                            </div>
                        </div>
                        <div className={cx('list_product_flash')}>
                            {
                                <Slider {...settings} className={cx('d-flex align-items-center justify-content-between')}>
                                    {
                                        flash.map((e,index)=>(
                                            <ProductFlash 
                                                path={e.path}
                                                key={index}
                                                img={e.img} 
                                                title={e.title} 
                                                priceNew={e.priceNew} 
                                                priceOld={e.priceOld}
                                                sell={e.sell}/>
                                        ))
                                    }
                                </Slider>
                            }
                        </div>  
                    </div>
                    <div className={cx('list_tabBox d-flex align-items-center justify-content-between')}>
                        {
                            tab.map((e,index)=>(
                                <div key={index} className={cx('item_tabBox')}>
                                    <Link to={e.path} className={cx('item_tabBox_Link')}>
                                        <div className={cx('item_tabBox_page')}>
                                            <img className={cx('item_tabBox_img')} src={e.img} alt={e.title} />
                                        </div>
                                        <p className={("item_tabBox_title")}>{e.title}</p>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className={cx('box_main')}>
                        <BoxSlider title={"iphone"} data={iphone}/>
                        <BoxSlider title={"mac"} data={mac}/>
                        <BoxSlider title={"watch"} data={watch}/>
                        <BoxSlider title={"Âm thanh"} data={AmThanh}/>
                        <BoxSlider title={"Phụ kiện"} data={PhuKien}/>
                        <BoxSlider title={"TekZone"} data={tekzone1}/>
                        
                    </div>
                </div>
                <div className={cx("intro-topzone")}>
                    <div className={cx("video-topzone")}>
                        <div className={cx("warpper-video")}>
                            <video  className={cx('video')} width="854" controls="" muted loop="" playsInline="" autoPlay={true}>
                                <source id='video' src="https://cdn.tgdd.vn/mwgcart/topzone/video/Gt-Topzone.mp4" type="video/mp4"/>
                            </video>
                            <div className={cx("gradient-bg")}></div>
                            <img className={cx("logov-topzone")} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_570x207/https://cdn.tgdd.vn/mwgcart/topzone/images/logo-video.png?v=4"/>
                        </div>
                    </div>
                    <p className={cx('description-topzone')}>
                        At TopZone, customers who love the Apple ecosystem will find the most comprehensive and diverse range of products such as iPhone, iPad, Apple Watch, MacBook, and Apple accessories... in a classy and modern shopping space.
                    </p>
                    <Link className={cx('link-topzone')} to="/gioi-thieu" target="_blank">Read more</Link>
                </div>
                <div className={cx('list-sieuthi')}>
                    <div className={cx('center-page')}>
                        <div className={cx('store-province')}>
                            <b>Mở bán tại 98 cửa hàng</b>
                            <div className={cx('stored')}>
                                <span className={cx('tinh')} onClick={()=>{
                                    if(tinh)
                                        setTinh(false)
                                    else
                                        setTinh(true)
                                }}>Chọn tỉnh thành</span>
                                <ul className={cx(`list_ul_list hide ${tinh && 'active'}`)}>
                                        <li data-province="3">Hồ Chí Minh</li>
                                        <li data-province="5">Hà Nội</li>
                                        <li data-province="9">Đà Nẵng</li>
                                        <li data-province="82">An Giang</li>
                                        <li data-province="102">Bà Rịa - Vũng Tàu</li>
                                        <li data-province="106">Bắc Ninh</li>
                                        <li data-province="107">Bến Tre</li>
                                        <li data-province="108">Bình Định</li>
                                        <li data-province="109">Bình Dương</li>
                                        <li data-province="110">Bình Phước</li>
                                        <li data-province="111">Bình Thuận</li>
                                        <li data-province="81">Cà Mau</li>
<li data-province="7">Cần Thơ</li>
                                        <li data-province="6">Đắk Lắk</li>
                                        <li data-province="114">Điện Biên</li>
                                        <li data-province="8">Đồng Nai</li>
                                        <li data-province="116">Gia Lai</li>
                                        <li data-province="120">Hà Tĩnh</li>
                                        <li data-province="101">Hải Phòng</li>
                                        <li data-province="122">Hậu Giang</li>
                                        <li data-province="124">Hưng Yên</li>
                                        <li data-province="125">Khánh Hòa</li>
                                        <li data-province="126">Kiên Giang</li>
                                        <li data-province="129">Lâm Đồng</li>
                                        <li data-province="131">Lào Cai</li>
                                        <li data-province="132">Long An</li>
                                        <li data-province="133">Nam Định</li>
                                        <li data-province="134">Nghệ An</li>
                                        <li data-province="136">Ninh Thuận</li>
                                        <li data-province="140">Quảng Nam</li>
                                        <li data-province="142">Quảng Ninh</li>
                                        <li data-province="143">Quảng Trị</li>
                                        <li data-province="146">Tây Ninh</li>
                                        <li data-province="148">Thái Nguyên</li>
                                        <li data-province="149">Thanh Hóa</li>
                                        <li data-province="151">Tiền Giang</li>
                                        <li data-province="154">Vĩnh Long</li>
                                        <li data-province="155">Vĩnh Phúc</li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('store-list')}>
                                <p className="p114 ">
                                    <a href="/sieu-thi-so-583-to-dan-pho-10-phuong-tan-thanh-thanh-pho-dien-bien-phu-tinh-dien-bien-id-12581">
                                        <span>TopZone Tân Thanh <span>Xem chỉ đường</span></span>
                                        <span>Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện Biên Phủ, Tỉnh Điện Biên, Việt Nam</span>
                                            <span id="promoApple">
                                                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"/>
<b> Hỗ trợ thanh toán qua Apple Pay</b> 
                                            </span>
                                    </a>
                                </p>
                                <p className="p131 ">
                                    <a href="/sieu-thi-nga-6-pho-ly-cong-uan-phuong-kim-tan-thanh-pho-lao-cai-tinh-lao-cai-id-13889">
                                        <span>TopZone Lý Công Uẩn <span>Xem chỉ đường</span></span>
                                        <span>Ngã 6 phố Lý Công Uẩn, Phường Kim Tân, Thành phố Lào Cai, Tỉnh Lào Cai, Việt Nam</span>
                                            <span id="promoApple">
                                                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"/>
                                                <b> Hỗ trợ thanh toán qua Apple Pay</b> 
                                            </span>
                                    </a>
                                </p>
                                <p className="p126 ">
                                    <a href="/sieu-thi-142a-142b-nguyen-trung-truc-tt-duong-dong-h-phu-quoc-t-kien-giang-id-12963">
                                        <span>TopZone Nguyễn Trung Trực <span>Xem chỉ đường</span></span>
                                        <span>Số 142A-142B đường Nguyễn Trung Trực, Thị Trấn Dương Đông, Huyện Phú Quốc, Tỉnh Kiên Giang, Việt Nam</span>
                                            <span id="promoApple"><img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"/>
                                            <b> Hỗ trợ thanh toán qua Apple Pay</b> 
                                        </span>
                                    </a>
                                </p>
                                <p className="p155 ">
                                    <a href="/sieu-thi-duong-nguyen-tat-thanh-phuong-khai-quang-thanh-pho-vinh-yen-tinh-vinh-phuc-id-12932">
                                        <span>TopZone Khai Quang <span>Xem chỉ đường</span></span>
                                        <span>Đường Nguyễn Tất Thành, Phường Khai Quang, Thành phố Vĩnh Yên, Tỉnh Vĩnh Phúc, Việt Nam</span>
                                            <span id="promoApple"><img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"/>
                                            <b> Hỗ trợ thanh toán qua Apple Pay</b> 
                                        </span>
                                    </a>
                                </p>
                                <p className="p5 ">
<a href="/sieu-thi-so-34-to-2-khu-xuan-ha-tt-xuan-mai-h-chuong-my-tp-ha-noi-id-13885">
                                        <span>TopZone Xuân Mai <span>Xem chỉ đường</span></span>
                                        <span>Số 34, tổ 2, Khu Xuân Hà, Thị Trấn Xuân Mai, Huyện Chương Mỹ, Thành phố Hà Nội, Việt Nam</span>
                                            <span id="promoApple"><img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"/>
                                            <b> Hỗ trợ thanh toán qua Apple Pay</b> 
                                        </span>
                                    </a>
                                </p>
                                <p className="p155 ">
                                    <a href="/sieu-thi-so-286-duong-hai-ba-trung-phuong-hung-vuong-thanh-pho-phuc-yen-tinh-vinh-phuc-id-12930">
                                        <span>TopZone 286 Hai Bà Trưng <span>Xem chỉ đường</span></span>
                                        <span>Số nhà 286, Đường Hai Bà Trưng, Phường Hùng Vương, Thành phố Phúc Yên ,Tỉnh Vĩnh Phúc, Việt Nam</span>
                                            <span id="promoApple"><img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"/>
                                            <b> Hỗ trợ thanh toán qua Apple Pay</b> 
                                        </span>
                                    </a>
                                </p>        
                        </div>
                        <Link to="#" className={cx('viewmore')}>Xem thêm 92 cửa hàng</Link>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default HomePage;