import style from './style/leftBar.module.css'
import {Row, Col} from 'react-bootstrap'

// import icon
import {AiOutlineHome, AiOutlineLineChart, AiOutlineClockCircle} from 'react-icons/ai'
import {BsViewList, BsCameraVideo, BsFileBreak} from 'react-icons/bs'
import {BiAlbum} from 'react-icons/bi'




function LeftBar() {
    return ( 
        <Col className={style.leftBar} xs={2}>
            <Col xs = {6} className={style.boxLeftBar}>
                <Row className={style.info}>
                    <div className={style.imageUser}></div>
                    <h5 className={style.nameUser}>Thiên Tân</h5>
                    <p>nttansv@gmail.com</p>
                </Row>
                <Row>
                    <ul>
                        <li>
                            <AiOutlineHome></AiOutlineHome>
                            <a>Home</a>
                        </li>
                        <li>
                            <BsViewList></BsViewList>
                            <a>Browser</a>
                        </li>
                        <li>
                            <BiAlbum></BiAlbum>
                            <a>Album</a>
                        </li>
                        <li>
                            <AiOutlineLineChart></AiOutlineLineChart>
                            <a>Artists</a>
                        </li>
                        <li>
                            <BsCameraVideo></BsCameraVideo>
                            <a>Videos</a>
                        </li>
                    </ul>
                </Row>
                <Row>
                    <h3>Music</h3>
                    <ul>
                        <li>
                            <AiOutlineClockCircle></AiOutlineClockCircle>
                            <a>Recently Player</a>
                        </li>
                        <li>
                            <BsFileBreak></BsFileBreak>
                            <a>Local File</a>
                        </li>
                    </ul>
                </Row>
            </Col>
        </Col>
     );
}

export default LeftBar;