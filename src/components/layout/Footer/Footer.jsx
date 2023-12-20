import React from 'react';
import classNames from "classnames/bind"
import style from './Footer.scss';
import { Link } from 'react-router-dom';
const cx= classNames.bind(style)
const Footer = () => {
    return (
        <footer>
            <img className={cx('footer-chris_left')} src="//cdn.tgdd.vn/mwgcart/topzone/images/christmas/desktop/Desk_Footer_Left.png" alt="footer-chris_left" />
            <img className={cx('footer-chris_right')} src="//cdn.tgdd.vn/mwgcart/topzone/images/christmas/desktop/Desk_Footer_Right.png" alt="footer-chris_right" />
            <div className={cx('foot')}>
                <div className={cx('logo-foot')}>
                    <Link to="/">
                        <i className={cx('topzone-logo')}></i>
                    </Link>
                    <Link to="/tekzone/khac-biet-aar-va-apr-tieu-chuan-cua-hang-uy-quyen-apple-1411356">
                        <i className={cx('topzone-autho')}></i>
                    </Link>
                </div>
                <ul className={cx('list-foot')}>
                    <li>
                        <span>Tổng đài</span>

                        <Link to="tel:1900969642">
                            <span>Mua hàng:</span>
                            <b>1900.9696.42</b>
                            (7:30 - 22:00)
                        </Link>
                        <Link to="tel:1900969642">
                            <span>Khiếu nại:</span>
                            <b>1900.9868.43</b>
                            (8:00 - 21:30)
                        </Link>

                        
                    </li>
                    <li>
                        <span>Hệ thống cửa hàng</span>
                        <Link to="/he-thong-cua-hang">
                            Xem 98 cửa hàng
                        </Link>
                        <Link to="/noi-quy-cua-hang">
                            Nội quy cửa hàng
                        </Link>
                        <Link to="/chat-luong-phuc-vu">
                            Chất lượng phục vụ
                        </Link>
                        <Link to="/bao-hanh-doi-tra">
                            Chính sách bảo hành &amp; đổi trả
                        </Link>
                    </li>
                    <li>
                        <span>Hỗ trợ khách hàng</span>
                        <Link to="/dieu-kien-giao-dich">
                            Điều kiện giao dịch chung
                        </Link>
                        <Link to="/huong-dan-mua-hang">
                            Hướng dẫn mua hàng online
                        </Link>
                        <Link to="/giao-hang">
                            Chính sách giao hàng
                        </Link>
                        <Link to="/thanh-toan">
                            Hướng dẫn thanh toán
                        </Link>
</li>
                    <li>
                        <span>Về thương hiệu TopZone</span>

                        <Link to="/tekzone/tat-tan-tat-thong-tin-ve-app-tich-diem-hoan-toan-moi-1480642#gioithieu" className="color-link">
                            Tích điểm Quà tặng VIP
                        </Link>
                        <Link to="/gioi-thieu">
                            Giới thiệu TopZone
                        </Link>
                        <Link to="https://www.thegioididong.com/b2b">
                            Bán hàng doanh nghiệp
                        </Link>
                        <Link to="/chinh-sach-xu-ly-du-lieu-ca-nhan">
                            Chính sách xử lý dữ liệu cá nhân
                        </Link>
                        <Link rel="nofollow" to="https://www.topzone.vn/?sclient=mobile">Xem bản mobile</Link>
                    </li>
                    <li>
                        <span>Trung tâm bảo hành TopCare</span>
                        <Link to="/topcare">
                            Giới thiệu TopCare
                        </Link>
                    </li>
                </ul>
                <div className="text-cpr">
                    <p>
                        © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. <br />
                        Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP. Hồ Chí Minh. Điện thoại: 028 38125960. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: Tot.huynhvan@thegioididong.com.
                    </p>
                </div>
                <div className={cx('certify')}>
                    <Link to="http://online.gov.vn/Home/WebDetails/88735" target="_blank">
                        <img className={cx('ls-is-cached lazyloaded')} data-src="//cdn.tgdd.vn/mwgcart/topzone/images/certify-bct.png" width="127" height="47" src="//cdn.tgdd.vn/mwgcart/topzone/images/certify-bct.png" />
                    </Link>
                    <Link to="https://tinnhiemmang.vn/danh-ba-tin-nhiem/topzonevn-1635823490" title="Chứng nhận Tin Nhiệm Mạng" target="_blank">
                        <img className={cx('ls-is-cached lazyloaded')} data-src="https://tinnhiemmang.vn/handle_cert?id=topzone.vn" width="150" height="40" alt="Chứng nhận Tin Nhiệm Mạng" src="https://tinnhiemmang.vn/handle_cert?id=topzone.vn" />
                    </Link>
                    <Link to="//www.dmca.com/Protection/Status.aspx?ID=4f44c8e7-b645-4ddb-8aec-c130d0598c85&amp;refurl=https://www.topzone.vn/" target="_blank" title="DMCA.com Protection Status" className="dmca-badge">
<img className={cx('ls-is-cached lazyloaded')} data-src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=4f44c8e7-b645-4ddb-8aec-c130d0598c85" alt="DMCA.com Protection Status" width="135" height="32" aria-="" src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=4f44c8e7-b645-4ddb-8aec-c130d0598c85" />
                    </Link>
                </div>
            </div>
            <div className={cx('footer__logo')}>
                <p className={cx('footer__logo-hd')}>Ghé thăm các website khác cùng tập đoàn MWG</p>
                <ul className={cx("footer__logo-list")}>
                    <li>
                        <Link rel="nofollow" to="https://www.thegioididong.com/" target="_blank">
                            <i className={cx("iconlogo-thegioididong")}></i>
                        </Link>
                    </li>
                    <li>
                        <Link rel="nofollow" to="https://www.dienmayxanh.com/" target="_blank">
                            <i className={cx("iconlogo-dienmayxanh")}></i>
                        </Link>
                    </li>
                    <li>
                        <Link rel="nofollow" to="https://www.bachhoaxanh.com/" target="_blank">
                            <i className={cx("iconlogo-bachhoaxanh")}></i>
                        </Link>
                    </li>
                    <li>
                        <Link rel="nofollow" to="https://www.nhathuocankhang.com/" target="_blank" title="Chuỗi nhà thuốc chuẩn GPP">
                            <i className={cx("iconlogo-ankhang")}></i>
                        </Link>
                    </li>
                    <li>
                        <Link rel="nofollow" to="https://avakids.com/" target="_blank" title="Chuỗi cửa hàng mẹ và bé">
                            <i className="iconlogo-kids"></i>
                        </Link>
                    </li>
                    <li>
                        <Link rel="nofollow" to="https://www.dichvutantam.com/" target="_blank" title="Dịch vụ vệ sinh máy lạnh, sửa chữa điện nước, lắp đặt máy lạnh, máy giặt, tivi">
                            <i className={cx("iconlogo-tantam")}></i>
                        </Link>
                    </li>
                    <li>
                        <Link rel="nofollow" to="https://www.4kfarm.com/" target="_blank" title="Nông trại rau sạch">
                            <i className="iconlogo-4kfarm"></i>
                        </Link>
                    </li>
                    <li>
                        <Link rel="nofollow" to="https://vieclam.thegioididong.com/" target="_blank" title="Trang tuyển dụng của tập đoàn Thế Giới Di Động">
                            <i className={cx("iconlogo-vieclam")}></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
