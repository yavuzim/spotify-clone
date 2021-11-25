import React from 'react'
import './download.css'
function Download() {
    return (
        <section id="download-section">
            <div className="container download-container">
                <div className="download-top">
                    <div className="top-field">
                        <img className="laptop-img" src="https://www-growth.scdn.co/static/download/laptop.svg" alt="" />
                        {/*  <img className="ok-img" src="https://www-growth.scdn.co/static/download/green-circle.svg" alt="" /> */}

                        <h1>Spotify'ı İndir</h1>
                        <p>Cihazında milyonlarca şarkı ve podcast çal.</p>
                        <button>İndir</button>
                    </div>
                </div>
                <div className="download-middle">
                    <div className="mid-field">
                        <h3>Müziğini cep telefonuna ve tablete de taşı.</h3>
                        <p>Telefonunda veya tabletinde dinlemek ücretsiz, kolay ve eğlencelidir.</p>
                        <div className="stores">
                            <img src="https://www-growth.scdn.co/static/badges/apple/tr.png" alt="App Store'dan indir" />
                            <img src="https://www-growth.scdn.co/static/badges/google/tr.png" alt="Google Play'den edin" />
                            <img src="https://www-growth.scdn.co/static/badges/microsoft-windows/tr.png" alt="Microsoft'tan edin" />
                        </div>
                    </div>
                </div>
                <div className="download-bottom">
                    <div className="bottom-field">
                        <img src="https://www-growth.scdn.co/static/download/all-devices.svg" alt="devices" />
                        <h3>Tek hesapla her yerde dinle.</h3>
                        <ul>
                            <li>CEP TELEFONU</li>
                            <li>BİLGİSAYAR</li>
                            <li>TABLET</li>
                            <li>ARAÇ</li>
                            <li>PLAYSTATİON®</li>
                            <li>XBOX</li>
                            <li>TV</li>
                            <li>HOPARLÖR</li>
                            <li>WEB PLAYER</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Download
