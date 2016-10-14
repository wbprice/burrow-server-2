import React, { PropTypes, Component } from 'react'

class Layout extends Component {

  render() {
    return (
      <html>

        <head>
          <title>Burrow</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/dist/base.css" />
        </head>

        <body>

          <div id="app-mount"
            dangerouslySetInnerHTML={{ __html: this.props.children }}>
          </div>

          <script id="app-state"
            dangerouslySetInnerHTML={{ __html: this.props.state }}>
          </script>

        </body>

      </html>
    )
  }

}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
