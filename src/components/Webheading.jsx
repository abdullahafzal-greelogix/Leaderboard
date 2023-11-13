import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Webheading = () => {
  return (
    <div className='web-heading-design'>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className='web-head-content'>
                        <h1>Leaderboard </h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Webheading