import style from './header.module.css'
import { Col, Row } from 'react-bootstrap'
import React from "react";
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FcSettings } from 'react-icons/fc'
import { RiNotification3Fill } from 'react-icons/ri'

function Header() {
    return ( 
        <Row className={style.header}>
            <Col className={style.boxHeader} xs = {8}>
                <input placeholder='Search for song, artists, ...'></input>
            </Col>
            <Col className={style.nav} xs={4}>
                <RiNotification3Fill></RiNotification3Fill>
                <FcSettings className={style.setting}></FcSettings>
                <button>Đăng nhập</button>
            </Col>
        </Row>
     );
}

export default Header;