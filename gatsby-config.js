module.exports = {
  siteMetadata: {
    title: 'Torah Ufilla',
    author: 'Simcha Greeenbaum',
    description: 'A Shul website with credit to  HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Torah Ufilla',
        short_name: 'Torah Ufilla',
        start_url: '/',
        background_color: '##42c2f5',
        theme_color: '#42c2f5',
        display: 'minimal-ui',
        icon: 'src/assets/images/shul.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
