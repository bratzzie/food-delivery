import React from 'react'
import styled from 'styled-components'
import TuneIcon from '@material-ui/icons/Tune'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import List from './List'
const ItemsList = () => {
    return (
        <Section>
            <Row>
                <Column>
                    <h1>All items</h1>
                    <TuneIcon style={{color: 'var(--secondly)', fontSize: 35, transform: 'translateY(5px)'}} />
                </Column>

                <Column>
                    <h4>View all</h4>
                    <IconWrapper>
                        <ArrowForwardIcon style={{color: 'var(--secondly)', fontSize: 20}}/>
                    </IconWrapper>
                </Column>
            </Row>
            <List />
        </Section>
    )
}

export default ItemsList
const Section = styled.section`
display: flex;
flex-direction: column;
margin: 60px 0px;`
const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;`

const Column = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: baseline;
h1{
    font-size: 30px;
    padding-right: 35px;
}
h4{
    padding-right: 25px;
}
`
const IconWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
width: 50px;
height: 50px;
border-radius: 20px;`