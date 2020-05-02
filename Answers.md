# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a library that is really only concerned about the view, i.e. what you see on your screen. For example the HTML rendered in a browser.
React also allows apps to be split into reusable components. Each of those has its own state which is kept inside and properties from outside.

2. Describe component state.

an object that represents the parts of the app that can change. Each component can maintain its own state
one state could be off and another state could be On

3. Describe props.

Props stands for properties. They are variables passed to it by its parent component. and they are used to pass data from component to component

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects is anything that affects something outside of the scope of the current function that's being executed.
You can sync effects by setting the state in inside of the useEffect.
