import * as React from "react";
//import { Link, useStaticQuery, graphql } from "gatsby";
import Seo from "./Seo.js";

const Layout = ({
  children,
  title = false,
  description = false,
  path = false,
}) => {
  /*const data = useStaticQuery(graphql`
    query GetSiteData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `); */

  //const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <nav></nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
