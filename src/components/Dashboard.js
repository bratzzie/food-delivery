import React from 'react'
import Main from './Main'

import NabBar from './NabBar'

import styled from  'styled-components'
import RightNav from './RightNav'
const Dashboard = () => {
    return (
        <Dash>
            <NabBar />
            <Main />
            <RightNav />
        </Dash>
    )
}

export default Dashboard
const Dash = styled.section`
display: flex;
flex-direction: row;`