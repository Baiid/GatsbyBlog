import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero"
import Home from "../components/home/index"
import Footer from "../components/footer/footer"



const IndexPage = () => (

  <Layout>
    <Seo title="Home" />
<Hero />
    <Home />
  
  <Footer />
  </Layout>

)

export default IndexPage



