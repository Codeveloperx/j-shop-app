import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Img } from 'styles/styles';

const Section3 = () => {
  return (
    <Container>
        <Row style={{marginTop:'5rem'}}>
            <Col style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
            <div style={{width:'350px',  marginRight:'2rem'}}>
                <Img src='https://res.cloudinary.com/academiageek/image/upload/v1655387249/image_12_eqftmp.png'></Img>
            </div>
            </Col>

            <Col style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
            <div style={{width:'400px', display:'flex', flexDirection:'column',gap:'1.5rem'}}>
                <h3> J-Shop’s best Collections</h3>
                <h5>Comfort</h5>
                <p> We will reach out to you for the current cost of this permit. Please contact us for more information. Maui Divers Jewelry offers extended sizing which may be subject to an additional cost. Any subsequent resizes after purchase will incur an additional charge. Please note some styles cannot be resized due to their design.</p>
            </div>
            </Col>

        </Row>

        <Row>
            <Col style={{display:'flex', justifyContent:'end', alignItems:'center'}}>
            <div style={{width:'380px',display:'flex', flexDirection:'column',gap:'1.5rem'}}>
                <h3>100% Gold</h3>
                <p>Gold chains were a sign of service to the supreme beings of a particular religion in the past. Nowadays, they are symbols of wealth and class. Rap artists were most likely the ones who brought the custom of wearing gold chains to modern men's everyday life. There are a few reasons why do men wear gold chains.</p>
                </div>
                </Col>
            
            
            <Col style={{display:'flex', justifyContent:'start', alignItems:'center'}}>
            <div style={{width:'350px', marginLeft:'2rem'}}>
                <Img src='https://res.cloudinary.com/academiageek/image/upload/v1655387250/image_13_exdarf.png'></Img>
            </div>
            </Col>
        </Row>

        <Row>

            <Col style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
            <div style={{width:'350px',  marginRight:'2rem'}}>
                <Img src='https://res.cloudinary.com/academiageek/image/upload/v1655387250/image_14_fbbqw9.png'></Img>
            </div>
            </Col>

            <Col style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
            <div style={{width:'400px', display:'flex', flexDirection:'column',gap:'1.5rem'}}>
                <h3>Trendy</h3>
                <p>A collection of hammered gold discs swing from the top and bottom of a shimmery gold hoop, creating a noisy fringe. Earring attaches to a standard fishhook fitting. Sold as one pair of earrings.Other hoop designs do not complete the circle, but penetrate through the ear in a post, using the same attachment techniques that apply to stud earrings.</p>
                </div>
                </Col>
        </Row>
    </Container>
  )
}



export default Section3