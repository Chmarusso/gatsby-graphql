import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { graphql } from 'gatsby'

const IndexPage = ({data}) => {

  console.log(data)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {data.strapi.menuitems.map(item =>
        <div class="flex flex-column mb3 w-50-ns">
          <div class="flex">
            <div class="w-50">{item.title}</div>
            <div class="w-50 tr">{item.price / 100},-</div>
          </div>
          <div class="w-100">
            {item.description}
          </div>
        </div>
      )}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  strapi {
    menuitems(where: {venue: 1}) {
      id, title, description, category, price, venue {
        id
      }
    }
  }
}
`
