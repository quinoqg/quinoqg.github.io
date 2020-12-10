import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import NewsletterForm from '../components/NewsletterForm'
import GitHubButton from 'react-github-btn'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import speaking from '../../data/speaking'
import podcasts from '../../data/podcasts'

export default class Index extends Component {
  render() {
    const latestPostEdges = this.props.data.latest.edges
    const popularPostEdges = this.props.data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle}, PhD - University of Oxford`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <h1>Hi, I'm Gustavo</h1>
            <div className="lead-grid">
              <p>
                I am a postdoctoral researcher at the {' '}<a href="http://www.ox.ac.uk/">University of Oxford{' '}</a>.
              </p>
              <p>
                I do {''}<a href='../research'>research{''}</a> and {''}<a href='../teaching'>teaching{''}</a> at the {' '}
                <a href="http://eng.ox.ac.uk/" target="blank">Engineering Science Department</a>. I study the strain rate dependent behaviour of various materials: polymers, composites, foams, and granular materials.
              </p>
            </div>
            <div className="social-buttons">
              <div>
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/quinoqg"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  Follow @quinoqg
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
        

          <section className="section">
            <h2>Things I do</h2>
            <ProjectListing projects={projects} />
          </section>

          <section className="section">
            <h2>Soon speaking at</h2>
            <SimpleListing simple data={speaking} />
          </section>
          
          <section className="section">
            <h2>Latest in the blog</h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>
          
          
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
