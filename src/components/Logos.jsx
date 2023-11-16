import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Iconimg from "../assets/iconone.png"
import Iconimgg from "../assets/icontwo.png"
import Iconimggg from "../assets/iconthree.png"
import Runstick from "../assets/run.png"
import { BrowserRouter, Link, } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const logos=[
    {
        Iconlogo:Iconimg,
    },
    {
        Iconlogo:Iconimgg,
    },
    {
        Iconlogo:Iconimggg,
    }
]

const Logos = () => {
  return (
    <div className='logos-main'>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className='logos-images'>
                        <ul>
                            <Link to="/v1">
                                <img src={Iconimg}/>
                             </Link>
                             <Link to="/v2">
                                <img src={Runstick}/>
                             </Link>
                             <Link to="/v3">
                                <img src={Iconimggg}/>
                             </Link>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Logos