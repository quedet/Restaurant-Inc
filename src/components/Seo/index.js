import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

export default function Seo ({ title, lang="en"}) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const defaultTitle = data.site.siteMetadata.title

    return (
        <Helmet 
            htmlAttributes={{lang: lang}} 
            title={title}
            titleTemplate={`%s | ${defaultTitle}`}
        ></Helmet>
    )
}