import React, { PropTypes, Component } from 'react'

class Layout extends Component {

  render() {
    return (
      <html>

        <head>
          <title>Burrow</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <body>

        </body>

      </html>
    )
  }

}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
