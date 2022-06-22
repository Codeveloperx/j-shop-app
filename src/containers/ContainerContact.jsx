import Contact from 'components/Contact'
import React from 'react'

const ContainerContact = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', gap:'2rem', marginBottom:'5rem'}}>
      <Contact imagen="https://res.cloudinary.com/academiageek/image/upload/v1655387250/J-Shop-App/Rectangle_349_tyn38e.png"/>
      <Contact imagen="https://res.cloudinary.com/academiageek/image/upload/v1655387250/Rectangle_348_go0ila.png"/>
      <Contact imagen="https://res.cloudinary.com/academiageek/image/upload/v1655387250/Rectangle_347_qktqjm.png"/>
    </div>
  )
}

export default ContainerContact