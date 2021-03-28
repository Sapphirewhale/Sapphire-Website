import React from "react";


export default class WelcomePage extends React.Component {
    render() {
      return (
        <div className="welcome-page">
          <h1>Sapphirewhale's Website {this.props.name}</h1>
          We're Under Construction! It might be a bit!
        </div>
      );
    }
  }
  