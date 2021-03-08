import React from "react"
import styled from "styled-components"

import Articles from "./Articles"
import Sale from "./Sale"

const RightNav = () => {
  return (
    <Section>
      <Sale />
      <Articles />
    </Section>
  )
}

export default RightNav
const Section = styled.section`
  flex-direction: column;
  transform: scale(0.8);
`
