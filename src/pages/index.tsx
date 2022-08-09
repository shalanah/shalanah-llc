import * as React from "react";
import type { HeadFC } from "gatsby";
import { Script } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled, { createGlobalStyle } from "styled-components";

// Using Gatsby to allow easy routing and possible blog in the future

const BP = "max-width: 900px"; // Breakpoint

const GlobalStyles = createGlobalStyle`
  body, html, #___gatsby {
    height: 100%;
    width: 100%;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a, .link {
    color: inherit;
    position: relative;
    transition: .15s;
    text-decoration: none;
    :after {
      content: "";
      transition: .15s;
      position: absolute;
      background-color: currentColor;
      width: 100%;
      bottom: -.025em;
      left: 0;
      height: 2px;
    }
    :hover:after{
      bottom: calc(-.025em - 5px);
      height: 5px;
    }
  }
  body {
    line-height: 1;
    font-size: 1.2rem;
    background: #222;
    color: #fff;
    font-family: Charis SIL, sans-serif;
    @media (${BP}) {
      font-size: 1.1rem;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    margin-left: .2em;
    font-family: Homemade Apple, sans-serif;
    @media (${BP}) {
      margin-left: .1em;
    }
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: .25em;
    @media (${BP}) {
      margin-top: .5em;
      font-size: 2rem;
    }
  }
  p {
    line-height: 1.4;
    margin-bottom: 1rem;
    :last-child { margin-bottom: 0; }
  }
`;
const Section = styled.section`
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  @media (${BP}) {
    display: block;
  }
`;
const ImgContainer = styled.div`
  width: min(700px, 50vw);
  .img {
    aspect-ratio: 2;
    width: 100%;
    border-radius: 30px;
    box-shadow: -5px 5px 0 0px #2f2f2f;
  }
  @media (${BP}) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;
const TextContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  width: 100%;
  > div {
    width: 100%;
    margin: auto;
  }
  @media (${BP}) {
    margin-bottom: 3rem;
  }
`;
const Main = styled.main`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  @media (${BP}) {
    padding: 1.5rem;
  }
`;

// TODO: Make a layout style?
// TODO: SEO info
// TODO: Icons

const staticImageProps = {
  aspectRatio: 2,
  className: "img",
};
const apps = [
  {
    name: "Spiral Betty",
    launched: "2018",
    description: "Spiralize your photos and download as jpgs, pngs, or svgs.",
    url: "spiralbetty.com",
    playstore: "",
    img: (
      <StaticImage
        {...staticImageProps}
        src="../images/spiral-betty-shalanah-llc.png"
        alt="A 1950s woman as a 1 line spiral"
      />
    ),
  },
  {
    name: "Kind Cloud",
    launched: "2020",
    description: "A sound-free loving-kindness meditation app",
    url: "kindcloud.app",
    playstore: "",
    img: (
      <StaticImage
        {...staticImageProps}
        src="../images/kind-cloud-app-shalanah-llc.png"
        alt="A happy cloud"
      />
    ),
  },
];

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        {apps.map(({ name, description, url, img }) => {
          return (
            <Section>
              <ImgContainer>{img}</ImgContainer>
              <TextContainer>
                <div>
                  <h2 translate="no">{name}</h2>
                  {/* <p className="launched">Launched {launched}</p> */}
                  <p>{description}</p>
                  <p>
                    <a href={`https://${url}`}>{url} →</a>
                  </p>
                </div>
              </TextContainer>
            </Section>
          );
        })}
        <Section>
          <ImgContainer>
            <StaticImage
              {...staticImageProps}
              src="../images/PXL_20220807_202743452.jpg"
              alt="Up close view of compiled html for spiralbetty.com"
            />
          </ImgContainer>
          <TextContainer>
            <div>
              <h2>About</h2>
              <p>
                Shalanah Dawson created Shalanah LLC in 2021 after{" "}
                <span translate="no">Spiral Betty</span> became a viral hit
                amongst coloring book enthusiasts, Cricut/Silhouette cutting
                machine users, and mobile iPhone users for lock screens.
              </p>
              <p>
                Shalanah continues to work on{" "}
                <span translate="no">Spiral Betty</span>,{" "}
                <span translate="no">Kind Cloud</span>, and other web app
                projects.
              </p>
              <p>
                For inquiries email{" "}
                <span className="link" style={{ pointerEvents: "none" }}>
                  {/* Trying to have avoid spam by obscuring email a little bit */}
                  <span>info</span>&#64;<span>shalanah.llc</span>
                </span>{" "}
                or follow on{" "}
                <a href="https://www.linkedin.com/company/80629889">Linkedin</a>
              </p>
            </div>
          </TextContainer>
        </Section>
        <footer style={{ padding: "2rem 0 0" }}>Shalanah LLC ©2022</footer>
        {/* TODO: Add to a layout component if mult pages */}
        <Script>{`var sc_project=12781896;var sc_invisible=1;var sc_security="0776efae";`}</Script>
        <Script src="https://www.statcounter.com/counter/counter.js" async />
      </Main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Shalanah LLC</title>;
