import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Welcome from "../components/welcome"
import Head from "../components/head"
import Form from "../components/contactform"
import styled from 'styled-components'
import HeadSection from '../components/headSection'
import NewestArticles from "../components/newestArticlesIndex"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding: 2em;
`

const IndexPage = () => {
  
  return (
    <div className="container">
      <Head title="Home" />
      <Welcome />
      <Header />
      <Main>
        <HeadSection />
        <NewestArticles />
      </Main>
      <Form />
      <Footer />
    </div>
  )
}

export default IndexPage
