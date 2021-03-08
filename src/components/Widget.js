import React from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { StaticImage } from 'gatsby-plugin-image';

const Widget = () => {
    return (
        <Wrapper>
            <UpperContainer>
                <StaticImage
                src="../images/order.png"
                alt="Order"
                placeholder="blurred"
                layout="fixed"
                width={150}
                height={150}
                style={{borderRadius: 20}}
                />
            </UpperContainer>

            <BottomContainer>
                  <h1>Faster delivery!</h1>
                <Row>
                    <h4>Learn more</h4>
                    <ArrowForwardIcon
                    style={{cursor: 'pointer'}} />
                </Row>
            </BottomContainer>
        </Wrapper>
    )
}

export default Widget

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
border-radius: 30px;
width: 200px;
height: 200px;
padding: 25px;
margin-top: 80px;

`
const UpperContainer = styled.div`
margin-top: -120px;`
const BottomContainer = styled.div`
h1{
    font-size: 25px;
}
padding-top: 20px;`
const Row = styled.div`
flex-direction: row;
display: flex;
transform: translateY(-10px);
h4{
    padding-right: 30%;
    font-size: 15px;
}
`