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


npm i react-router-dom

router >> routes >> route
                            /home, /user, /about-us
BrowserRouter

v 6.5.2
2 => Bug/Patch fix
5 => Minor Updates
6 => Major Updates (breaking updates)

if u want to change any version (i.e. for express,mongoose, or any node related libraries) then just update that version in the package.json file & write npm i in the terminal to install the update

>>> Layout/HOC (Higher Order Component)
nav<home>footer
nav<contact>footer
nav<about-us>footer

<base><home></base>
Def for HOC: It can add additional features or info to existing component(i.e ClassComponent & FunctionalComponent in our case)


>>> React Life Cycle Methods
* They mainly work on class components
* In order to get the similar kind of methods in function components we have something called hooks

mounted (constructor, render, componentDidMount)
updated (componentDidUpdate)
unmounted (componentWillUnmount)

Mount => It is used or invoked when we deploy or mount the component on the ui
Update => It will be invoked when we update some value inside the state or any other component on the ui
Unmount => It is used to unmount or remove the component from our ui. It gets invoked with the mount once since the react library automatically mounts the component & unmounts it & then mounts it back to our ui.