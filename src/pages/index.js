import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

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

  const meta = data?.site?.siteMetadata?.title;
  console.log(meta);
  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
};

export default IndexPage;
