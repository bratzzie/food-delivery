import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"

const List = () => {

    
    const data = useStaticQuery(graphql `
    query ItemsQuery {
        allItemsJson {
          edges {
            node {
              alt
              desc
              price
              name
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      `);


      
      function getItems(data){
        const itemsArray = [];
        data.allItemsJson.edges.forEach( (item, index)=> {
            itemsArray.push(
                <ItemCard key={index}>
                    <ItemUpper>
                        <ItemImg src={item.node.img.childImageSharp.fluid.src}
                        alt={item.node.alt}
                        fluid={item.node.img.childImageSharp.fluid} />      
                    </ItemUpper>
                    <ItemBottom>
                         <ItemTitle>
                               {item.node.name}
                    </ItemTitle>
                    <ItemDesc>
                        {item.node.desc}
                    </ItemDesc>
                    <Row>
                        <ItemPrice>
                            ${item.node.price}
                        </ItemPrice>
                        <Button><p>+</p></Button>
                    </Row>
                    </ItemBottom>
                   
                </ItemCard>
            )
        });
    
        return itemsArray;
    }

    
    return (
        <ListSection>{getItems(data)}
    </ListSection>
    )
}


export default List
const ListSection = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-top: 60px;
`
const ItemCard = styled.div`

width: 250px;
height: auto;
background-color: transparent;
border: 2px solid var(--secondly);
border-radius: 45px;
margin: 30px 15px;
display: flex;
flex-direction: column;
justify-content: center;
cursor: pointer;

`

const ItemUpper = styled.div`
margin-top: -70px;`

const ItemImg = styled(Img)`
display: block;
height: 100%;
max-width: 70%;
position: relative;
margin-right: auto;
margin-left: auto;`

const ItemBottom = styled.div`
padding: 0 25px;
`

const ItemTitle = styled.h3`
font-size: 25px;`

const ItemDesc = styled.p`
color: var(--secondly);
font-size: 15px;
`

const ItemPrice = styled.h2`
text-align: left;
font-size: 25px;`

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: baseline;
transform: translateY(-20%);`

const Button = styled.div`
background-color: #1D2733;
border-radius: 60px;
width: 40px;
height: 40px;
display: flex;

p{
    color: #fff;
    margin: auto;
    font-size: 20px;
}`