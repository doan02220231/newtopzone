import React from 'react';
import classNames from 'classnames';
import style from './BoxSlider.scss';
import Slider from 'react-slick'
import HomePage from '../../pages/HomePage/HomePage';
import { Link } from 'react-router-dom';
import { CustomNextArrow, CustomPrevArrow } from '../../hooks/CustoArrow';

const cx   = classNames.bind(style);
var settings = {
    infinite: true, //khi chạy xong sẽ quay về ban đầu,chạy vô tận
    speed: 300,
    autoplay:true, // tự động chạy
    autoplaySpeend:100, // thời gian chạy
    slidesToShow: 4, // hiển thị 1 
    slidesToScroll: 1, // lướt qua 1
    rtl:true, // right -> left
    cssEase: 'linear',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
};

const BoxSlider = ({title,data}) => {
    return (
        <div className={cx('wrapper_boxslider ')}>
            <div className={cx("boxslider_title  ")}>
                <Link className={cx('boxslider_link d-flex align-items-center justify-content-center ')}>
                    <i className={cx("fa-brands fa-apple link_logo ")} ></i>
                    <h3 className={cx('boxslider_link_title')}>{title}</h3>
                </Link>
            </div>

            <div className={cx("list_productbox")}>
                <Slider {...settings}  className={cx(' d-flex align-items-center justify-content-between')}>
            {data.map((e,index) => (
                <div className={cx("item_productbox")}>
           
                    <div className={cx("productbox")} key={index}>
                    <label className={cx(`no_label ${e.new && 'label'}`)}>{e.new}</label>
                        <div className={cx("img_slidebox")}>
                            <img src={e.image} alt='iphone'/>
                        </div>
                        <Link to={e.path}>
                            <div className={cx("discription_box")}>
                                <h5 className={cx("discription_box_title")}> {e.title}</h5>
                                <div className={cx("price_box")}>
                                    <span >
                                        {e.priceNew}
                                        <stricke>{e.priceOld}</stricke>
                                        <small>{e.sell}</small>
                                    </span>
                                    <p className={cx('orange')}> {e.free}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                ))}
                </Slider>
            </div>
        </div>
    );
}

export default BoxSlider;
