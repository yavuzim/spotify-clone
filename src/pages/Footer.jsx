import React from 'react'
import './footer.css'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
function Footer() {
    return (
        <footer>
            <div className="container footer-container">
                <div className="logo-field footer-logo">
                    <div className="logo">
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                    <div className="logo-text">
                        <span>Spotify</span>
                        <span>®</span>
                    </div>
                </div>
                <div className="footer-list">
                    <div className="list">
                        <div className="title">ŞİRKET</div>
                        <div className="d1-list">
                            <ul>
                                <li><a href="">Hakkında</a></li>
                                <li><a href="">Kaiyer</a></li>
                                <li><a href="">For the Record</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="list">
                        <div className="title">TOPLULUKLAR</div>
                        <div className="d2-list">
                            <ul>
                                <li><a href="">Sanatçılar İçin</a></li>
                                <li><a href="">Geliştiriciler</a></li>
                                <li><a href="">Reklam</a></li>
                                <li><a href="">Yatırımcılar</a></li>
                                <li><a href="">Satıcılar</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="list">
                        <div className="title">YARARLI BAĞLANTILAR</div>
                        <div className="d3-list">
                            <ul>
                                <li><a href="">Destek</a></li>
                                <li><a href="">Web Çalar</a></li>
                                <li><a href="">Ücretsiz Mobil Uygulama</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="social-list">
                    <div className="social">
                        <FaInstagram className="icon" />
                    </div>
                    <div className="social">
                        <FaTwitter className="icon" />
                    </div>
                    <div className="social">
                        <FaFacebookF className="icon" />
                    </div>
                </div>
                <div className="information">
                    <div className="information-list">
                        <ul>
                            <li><a href="">Yasal</a></li>
                            <li><a href="">Gizlilik Merkezi</a></li>
                            <li><a href="">Gizlilik Politikası</a></li>
                            <li><a href="">Tanımlama Bilgileri</a></li>
                            <li><a href="">Reklamlar Hakkında</a></li>
                        </ul>
                    </div>
                    <div className="information-right">
                        <div className="information-right-top">
                            <img src="https://cdn1.iconfinder.com/data/icons/rcons-basic-work-and-office/16/internet_world_network_web_planet_earth_globe-256.png" alt="" />
                            Türkiye
                        </div>
                        <div>© 2021 Spotfy AB</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
