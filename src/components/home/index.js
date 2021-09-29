import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import { WrapperHome, CardHome, Title } from './home.styled'

export default () => (
   <StaticQuery
     query={graphql` 
 query HomeQuery {
   allContentfulBlog(
       limit: 9
       sort: { fields: [createdAt], order: DESC }
       filter: {
       node_locale: {eq: "en-US",}
       home: {eq: true}
     }
     ) {
     edges {
       node {
         id
         slug
         title
         category {
            
             id
         }
         featuredImage {
           fluid(maxWidth: 1200, quality: 85) {
             src
             ...GatsbyContentfulFluid
           }
         }
       }
     }
   }
 }
`}
     render={data => (
        <WrapperHome>
            {data.allContentfulBlog.edges.map(edge => (
                <CardHome key={edge.node.id} 

                // Responsive image - fluid 
                style={{
                    backgroundImage: `linear-gradient(
                    to bottom, 
                    rgba(10,10,10,0) 0%,
                    rgba(10,10,10,0) 50%,
                    rgba(10,10,10,0.4) 100%),
                
                    url(${edge.node.featuredImage.fluid.src})`
                }}
                // Going to a certain blog after click 
            onClick={() => navigate(`/blog/${edge.node.slug}`)} >
           
            <Title>{edge.node.title}</Title>
            </CardHome>
            ))}
        </WrapperHome>
     )}
   />
 )