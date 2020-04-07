import React from "react"

class App extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_path,
      sign_out_path
    } = this.props

    return (
      <React.Fragment>
        <h1>hi?</h1>
        {logged_in &&
          <div>
            <a href={sign_out_path}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_path}>Sign In</a>
          </div>
        }
      </React.Fragment>
    );
  }
}


export default App
