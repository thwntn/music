import style from './popular.module.css'
import { Row, Col } from 'react-bootstrap'
import Playing from '../playing/playing';
import { useEffect, useState } from 'react';

function Popular() {
    const [loop, setLoop] = useState(false)
    const [listPopular, setListPopular] = useState([])
    const [playing, setPlaying] = useState({
        item: {
            musicFile: 'null',
            imageName: null
        }
    })
    const [active, setActive] = useState(-1)


    useEffect (() => setListPopular([{"musicID":3,"musicName":"Bông Hoa Đẹp Nhất","musicFile":"./file/bonghoadepnhat.mp3","imageID":1,"musicSingerName":"Quân AP","imageName":"https://avatar-ex-swe.nixcdn.com/song/2020/09/10/5/e/e/3/1599731826319_640.jpg"},{"musicID":4,"musicName":"Celina","musicFile":"./file/celina.mp3","imageID":2,"musicSingerName":"Obitsto","imageName":"https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2020/06/08/8ad85ea8-a176-11ea-8055-0ae12e466049_image_hires_185545.jpg?itok=Li5NII_p&v=1591613751"},{"musicID":5,"musicName":"Cô Ta","musicFile":"cota.mp3","imageID":3,"musicSingerName":"Hoàng Vương","imageName":"cota.jpg"},{"musicID":6,"musicName":"Đào Nương","musicFile":"daonuong.mp3","imageID":4,"musicSingerName":"Hoàng Vương","imageName":"daonuong.jpg"},{"musicID":8,"musicName":"Em Hát Ai Nghe","musicFile":"aihatainghe.mp3","imageID":6,"musicSingerName":"Orange","imageName":"emhatainghe.jpg"},{"musicID":9,"musicName":"Em Hát Ai Nghe Remix","musicFile":"emhatainghere.mp3","imageID":7,"musicSingerName":"Orange","imageName":"emhatainghere.jpeg"},{"musicID":10,"musicName":"Người Từng Yếu Anh Rất Sâu Nặng","musicFile":"nguoitungyeuanhratsaunang.mp3","imageID":8,"musicSingerName":"Hương Tràm","imageName":"nguoitungyeuanhratsaunang.jpg"},{"musicID":11,"musicName":"Nhất Thân","musicFile":"nhatthan.mp3","imageID":9,"musicSingerName":"Masew","imageName":"nhatthan.jpeg"},{"musicID":13,"musicName":"Sugar Free","musicFile":"sugarfree.mp3","imageID":12,"musicSingerName":"T-Ara","imageName":"sugarfree.jpg"},{"musicID":14,"musicName":"Váy Cưới","musicFile":"vaycuoi.mp3","imageID":15,"musicSingerName":"Huy Lee","imageName":"vaycuoi.jpg"}]), [])

    // const fetchData = () => {
    //     const url = 'http://localhost:8080/popular'
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(responseJson => setListPopular(responseJson))
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    return ( 
        <Row className = {style.popular}>
            <Col xs= {8}>
                <h5>Most Poppular</h5>
                <p>92 Songs</p>
                <Row className={style.frameList}>
                    {listPopular.map((item, index, array) => {
                        return (
                            <Row
                                key = {index}
                                className={active == index ? `${style.item} ${style.active}` : `${style.item}`}
                                onClick={() => {
                                    setPlaying({item, index, array})
                                    setActive(index)
                                }}
                            >
                                <Col xs = {1} style={{textAlign: 'center'}}>{index}</Col>
                                <Col
                                    xs ={2}
                                    className={style.img}
                                >
                                    <div style={{ backgroundImage: `url(${item.imageName})` }}></div>
                                </Col>
                                <Col xs = {4}>{item.musicName}</Col>
                                <Col xs = {4}>{item.musicSingerName}</Col>
                                <Col xs = {1}>09:20</Col>
                            </Row>
                        )
                    })}
                </Row>
            </Col>
            <Col xs= {4}>
                {listPopular.length != 0 ? <Playing props = {{playing, setPlaying, setActive}}></Playing> : null}
            </Col>
        </Row>
     );
}

export default Popular;