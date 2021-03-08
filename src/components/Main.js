import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import ItemsList from './ItemsList'
import Option from './Option'
import RightNav from './RightNav'

const Main = () => {
    return (
        <Section>
            <Header />
            <Container>
                <LeftRow>
                    <Option />
                    <ItemsList />
                </LeftRow>

                <Row>
                    <RightNav />
                </Row>
            </Container>
        </Section>
    )
}

export default Main
const Section = styled.div`
padding: 0px 40px;
display: flex;
width: 100%;
min-height: 100vh;
flex-direction: column;
background-color: rgba(255, 255, 255, 0.74);
border-radius: 30px;
flex: 0.9;
box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;
-webkit-box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;
-moz-box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;
position: relative;
transform: scale(0.95);
`

const Container = styled.div`
display: flex;
flex-direction: row;
flex: 1;align-items: flex-start;
justify-content: flex-start;`
const LeftRow = styled.div`
flex: 0.6;
`
const Row = styled.div`
margin-left: 70px;
flex: 0.4;`