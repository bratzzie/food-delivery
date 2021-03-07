import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const Avatar = () => {
    return (
        <Wrapper>
            <AvatarWrapper>
            <StaticImage
      src="../images/boy.jpg"
      alt="Avatar"
      placeholder="blurred"
      layout="fixed"
      width={60}
      height={60}
      style={{borderRadius: 20}}
    />
            </AvatarWrapper>
            <h3>Kim Jommy</h3>
        </Wrapper>
    )
}

export default Avatar
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h3{
    font-weight: 700;
    text-align: center;
    font-size: 20px;
}`
const AvatarWrapper = styled.div`
background-color: #fff;
border-radius: 25px;
width: 70px;
height: 70px;
justify-content: center;
align-items: center;
display: flex;
margin: 10px;`