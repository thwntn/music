import React from "react";
import style from './slider.module.css'
import { Row, Col } from 'react-bootstrap'

function Slider() {
    return ( 
        <Row className={style.slider}>
            <Col xs = {12}>
            <h5>Billoard Topchart</h5>
                <div className={style.frameSlider}>
                    <div className={style.item}>
                        <div className = {style.img} style = {{backgroundImage: 'url(https://media.2dep.vn/upload/thucquyen/2020/12/24/quan-ap-len-tieng-ve-tin-don-co-con-rieng-1608778269-1.jpg)'}}></div>
                        <h5>Bông hoa đẹp nhất</h5>
                        <p>Quân AP</p>
                    </div>
                    <div className={style.item}>
                        <div className = {style.img} style = {{backgroundImage: 'url(https://i.ytimg.com/vi/7DcleAK0JO0/maxresdefault.jpg)'}}></div>
                        <h5>Thương Nhau Tới Bến</h5>
                        <p>Hồ Phi Nal</p>
                    </div>
                    <div className={style.item}>
                        <div className = {style.img} style = {{backgroundImage: 'url(https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/17/1594993295259001217058195526990446986703265n-1618651102193611924537.jpg)'}}></div>
                        <h5>Ten bai hat</h5>
                        <p>Casi</p>
                    </div>
                    <div className={style.item}>
                        <div className = {style.img} style = {{backgroundImage: 'url(https://toplist.vn/images/800px/havana-camila-cabello-young-thug-206021.jpg)'}}></div>
                        <h5>Ten bai hat</h5>
                        <p>Casi</p>
                    </div>
                    <div className={style.item}>
                        <div className = {style.img} style = {{backgroundImage: 'url(https://media.2dep.vn/upload/thucquyen/2020/12/24/quan-ap-len-tieng-ve-tin-don-co-con-rieng-1608778269-1.jpg)'}}></div>
                        <h5>Bông hoa đẹp nhất</h5>
                        <p>Quân AP</p>
                    </div>
                    <div className={style.item}>
                        <div className = {style.img} style = {{backgroundImage: 'url(https://i.ytimg.com/vi/7DcleAK0JO0/maxresdefault.jpg)'}}></div>
                        <h5>Thương Nhau Tới Bến</h5>
                        <p>Hồ Phi Nal</p>
                    </div>
                    <div className={style.item}>
                        <div className = {style.img} style = {{backgroundImage: 'url(https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/17/1594993295259001217058195526990446986703265n-1618651102193611924537.jpg)'}}></div>
                        <h5>Ten bai hat</h5>
                        <p>Casi</p>
                    </div>
                    <div className={style.item}>
                        <div className = {style.img} style = {{backgroundImage: 'url(https://toplist.vn/images/800px/havana-camila-cabello-young-thug-206021.jpg)'}}></div>
                        <h5>Ten bai hat</h5>
                        <p>Casi</p>
                    </div>
                </div>
            </Col>
        </Row>
     );
}

export default Slider;