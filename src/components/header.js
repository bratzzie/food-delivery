import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Header = () => {
    return (
        <Section>
            <Title>Welcome to <br/>YummyFood <span role="img" aria-label="smile">😋</span></Title>
            <SearchWrapper>
                <SearchIcon style={{color: 'var(--secondly)'}}/>
            </SearchWrapper>
            <CartWrapper>
                <ShoppingCartIcon style={{color: '#fff'}}/>
            </CartWrapper>
        </Section>
    )
}

export default Header

const Section = styled.div`
padding:20px;
padding-top: 60px;
display :flex;
align-items: baseline;
justify-content: space-between;`

const Title = styled.h1`
letter-spacing: 1px;
word-spacing: 1px;
font-size: 35px;
font-family: 'Source Sans Pro', sans-serif;
font-weight: bolder;
`

const SearchWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
width: 60px;
height: 60px;
border-radius: 20px;
cursor: pointer;
`

const CartWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #1D2733;
width: 60px;
height: 60px;
border-radius: 20px;
cursor: pointer;`