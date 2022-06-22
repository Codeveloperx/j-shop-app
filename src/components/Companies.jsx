import React from 'react'
import styled from 'styled-components'

const Li =  styled.li`
list-style: none;`

const Companies = () => {
  return (
    <div style={{textAlign:'center', marginTop:'5rem'}}>
        <h2>Trusted by leading companies</h2>

        <ul style={{display:'flex', gap:'3rem', justifyContent:'center', marginTop:'2rem'}}>
            <Li>Planday</Li>
            <Li>Umbraco</Li>
            <Li>Pearlfisher</Li>
            <Li>Brightpearl</Li>
            <Li>Planday</Li>
        </ul>
    </div>
  )
}

export default Companies