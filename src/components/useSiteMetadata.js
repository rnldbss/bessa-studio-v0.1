import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          keywords
          author
          image
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
