import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cardimg from "../assets/king.png"
import Earnimg from "../assets/Coin.png"
import Yellowking from "../assets/yellowking.png"
import Pinking from "../assets/pinking.png"
import Table from 'react-bootstrap/Table';
import Limgone from "../assets/listimgone.png"
import Limgtwo from "../assets/listimgtwo.png"
import Limgthree from "../assets/listimgthree.png"
import Limgfour from "../assets/listimgfour.png"
import Limgfive from "../assets/listfive.png"
import Triangleimg from "../assets/triangle.png"


// const data=[
//     {
//         Cardimage:Cardimg,
//         Cardhead:"kingqueen",
//         Cardpara:"Deposited: $2,040,060",
//         Earnimage:Earnimg,
//         Earnhead:"EARN",
//         Earnprice:"5,000",
//     },
//     {
//         Cardimage:Yellowking,
//         Cardhead:"JohnDoe",
//         Cardpara:"Deposited: $2,948,430",
//         Earnimage:Earnimg,
//         Earnhead:"EARN",
//         Earnprice:"20,000",
//     },
//     {
//         Cardimage:  Pinking,
//         Cardhead:"sniper023",
//         Cardpara:"Deposited: $2,721,980",
//         Earnimage:Earnimg,
//         Earnhead:"EARN",
//         Earnprice:"10,000",
//     }
// ]

const Card = () => {
    const [Carddata, setTableItems] = useState([
        {
            Cardimage:Cardimg,
            Cardhead:"kingqueen",
            Cardpara:"Deposited: $2,040,060",
            Earnimage:Earnimg,
            Earnhead:"EARN",
            Earnprice:"5,000",
        },
        {
            Cardimage:Yellowking,
            Cardhead:"JohnDoe",
            Cardpara:"Deposited: $2,948,430",
            Earnimage:Earnimg,
            Earnhead:"EARN",
            Earnprice:"20,000",
        },
        {
            Cardimage:  Pinking,
            Cardhead:"sniper023",
            Cardpara:"Deposited: $2,721,980",
            Earnimage:Earnimg,
            Earnhead:"EARN",
            Earnprice:"10,000",
        }
    ])

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
    <div className='card-wrapper'>
        <Container>
            <Row className='row-design'>
                {Carddata.map((e)=>
                <Col lg={4} md={12} sm={12} className='column-grid-design'>
                    <div className='card-details'>
                        <div className='card-img'>
                            <img src={e.Cardimage}/>
                        </div>
                        <div className='card-header'>
                            <h2>{e.Cardhead}</h2>
                            <p>{e.Cardpara}</p>
                        </div>
                        <div className='earn-detail'>
                            <img src={e.Earnimage}/>
                            <h4>{e.Earnhead}</h4>
                            <h2>{e.Earnprice}</h2>
                        </div>
                    </div>
                </Col>
                )}
            </Row>
        </Container>

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

export default Card