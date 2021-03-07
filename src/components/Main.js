import React from 'react'
import styled from 'styled-components'
import Header from './Header'

import Option from './Option'

const Main = () => {
    return (
        <Section>
            <Header />
            <Option />
        </Section>
    )
}

export default Main
const Section = styled.div`
display: flex;
flex-direction: column;`