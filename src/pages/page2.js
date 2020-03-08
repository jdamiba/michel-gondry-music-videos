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

const Page2 = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/2kYgqYQtKCs" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/W71IdKodwAE" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/LMYX6_516tY" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/1ftrhUBG9dg" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/csxBQLG4-3Q" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/mRTRaDN8PVo" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/QVgefL9LMew" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/VwhgMGhT-mQ" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/bj8ZdBdKsfo" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/7ceNf9qJjgc" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox-stretch">
          <Link to="/">
        <p>&lt;&lt; Older Videos</p>
      </Link>
          <Link to="/page3">
        <p>Newer Videos &gt;&gt;</p>
      </Link>
      </div>
        </Hero>
      </Layout>
    </>
  );
};

export default Page2;
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
