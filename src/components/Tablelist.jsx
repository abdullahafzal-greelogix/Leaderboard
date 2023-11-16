import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Limgone from "../assets/listimgone.png"
import Limgtwo from "../assets/listimgtwo.png"
import Limgthree from "../assets/listimgthree.png"
import Limgfour from "../assets/listimgfour.png"
import Limgfive from "../assets/listfive.png"
import Triangleimg from "../assets/triangle.png"

const Tablelist = () => {

    const [Tabledata, setTabledata] = useState([
        {
            prizeimg:Triangleimg,
            Limg:Limgone,
            Rank:4,
            User:"Ave",
            Deposited:"$458,283",
            Prizes:"1,050",
        },
        {
            prizeimg:Triangleimg,
            Limg:Limgtwo,
            Rank:5,
            User:"Blank",
            Deposited:"$452,189",
            Prizes:"750",
        },
        {
            prizeimg:Triangleimg,
            Limg:Limgthree,
            Rank:6,
            User:"Sunfire023",
            Deposited:"$428,384",
            Prizes:"750",
        },
        {
            prizeimg:Triangleimg,
            Limg:Limgfive,
            Rank:7,
            User:"nftJoe",
            Deposited:"$400,000",
            Prizes:"500",
        },
        {
            prizeimg:Triangleimg,
            Limg:Limgfour,
            Rank:8,
            User:"No_Name",
            Deposited:"$380,020",
            Prizes:"450",
        },
        
    ])
    

  return (
    <div>
         <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className='table-list-design'>
                    <Table className='table-list-data' striped  hover >
                        <thead>
                            <tr>
                            <th>RANK</th>
                            <th colSpan={8}>USER</th>
                            <th>DEPOSITED</th>
                            <th>PRIZES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Tabledata.map((e)=>
                            <tr>
                            <td>{e.Rank}</td>
                            <td colSpan={8}><img className='table-list-img' src={e.Limg}/>{e.User}</td>
                            <td>{e.Deposited}</td>
                            <td><span className='prize-design'><img className='prize-icon' src={e.prizeimg}/>{e.Prizes}</span></td>
                            </tr>
                            )}
                        </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Tablelist