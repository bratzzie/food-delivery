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
                {/* <LeftRow>
                    <Option />
                    <ItemsList />
                </LeftRow> */}

                <Row>
                    <RightNav />
                </Row>
            </Container>
        </Section>
    )
}

export default Main
const Section = styled.div`
display: flex;
width: 100%;
min-height: 100vh;
flex-direction: column;
background-color: rgba(255, 255, 255, 0.74);
border-radius: 60px;
flex: 0.9;
box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;
-webkit-box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;
-moz-box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;`

const Container = styled.div`
display: flex;
flex-direction: row;`
const LeftRow = styled.div`

flex: 0.5;`
const Row = styled.div`flex: 0.5;`