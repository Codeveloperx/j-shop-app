import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Img } from 'styles/styles';

const ShopComponent = () => {
  return (
    <Container>
        <Row style={{marginTop:'10rem'}}>
            <Col>
            <div style={{width:'400px'}}>
                <Img src="https://res.cloudinary.com/academiageek/image/upload/v1655387250/image_24_johor3.png" alt="" />
                </div>
            </Col>
            <Col style={{display:'flex', alignItems:'center'}}>
            <div style={{width:'20rem'}}>
                <h2>Gold Woven Chain Bracelet in Black</h2>

                <p>This bracelet features a 5MM Stainless Steel chain with Nylon cord braiding. Each bracelet includes a polishing pad and a cotton jewelry pouch. Proudly made by hand in Atlanta, GA.</p>

                <h4>Size</h4>
                <div style={{display:'flex', gap:'2rem', marginBottom:'2rem'}}>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                </div>

                <div style={{display:'flex', gap:'2rem', alignItems:'center'}}>
                    <button style={{border:'none', padding:'.5rem', background:'#3d3d3f', color:'#fff'}}>ADD TO CART</button>
                    <span style={{fontSize:'1.3rem', fontWeight:'bold'}}>549.29</span>
                </div>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ShopComponent