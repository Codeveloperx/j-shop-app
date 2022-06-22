import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Img } from 'styles/styles';

const Shop2Component = () => {
  return (
    <Container>
        <Row style={{marginTop:'5rem'}}>
            
            <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div style={{width:'20rem'}}>
                <h2>Gold Black Coral Ring</h2>

                <p>A 14K yellow gold ring Two Hawaiian Black Coral inlaid strips, 14.5x2mm Ring sizes 4-8 Contact us for additional ring sizes To our valued International Customers, an extra CITES charge will be added to your order.</p>

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

            <Col>
            <div style={{width:'400px'}}>
                <Img src="https://res.cloudinary.com/academiageek/image/upload/v1655387250/image_25_j37uek.png" alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Shop2Component