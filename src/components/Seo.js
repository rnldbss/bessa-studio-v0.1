import React from "react";
import { useSiteMetadata } from "./useSiteMetadata";

export const Seo = ({ title, description, pathname, children, slug }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    author,
    keywords,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    siteUrl: siteUrl,
    author: author,
    keywords: keywords,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      <meta name="image" content={`${seo.siteUrl}/${image}`} />
      <link rel="canonical" href={`${seo.siteUrl}`} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={`${seo.siteUrl}/${image}`} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={`${seo.siteUrl}`} />
      <meta name="og:site_name" content={seo.title} />

      {children}
    </>
  );
};
