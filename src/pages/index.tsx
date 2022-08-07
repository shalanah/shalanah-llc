import * as React from "react";
import type { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled, { createGlobalStyle } from "styled-components";

// Using Gatsby - although it is overkill for now - to allow easy routing and possible blog in the future

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
    @media (max-width: 900px) {
      font-size: 1.1rem;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    margin-left: .2em;
    font-family: Homemade Apple, sans-serif;
    @media (max-width: 900px) {
      margin-left: .1em;
    }
  }
  h1 {font-size: 2.5rem;}
  h2 {
    font-size: 2.5rem;
    margin-bottom: .25em;
    @media (max-width: 900px) {
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

const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  @media (max-width: 900px) {
    display: block;
  }
`;
const First = styled.div`
  width: min(700px, 50vw);
  .img {
    aspect-ratio: 2;
    width: 100%;
    border-radius: 30px;
    box-shadow: -5px 5px 0 0px #2f2f2f;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;
const Second = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  width: 100%;
  > div {
    width: 100%;
    margin: auto;
  }
  @media (max-width: 900px) {
    margin-bottom: 3rem;
  }
`;

const Main = styled.main`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 900px) {
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
    description: "Spiralize your photo and download as jpg, png, or svg.",
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

const first = "info";
const last = "shalanah.llc";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        {apps.map(({ name, description, url, img }) => {
          return (
            <Container as="article">
              <First>{img}</First>
              <Second>
                <div>
                  <h2 translate="no">{name}</h2>
                  {/* <p className="launched">Launched {launched}</p> */}
                  <p>{description}</p>
                  <p>
                    <a href={`https://${url}`}>{url} →</a>
                  </p>
                </div>
              </Second>
            </Container>
          );
        })}
        <Container as="section">
          <First>
            <StaticImage
              {...staticImageProps}
              src="../images/PXL_20220807_202743452.jpg"
              alt="Up close view of compiled html for spiralbetty.com"
            />
          </First>
          <Second>
            <div>
              <h2>About</h2>
              <p>
                Shalanah Dawson created Shalanah LLC in 2021 after{" "}
                <span translate="no">Spiral Betty</span> became a viral hit
                among coloring book enthusiasts, Cricut/Silhouette cutting
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
                  {first}&#64;{last}
                </span>{" "}
                or follow on{" "}
                <a href="https://www.linkedin.com/company/80629889">Linkedin</a>
              </p>
            </div>
          </Second>
        </Container>
        <footer style={{ padding: "2rem 0 0" }}>Shalanah LLC ©2022</footer>
      </Main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Shalanah LLC</title>;
