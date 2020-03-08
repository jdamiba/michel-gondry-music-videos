import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

import { BREAKPOINT } from '../utils/constants';

import {
  HeaderLogo,
  HeadingXL,
  Layout,
  SEO,
} from '../components';

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`;

const TextHome = styled.p`
  color: var(--dark-color-light);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }
`;

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`;

const Page6 = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/RbVf8l9wzls" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/63vqob-MljQ" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/FQ1F29btH4c" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/K4dx42YzQCE" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/3si1JKuoRek" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/I7UvbwCjXUk" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/KL_dI3GtB4o" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/4N3N1MlvVc4" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/4OWmKjpD5Pg" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/wN3rGIUx2ew" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox-stretch">
          <Link to="/page5">
        <p>&lt;&lt; Older Videos</p>
      </Link>
          <Link to="/page7">
        <p>Newer Videos &gt;&gt;</p>
      </Link>
          </div>
          
        </Hero>
      </Layout>
    </>
  );
};

export default Page6;
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
