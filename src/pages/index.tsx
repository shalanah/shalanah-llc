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
    font-family: vampiro one, sans-serif;
  }
  h2 {
    font-size: 2.5rem;
  }
`;

// TODO: Make a layout style?
// TODO: SEO info

const AppArticle = styled.article`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: min(700px, 50vw) auto;
  margin-bottom: 1rem;
  gap: 1rem;
  h2 {
    margin-bottom: 0.5rem;
  }
  .img {
    aspect-ratio: 2;
    width: 100%;
    border-radius: 30px;
    background: blue;
  }
  .text {
    display: flex;
    flex-direction: column;
    > div {
      width: 100%;
      margin: auto;
    }
  }
  grid-template-areas: "img   text";
`;
const Section = styled.section``;
const Footer = styled.footer``;
const Header = styled.header``;

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

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <main
        style={{
          padding: "20px",
          maxWidth: "1400px",
          margin: "max(2rem, 4vh) auto",
        }}
      >
        <Header>
          <h1 style={{ fontSize: "2vw" }}>
            Shalanah<span style={{ fontSize: ".6em" }}> LLC</span>
          </h1>
        </Header>
        {apps.map(({ name, description, launched, url }) => {
          return (
            <AppArticle>
              <div className="img" style={{ gridArea: "img" }} />
              <div className="text" style={{ gridArea: "text" }}>
                <div>
                  <h2 translate="no">{name}</h2>
                  <p className="launched">Launched {launched}</p>
                  <p className="description">{description}</p>
                  <p className="link">
                    <a href={url}>Link</a>
                  </p>
                </div>
              </div>
            </AppArticle>
          );
        })}
        <Section>
          <h2>About</h2>
          <p>
            Shalanah Dawson created Shalanah LLC in 2021 after{" "}
            <span translate="no">Spiral Betty</span> became a viral hit among
            coloring book enthusiasts, Cricut/Silhouette cutting machine users,
            and as mobile iPhone lock screens.
          </p>
          <p>
            Shalanah continues to work on{" "}
            <span translate="no">Spiral Betty</span>,{" "}
            <span translate="no">Kind Cloud</span>, and other web app projects.
          </p>
          <p>For inquiries, please email ...</p>
        </Section>
        <Footer>Shalanah LLC 2022</Footer>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Shalanah LLC</title>;
