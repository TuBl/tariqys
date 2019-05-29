import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

import Header from './Header'

class Template extends React.Component {
  render() {
    const { children } = this.props
    const siteTitle = 'Tariq Yousef'
    const siteDescription = 'Full Stack Developer'

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="Tariq Yousef" content={siteDescription} />
        </Helmet>
        <Header />
        {children}
      </div>
    )
  }
}

export default Template
