import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Seo from "../components/Seo";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetSiteData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};
  console.log(meta);
  return (
    <>
      <Seo />
      <main>
        <h1>Hello</h1>
      </main>
    </>
  );
};

export default IndexPage;
