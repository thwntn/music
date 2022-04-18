import { useEffect, useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import style from './playing.module.css'

function Control({ media }) {
    const [range, setRange] = useState(0)

    useEffect(() => {
        //cập nhật thời gian thực cho range
        const changeTime = () => {
            setRange(Math.floor(media.current.currentTime/media.current.duration * 100))
        }

        media.current.addEventListener('timeupdate', changeTime)
        return () => {
            media.current.removeEventListener('timeupdate', changeTime)
        }
    }, [])

    return (
        <Row className={style.control}>
            <input
                type='range'
                value={range}
                onChange={(e) => {
                    setRange(e.target.value);
                    media.current.currentTime = Math.floor(media.current.duration*e.target.value/100)
                }}    
            ></input>
        </Row>
      );
}

export default Control;