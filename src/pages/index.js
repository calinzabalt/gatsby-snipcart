import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <button
      className="snipcart-add-item"
      data-item-id="ebook"
      data-item-file-guid="7483a3ac-bee3-45d0-879d-ae5d12d5e4aa"
      data-item-price="1.99"
      data-item-url="https://laughing-euclid-20b960.netlify.com/#/"
      data-item-description="Capsuni Bio cultivati in natura afara fara conservanti sau coloranti"
      data-item-image="../images/strawberry-2960533_640.jpg"
      data-item-name="Capsuni!!!"
    >
      Add to cart
    </button>
  </Layout>
)

export default IndexPage
