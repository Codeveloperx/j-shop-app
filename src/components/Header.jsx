import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { BsPlayCircleFill } from "react-icons/bs";
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import {FaVimeoV} from 'react-icons/fa';
import { Img } from "styles/styles";


const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid; */
  height: 90vh;

`;

const Header = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs="12" lg='6'>
            <Content>

              <div style={{width:'90%', margin:'-4rem auto'}}>
                <Img
                  src="https://res.cloudinary.com/academiageek/image/upload/v1655395241/gold-ring-with-shiny-diamond-stone-it_ba0tcq.png"
                  alt="Imagen de anillo de bodas"
                />
              </div>

              <div>
              <div style={{width:'80px', height:'80px', border:'1px solid #3D3D3F',display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', right:'0', left:'0', top:'0', bottom:'0', margin:'auto'}} className="rounded-circle">Explore</div>
              {/* rounded-circle" */}
              </div>

             <div style={{width:'70%', margin:'-2rem 3rem auto auto'}}>
                <h1 style={{fontSize:'4.5rem'}}>Jewelery tells a great story</h1>
              </div>

              <div style={{display:'flex',justifyContent:'center', gap:'2.5rem', marginTop:'1.8rem'}}>

                <div style={{width:'150px'}}>
                  <h3 style={{fontSize:'20px'}}>Gold</h3>
                  <p style={{fontSize:'12px'}}>Her provision acuteness had two why intention. </p>
                </div>
                <div style={{width:'150px'}}>
                  <h3 style={{fontSize:'20px'}}>Silver</h3>
                  <p style={{fontSize:'12px'}}>Her provision acuteness had two why intention. </p>
                </div>

              </div>
            </Content>
          </Col>




         <Col lg="5">
            <div style={{width: '350px', margin:'3rem 0 0 3rem'}}>
              <h3 style={{fontSize:'25px'}}>Our Story</h3>
              <p style={{fontSize:'14px'}}>
                modern jewelry is made of gold, silver, or platinum, often with
                precious or semiprecious stones, it evolved from shells, animal
                teeth, and other items used as body decoration in prehistoric
                times.
              </p>
            </div>

            <div  style={{width:'80%', height:'20rem'}}>
              <Img
                src="https://res.cloudinary.com/academiageek/image/upload/v1655387250/Rectangle_4_waih2f.png"
                alt="Anillo"
              />
                <span style={{ borderRadius: "15px", fontSize: '2.5rem', position:'absolute', bottom:'5rem', right:'12rem'}}>
                  <BsPlayCircleFill style={{cursor:'pointer'}}/>
                  <span style={{fontSize:'14px', marginLeft:'1rem'}}>Play Video</span>
                </span>
            </div>
          </Col>
           

          <Col lg="1" style={{display:'flex', justifyContent:'center'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', alignSelf:'center', gap:'1rem'}}>
              <AiOutlineTwitter/>
              <FaVimeoV/>
              <AiFillLinkedin/>
            </div>
          </Col> 
        </Row>
      </Container>
    </>
  );
};

export default Header;
