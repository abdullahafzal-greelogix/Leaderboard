import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cardimg from "../assets/king.png"
import Earnimg from "../assets/Coin.png"
import Yellowking from "../assets/yellowking.png"
import Pinking from "../assets/pinking.png"


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
    </div>
  )
}

export default Card