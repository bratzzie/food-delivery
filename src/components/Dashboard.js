import React from 'react'
import styled from  'styled-components'

import Main from './Main'
import NabBar from './NabBar'

const Dashboard = () => {
    return (
        <Dash>
            <NabBar />
            <Main />
        </Dash>
    )
}

export default Dashboard
const Dash = styled.section`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;

background-color: rgba(255, 255, 255, 0.26);
border-radius: 40px;
box-shadow: 10px 10px 15px -6px rgba(255,255,255,0.68) inset;
-webkit-box-shadow: 10px 10px 15px -6px rgba(255,255,255,0.68) inset;
-moz-box-shadow: 10px 10px 15px -6px rgba(255,255,255,0.68) inset;
transform: scale(0.99);`