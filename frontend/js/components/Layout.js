import React, { PropTypes, Component } from 'react'

import Header from './ecosystems/Header'

class Layout extends Component {

  render() {
    return (
      <html>

        <head>
          <title>Burrow</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/dist/styles/style.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />

        </head>

        <body>

          <section className="app-container">

            <div id="app-mount"
              dangerouslySetInnerHTML={{ __html: this.props.children }}>
            </div>

            <script id="app-state"
              dangerouslySetInnerHTML={{ __html: this.props.state }}>
            </script>
          </section>

        </body>

      </html>
    )
  }

}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
