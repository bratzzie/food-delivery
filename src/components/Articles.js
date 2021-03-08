import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

const Articles = () => {
  const data = useStaticQuery(graphql`
    query ArticlesQuery {
      allArticlesJson {
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
  `)

  function getArticles(data) {
    const articlesArray = []
    data.allArticlesJson.edges.forEach((item, index) => {
      articlesArray.push(
        <Article key={index}>
          <ImgWrapper>
            <IconImg
              src={item.node.img.childImageSharp.fluid.src}
              alt={item.node.alt}
              fluid={item.node.img.childImageSharp.fluid}
            />
          </ImgWrapper>
          <Title>{item.node.name}</Title>
        </Article>
      )
    })

    return articlesArray
  }

  return (
    <Section>
      <Row>
        <h3>Articles</h3>
        <IconWrapper>
          <ArrowForwardIcon
            style={{ color: "var(--secondly)", fontSize: 20 }}
          />
        </IconWrapper>
      </Row>
      {getArticles(data)}
    </Section>
  )
}

export default Articles

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`

const IconImg = styled(Img)`
  transform: scale(0.7);
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding: 10px 30px;

  h3 {
    font-size: 35px;
    letter-spacing: 1px;
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  cursor: pointer;
`

const Article = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
`
const ImgWrapper = styled.div`
  background-color: #aef99d;
  border-radius: 30px;
  height: 80px !important;
  width: 80px !important;
  margin-right: 15px;
`

const Title = styled.h3`
  font-size: 18px;
`
