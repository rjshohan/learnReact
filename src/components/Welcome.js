//class component
import { Component } from "react";
export class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to React Class State",
      isLogIn: true,
    };
  }

  clickme() {
    // this.state.message ="this is a new message"//never change state directly
    this.setState({
      message:"this is a new message"
    })
  }

  render() {
    return (
      <div>
        <p>
          <b>Message: </b>
          {this.state.message}
        </p>
        <button onClick={()=>this.clickme()}>Click</button>
      </div>
    );
  }
}
