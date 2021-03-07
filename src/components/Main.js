import React from 'react'
import styled from 'styled-components'

import OptionList from './OptionList'

const Main = () => {
    return (
        <Section>
            <OptionList />
        </Section>
    )
}

export default Main
const Section = styled.div`
display: flex;`