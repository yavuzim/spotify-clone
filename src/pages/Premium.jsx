import React from 'react'
import './style.css'

function Premium() {
    return (
        <section id="premium-section">
            <div className="box-top">
                <div className="container premium-container">
                    <p className="top-title">Premium'u 1 ay boyunca ücretsiz kullan</p>
                    <p className="top-paragraph">Sonra sadece 17,99 TL/ay. İstediğin zaman iptal et.</p>
                    <div className="buttons">
                        <button>KULLANMAYA BAŞLA</button>
                        <button>Planları Görüntüle</button>
                    </div>
                    <p className="conditions">
                        <a href=""> Hüküm ve koşullar geçerlidir</a>. Premium'u daha önce denemiş olan kullanıcılar 1 aylık ücretsiz tekliften yararlanamaz.
                    </p>
                </div>
            </div>
            <div className="box-middle">
                <h2>
                    Neden Premium'a geçmelisin?
                </h2>
                <div className="grid">
                    <div className="card">
                        <div className="image">
                        </div>
                        <p className="grid-title">Müzik İndir</p>
                        <p className="grid-text">İstediğin yerde dinle.</p>
                    </div>
                    <div className="card">
                        <div className="image">
                        </div>
                        <p className="grid-title">Reklamlarla bölünmeden dinle.</p>
                        <p className="grid-text">Kesintisiz müziğin keyfini çıkar..</p>
                    </div>
                    <div className="card">
                        <div className="image">
                        </div>
                        <p className="grid-title">İstediğin şarkıyı çal.</p>
                        <p className="grid-text">Mobil cihazında bile.</p>
                    </div>
                    <div className="card">
                        <div className="image">
                        </div>
                        <p className="grid-title">Sınırsız şarkı atlama hakkı.</p>
                        <p className="grid-text">Sonraki düğmesine basman yeterli.</p>
                    </div>
                </div>
            </div>
            <div className="box-bottom">

                <h2 className="bottom-title">Premium'unu seç</h2>
                <h3 className="bottom-text">Telefonunda, hoparlöründe ve diğer cihazlarında sınırsız dinle.</h3>
                <div className="bottom-grid">
                    <div className="bottom-card">

                    </div>
                    <div className="bottom-card">

                    </div>
                    <div className="bottom-card">

                    </div>
                    <div className="bottom-card">

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Premium
