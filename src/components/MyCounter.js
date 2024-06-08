// const MyCounter = ()=>{
//     return <h1>Hello Bangladesh</h1>
// }
// export default MyCounter

import { Component } from "react";

class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count:0,
    };
    // this.increment = this.increment.bind(this)
  }

  increment() {
    // this.setState((updatedState) => {
    //   return {
    //     count: updatedState.count + 1,
    //   };
    // });
    this.setState((prevState)=>{
        return {
            count:prevState.count+1
        }
    })
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  incrementBy5() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  dynamic(incrementBy){
    this.setState({
        count: this.state.count + incrementBy
    })
  }
  anotherDym(DecrementBy){
    this.setState({
      count: this.state.count - DecrementBy
    })
  }
  render() {
    return (
      <div>
        <h5>Count : {this.state.count}</h5>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => {
            this.incrementBy5();
          }}
        >
          IncrementBy5
        </button>
        <button onClick={()=>{
            this.dynamic(500)
        }}>Dynamic Increment</button>
       <button onClick={()=>{
        this.anotherDym(400)
       }}>Dynamic Decrement</button>
      </div>
    );
  }
}
export default MyCounter;
