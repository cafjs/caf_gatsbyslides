module.exports = {
    pathPrefix: "/caf_gatsbyslides",
    siteMetadata: {
        title: `Cafj.s Slides`,
        description: `Description of the Caf.js Framework.`,
        author: `Antonio Lain`
    },
    plugins: [
        {
            resolve: 'gatsby-theme-mdx-deck',
            options: {
                basePath: ''
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svgs/
                }
            }
        },
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`
    ]
};
