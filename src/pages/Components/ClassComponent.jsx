import React from "react";
import BaseHoc from "../../hoc/BaseHoc";

//>>> React Life Cycle Methods
//* They mainly work on class components
//* In order to get the similar kind of methods in function components we have something called hooks

// mounted (constructor, render, componentDidMount)
// updated (componentDidUpdate)
// unmounted (componentWillUnmount)

class ClassComponent extends React.Component {
  constructor(props) {
    super(props); //It is used to call the superclass method as well as access the superclass constructor.
    // super(props) would pass the props to the parent constructor(i.e. React.Component).

    this.state = {      // state is used to store the information with respect to the component
                        // this keyword will invoke the object of the class component hence we do not need to declare it inside the variable
      name: "devansh",  
      age: 20,
    };
    console.log("Constructor has been invoked successfully!!");
  }
  componentDidMount() {
    console.log("Component Did Mount Successfully!!");
  }

  componentDidUpdate() {
    console.log("Component Did Update Successfully!!"); //This method will automatically get invoked when we update the age inside the state onclick of the button but before this method the render method will automically get invoked since first becauz we r able to see the updated value on our Ui first.
  }

  componentWillUnmount() {
    console.log("Component will unmount successfully!!");
  }
  
  render() {
    console.log("Render invoked successfully!!!");
    return (   // Since we have the return wrt the render method hence we will write it at the last hierarchical wise.
      <div>
        <h1>Class Component</h1>
        <p>This is from our class component</p>
        <button onClick={() => this.setState({ ...this.state, age: this.state.age + 1 })}>
          {/* First the object is destructed inside state to access key such as name & age then the age is incremented by 1 on click of the button */}
          Add 1 to your age
        </button>
        <p>{this.state.age}</p>
      </div>
    );
  }
}

// Constructor, render & componentDidMount will get invoked 2 times - 1 wrt the runtime when the classComponent will get called & 2nd time wrt the React.StrictMode since it checks whether the class component is really rendered on the ui or not for testing purpose.

export default BaseHoc(ClassComponent);
