import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"


const Option = () => {


    const data = useStaticQuery(graphql `
    query OptionsQuery {
        allOptionsJson {
          edges {
            node {
              alt
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

      
function getOptions(data){
    const optionsArray = [];
    data.allOptionsJson.edges.forEach( (item, index)=> {
        optionsArray.push(
            <OptionCard key={index}>
                <OptionUpper>
                    <OptionImg src={item.node.img.childImageSharp.fluid.src}
                    alt={item.node.alt}
                    fluid={item.node.img.childImageSharp.fluid} />      
                </OptionUpper>
                <OptionTitle>
                           {item.node.name}
                </OptionTitle>
            </OptionCard>
        )
    });

    return optionsArray;
}

    return (
        <OptionList>{getOptions(data)}
    </OptionList>
    )
}

export default Option
const OptionList = styled.div`
display: flex;
flex-direction: row;
`
const OptionCard = styled.div`
width: 130px;
height: 200px;
background-color: #D7E5E3;
border-radius: 65px;
margin: 10px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
cursor: pointer;
`

const OptionUpper = styled.div``
const OptionImg = styled(Img)`
display: block;
height: 100%;
max-width: 70%;
position: relative;
margin-right: auto;
margin-left: auto;
`
const OptionTitle = styled.h2`

text-align: center;
color: var(--secondly);
font-size: 20px;`