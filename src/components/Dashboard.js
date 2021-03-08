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
flex-direction: row;`