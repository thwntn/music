import { Row, Col }  from 'react-bootstrap'
import { IconContext } from 'react-icons/lib'
import { useEffect, useRef, useState } from 'react'
import { FaUndo, FaArrowRight, FaArrowLeft, FaTasks, FaPlay, FaPause } from 'react-icons/fa'

import style from './playing.module.css'
import Control from './control'

function Playing({ props }) {
    const audio = useRef()
    const [status, setStatus] = useState(true)
    return ( 
        <Row className = {style.playing}>
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
                    <Col xs={2}><FaTasks></FaTasks></Col>
                    <Col
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
                    <Col xs={2}>
                        <IconContext.Provider value={{color: 'red'}}><FaUndo></FaUndo></IconContext.Provider>
                    </Col>
                </Row>
            </Col>
        </Row>
     );
}

export default Playing;