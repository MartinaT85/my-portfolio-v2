import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = (props) => {
  console.log(props);
  const data = useStaticQuery(graphql`
    query SiteSeo {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  // const defaults = data?.site?.siteMatadata;
  const title = props.title;
  const description = props.description;
  // const url = new URL(props.path || "/");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* <link rel="canonical" href={url} /> */}

      {/* <meta property="og:url" content={url} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
