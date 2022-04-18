import { Row, Col } from "react-bootstrap";
import Header from "./header/header.js";
import Popular from "./popular/popular.js";
import Slider from "./slider/slider.js";
import style from './main.module.css'
import Playing from "./playing/playing.js";


function Main() {
    return ( 
        <Col className={style.main} xs = {10}>
            <Row>
                <Header></Header>
            </Row>
            <Row>
                <Slider></Slider>
            </Row>
            <Row>
                <Col xs ={12}>
                    <Popular></Popular>
                </Col>
            </Row>
        </Col>
     );
}

export default Main;