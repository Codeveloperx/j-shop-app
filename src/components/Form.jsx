import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const FormComponent = () => {
  return (
    <div style={{marginTop:'10rem', marginBottom:'10rem'}}>
    <Form>
      <Row>
        <div style={{marginBottom:'2rem'}}><h2 style={{textAlign:'center'}}>Join J-Shop’s Family</h2></div>
        <Col style={{display:'flex', justifyContent:'center', gap:'.8rem'}}>
        <div style={{width:'20%'}}>
          <Form.Control placeholder="First name" style={{border:'none', borderRadius:'0', padding:'.6rem'}} />
          </div>
          <button style={{padding:'0 25px', border:'none', background:'#3d3d3d', color:'#fff'}}>JOIN FAMILY</button>
        </Col>
      </Row>
    </Form>
    </div>
  )
}

export default FormComponent