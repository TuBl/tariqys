module.exports = {
  siteMetadata: {
    title: 'Tariq Elmughrabi',
    author: 'Tariq Elmughrabi',
    description: 'Tariq Elmughrabi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tariq Elmughrabi',
        short_name: 'Tariq',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
