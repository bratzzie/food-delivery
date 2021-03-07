import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import ItemsList from './ItemsList'
import Option from './Option'

const Main = () => {
    return (
        <Section>
            <Header />
            <Option />
            <ItemsList />
        </Section>
    )
}

export default Main
const Section = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(255, 255, 255, 0.74);
border-radius: 60px;
flex: 0.7;
box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;
-webkit-box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;
-moz-box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;`