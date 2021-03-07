import React from 'react'
import styled from 'styled-components'

const NavOption = ({Icon, title, active}) => {
    return (
        <Wrapper active={active}>
            <LeftWrapper active={active}>
                <Icon  active={active} style={{color:`${active ? "#fff" : "var(--primary)"}`}}/>
            </LeftWrapper>
            <RightWrapper active={active}>
                <h4>{title}</h4>
            </RightWrapper>
        </Wrapper>
    )
}

export default NavOption
const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: baseline;
align-items: center;
padding: 10px;
cursor: pointer;
background-color: ${(props) => (props.active ? "#e37182" : "transparent")};
border-radius: 25px;

 `

const LeftWrapper = styled.div`
background-color: ${(props) => (props.active ? "#ab4151" : "#fff")};
border-radius: 20px;
display: flex;
width: 60px;
height: 60px;
justify-content: center;
align-items: center;
margin-right: 40px;`
const RightWrapper = styled.div`

justify-content: center;
align-items: center;
display: flex;
h4{
    margin-top: auto;
    margin-bottom: auto;
    font-weight: 700;
    color: var(--secondly);
    font-size: 15px;
    color: ${(props) => (props.active ? "#fff" : 'var(--secondly)')};

}`