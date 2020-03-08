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

const Page7 = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/y6LuwU3LPLE" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/elVF7oG0pQs" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/mX_L6TKxxdE" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/DZUs5k3yh18" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/DGCwUoKWcxs" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/4NEQyJm87LY" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/4P5xSntVWQE" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/H-9DaehwAGI" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/M8QgeESiPZA" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/C9D0Kr0yHng" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/2PNzytx9EV0" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/riEBi8BJ9Tw" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/LO2RPDZkY88" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/7Osqnf_0jkk" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/rSYwtllbweY" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/CfCxItPlidc" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Link to="/page6">
        <p>&lt;&lt; Older Videos</p>
      </Link>
        </Hero>
      </Layout>
    </>
  );
};

export default Page7;
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
