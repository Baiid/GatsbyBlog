import React from 'react';
import {graphql} from "gatsby"
import Layout from "../components/layout"
import { BlogWrapper } from './blog.styled';



const BlogTemplate = (props) => {

    return(
    
        <Layout>
      
      <BlogWrapper>
            <h1>{props.data.contentfulBlog.title}</h1>
          <div>
              <div dangerouslySetInnerHTML={{__html:`${props.data.contentfulBlog.content.childMarkdownRemark.html}`}}>

              </div>
          </div>
     
      </BlogWrapper>
        </Layout>
 
    )
}
export default BlogTemplate



// Query for these in graphql. I used featured image as well just in case I will need it in the future
export const query = graphql`

query BlogTemplate($id:String!){

    contentfulBlog(id: {eq: $id}){
        title
        slug
        content {
          childMarkdownRemark {
            html
          }
        }
        featuredImage {
          id
          fluid(maxWidth: 1200,){
            ...GatsbyContentfulFluid
            src
          }
        }
      }
}`