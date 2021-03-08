import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Sale = () => {
  return (
    <Wrapper>
      <Row>
        <StaticImage
          src="../images/hotdog.png"
          alt="Hot-Dog"
          placeholder="blurred"
          layout="fixed"
          width={170}
          height={170}
          style={{
            marginLeft: 200,
            marginTop: -70,
          }}
        />
        <h1>
          -50% <b>off</b>
        </h1>
      </Row>
      <p>the full price of burgers</p>
    </Wrapper>
  )
}

export default Sale
const Wrapper = styled.div`
  width: 400px;
  height: 220px;
  display: flex;
  flex-direction: column;
  background-color: #9095c4;
  border-radius: 25px;
  padding: 10px 30px;

  h1 {
    color: #fff;
    transform: translateY(-20px);
  }
  p {
    color: #fff;
    transform: translateY(-30px);
    word-spacing: 1px;
    letter-spacing: 1px;
  }
`
const Row = styled.div`
  flex-direction: row;
  width: 100%;
`
