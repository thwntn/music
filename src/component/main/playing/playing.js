import { Row, Col, Button }  from 'react-bootstrap'
import { IconContext } from 'react-icons/lib'
import { useEffect, useRef, useState } from 'react'
import { FaCompressAlt, FaWindowMinimize, FaExpandAlt, FaRegWindowClose, FaUndo, FaArrowRight, FaArrowLeft, FaTasks, FaPlay, FaPause } from 'react-icons/fa'

import style from './playing.module.css'
import Control from './control'

function Playing({ props }) {

    const [position, setPosition] = useState()
    const play = useRef()
    const audio = useRef()
    const [status, setStatus] = useState(true)
    const [icon, setIcon] = useState(<FaCompressAlt></FaCompressAlt>)
    const [state, setState] = useState(false)

    return (
        <Row ref = {play} className = {style.playing}>
            <audio
                ref = {audio}
                src = {`${props.playing.item.musicFile}`}
                autoPlay
                loop
                style={{display: 'none'}}
            ></audio>
            <h5>Now Playing</h5>
            <p>49 Song</p>
            <Col xs={11} className={style.frame}>
            <button className={style.close}
                onClick={() => {
                    if (state == false) {
                        play.current.style.transform = 'translateY(0%)'
                        setIcon(<FaCompressAlt></FaCompressAlt>)
                        setState(true)
                    } else {
                        play.current.style.transform = 'translateY(94%)'
                        setIcon(<FaExpandAlt></FaExpandAlt>)
                        setState(false)
                    } 
                }}
                >{icon}</button>
                <Row className={style.boxMusic}>
                    <Row className={style.cd}>
                        <div className = {style.imageCD} style={ props.playing.item.imageName != null ?  {backgroundImage: `url(${props.playing.item.imageName})` } : null}></div>
                    </Row>
                    <Row className={style.info}>
                        <h5>{props.musicName}</h5>
                        <p>{props.musicSingerName}</p>
                    </Row>
                    <Control media = {audio}></Control>
                </Row>
                <Row className={style.navControl}>
                    <Col className={style.btn} xs={2}><FaTasks></FaTasks></Col>
                    <Col
                    className={style.btn}
                        xs={2}
                        onClick={() => {
                            if(props.playing.index > 0) {
                                props.setPlaying({
                                    index: props.playing.index - 1,
                                    array: props.playing.array,
                                    item: props.playing.array[props.playing.index - 1]
                                })
                                props.setActive(props.playing.index - 1)
                            }
                        }}
                    ><FaArrowLeft></FaArrowLeft></Col>
                    <Col
                    className={style.btn}
                        xs={2}
                        className={style.playingButton}
                        onClick={()=> {
                            if(status == false) {
                                setStatus(true)
                                audio.current.play()
                            } else {
                                setStatus(false)
                                audio.current.pause()
                            }
                        }}
                    >{status ? <FaPause></FaPause> : <FaPlay></FaPlay>}</Col>
                    <Col
                    className={style.btn}
                        xs={2}
                        onClick={() => {
                            if(props.playing.index != props.playing.array.length -1) {
                                props.setPlaying({
                                    index: props.playing.index + 1,
                                    array: props.playing.array,
                                    item: props.playing.array[props.playing.index + 1]
                                })
                                props.setActive(props.playing.index + 1)
                            }
                        }}
                    ><FaArrowRight></FaArrowRight></Col>
                    <Col xs={2}
                    className={style.btn}>
                        
                        <IconContext.Provider value={{color: 'red'}}><FaUndo></FaUndo></IconContext.Provider>
                    </Col>
                </Row>
            </Col>
        </Row>
     );
}

export default Playing;