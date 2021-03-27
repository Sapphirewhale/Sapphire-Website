import React from "react";


export default class WelcomePage extends React.Component {
    render() {
      return (
        <div className="welcome-page">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  