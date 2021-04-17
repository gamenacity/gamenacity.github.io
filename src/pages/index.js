import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Welcome from "../components/welcome"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <div className="container">
      <Head title="Home" />
      <Welcome />
      <Header />
      Witam cieplukto
      <Footer />
    </div>
  )
}

export default IndexPage
