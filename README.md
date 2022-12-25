State

- Data required for a component
- Kind off object
- parameters

* similar to const variable where we can store our data, but u can change data here

Hooks -> useState()

Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

Hooks allow us to "hook" into React features such as state and lifecycle methods.

Hook Rules
There are 3 rules for hooks:

Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional
Note: Hooks will not work in React class components.

The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application.

import {useState} from "react";
const [count, setCount] = useState(); <!-- count => var, setCount => func; -->
const [number, setNumber] = useState(5); <!-- indicates default value for number as 5. -->

e.g. : create a btn >> on clk >> count ++

Props

> > Data which we want to pass to another component
> > pass data/info from parent component to child component in the form of arguments.

e.g.: <FunctionalComponent name="rohan" company="dt" height={6} />
