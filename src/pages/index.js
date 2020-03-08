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

const Home = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/S4UNcpWuQzM" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/1Pk83NvyMsg" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/HRPGFNPm0v4" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/ZdlPuclC2oI" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/EuuuIXBqReo" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/ZaJC-TwH0ec" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/yymYmzZPJe4" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/PCJsGVNucgk" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/9YnzeZvKVF4" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/pZYrmwxI0rU" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
           <div className="flexbox-stretch">
          <Link to="/page2">
        <p>Newer Videos &gt;&gt;</p>
      </Link>
      </div>
        </Hero>
      </Layout>
    </>
  );
};

export default Home;
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
