import * as React from "react";
import type { HeadFC } from "gatsby";
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
  body {
    font-size: 1.2rem;
    background: #222;
    color: #fff;
    font-family: sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-left: .2em;
    font-family: Homemade Apple, sans-serif;
    @media (max-width: 900px) {
      margin-left: .3em;
    }
  }
  h1 {font-size: 2.5rem;}
  h2 {
    font-size: 2.5rem;
    margin-bottom: .5rem;
  }
  p {
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.25rem;
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
    background: blue;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;
const Second = styled.div`
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

const H1 = styled.h1`
  margin-top: max(2rem, 4vh);
  @media (max-width: 900px) {
    margin-top: 0px;
  }
`;

// TODO: Make a layout style?
// TODO: SEO info

const apps = [
  {
    name: "Spiral Betty",
    launched: "2018",
    description: "Spiralize your photos",
    url: "https://spiralbetty.com",
    playstore: "",
  },
  {
    name: "Kind Cloud",
    launched: "2020",
    description: "A sound-free loving-kindness meditation app",
    url: "https://kindcloud.app",
    playstore: "",
  },
];

const first = "info";
const last = "shalanah.llc";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <main
        style={{
          padding: "2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <H1>
          Shalanah
          <span style={{ fontSize: ".6em", fontFamily: "sans-serif" }}>
            {" "}
            LLC
          </span>
        </H1>
        {apps.map(({ name, description, launched, url }) => {
          return (
            <Container as="article">
              <First>
                <div className="img" />
              </First>
              <Second>
                <div>
                  <h2 translate="no">{name}</h2>
                  <p className="launched">Launched {launched}</p>
                  <p className="description">{description}</p>
                  <p className="link">
                    <a href={url}>Link</a>
                  </p>
                </div>
              </Second>
            </Container>
          );
        })}
        <Container as="section">
          <First>
            <div className="img" />
          </First>
          <Second>
            <div>
              <h2>About</h2>
              <p>
                Shalanah Dawson created Shalanah LLC in 2021 after{" "}
                <span translate="no">Spiral Betty</span> became a viral hit
                among coloring book enthusiasts, Cricut/Silhouette cutting
                machine users, and as mobile iPhone lock screens.
              </p>
              <p>
                Shalanah continues to work on{" "}
                <span translate="no">Spiral Betty</span>,{" "}
                <span translate="no">Kind Cloud</span>, and other web app
                projects.
              </p>
              <p>
                For inquiries email{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: ".2em",
                  }}
                >
                  {first}&#64;{last}
                </span>
              </p>
            </div>
          </Second>
        </Container>
        <footer style={{ padding: "2rem 0 0" }}>Shalanah LLC ©2022</footer>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Shalanah LLC</title>;
