import React from 'react'
import Main from './Main'

import NabBar from './NabBar'

import styled from  'styled-components'
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
flex-direction: row;`