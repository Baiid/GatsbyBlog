import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import { Wrapped} from '../components/style/readMore.styled'
import Layout from '../components/layout'


export default () => (
   <StaticQuery
     query={graphql` 
 query ReadMoreQuery {

  allContentfulBlog {
    edges {
      node {
        title
        slug
      }
    }
  }

 }
`}

render={data => (
  <Layout>
        <Wrapped>
            {data.allContentfulBlog.edges.map(edge => (
              
               <ul>
                 <li key={edge.node.id}  onClick={() => navigate(`/blog/${edge.node.slug}`)} >
                 
                 {edge.node.title}
                 </li>
               </ul>
  
            ))}
        </Wrapped>
        </Layout>
     )}


    
   />
 )