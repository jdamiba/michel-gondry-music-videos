import React from 'react';
import { graphql } from 'gatsby';

import {
  HeaderBack,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About Michel Gondry</HeadingXL>
        <div className="flexbox">
          <img src="https://m.media-amazon.com/images/M/MV5BMjEwNDg3MDA1MF5BMl5BanBnXkFtZTcwMDAxMzc1MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg"/>
        </div>
        
        <TextBody>
        Michel Gondry (French: [miʃɛl ɡɔ̃dʁi]; born 8 May 1963) is a French director, screenwriter, and producer noted for his inventive visual style and distinctive manipulation of mise en scène. He won an Academy Award for Best Original Screenplay as one of the writers of the 2004 film <a href="https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind">Eternal Sunshine of the Spotless Mind</a>, a film he also directed.
          <br />
          <br />
          His other films include the surrealistic science fantasy comedy <a href="https://en.wikipedia.org/wiki/The_Science_of_Sleep">The Science of Sleep</a> (2006), the comedy <a href="https://en.wikipedia.org/wiki/Be_Kind_Rewind">Be Kind Rewind</a> (2008), the superhero action comedy <a href="https://en.wikipedia.org/wiki/The_Green_Hornet_(2011_film)">The Green Hornet</a> (2011), the drama <a href="https://en.wikipedia.org/wiki/The_We_and_the_I">The We and the I</a> (2012), and the romantic science fantasy tragedy <a href="https://en.wikipedia.org/wiki/Mood_Indigo_(film)">Mood Indigo</a> (2013).
          <br />
          <br />
          He is well known for his music video collaborations with Daft Punk, Donald Fagen, Radiohead, Björk, Beck, The Chemical Brothers, Kylie Minogue and The White Stripes.
          <br />
          <br />
          Citation: Wikipedia contributors. <a href="https://en.wikipedia.org/wiki/Michel_Gondry">"Michel Gondry."</a> Wikipedia, The Free Encyclopedia. Wikipedia, The Free Encyclopedia, 2 Mar. 2020. Web. 7 Mar. 2020.
        </TextBody>
      </Layout>
    </>
  );
};

export default About;
export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "assets/images/RandomPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;