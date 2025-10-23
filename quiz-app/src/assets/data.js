export const data = [
  {
    q: "What is React?",
    option1: "A JavaScript library for building user interfaces",
    option2: "A framework for backend development",
    option3: "A database management tool",
    option4: "A CSS preprocessor",
    ans: 1
  },
  {
    q: "Who developed React?",
    option1: "Google",
    option2: "Facebook",
    option3: "Microsoft",
    option4: "Amazon",
    ans: 2
  },
  {
    q: "What is the correct command to create a new React app?",
    option1: "npx create-react-app appname",
    option2: "npm create-react-app appname",
    option3: "react new appname",
    option4: "create appname react",
    ans: 1
  },
  {
    q: "In React, what does JSX stand for?",
    option1: "JavaScript Extension",
    option2: "JavaScript XML",
    option3: "Java Syntax Extension",
    option4: "JSON Syntax XML",
    ans: 2
  },
  {
    q: "Which method is used to render React elements to the DOM?",
    option1: "React.mount()",
    option2: "ReactDOM.render()",
    option3: "renderDOM()",
    option4: "React.renderDOM()",
    ans: 2
  },
  {
    q: "Which of the following is used to create a functional component?",
    option1: "class MyComponent extends React.Component",
    option2: "function MyComponent() {}",
    option3: "new Component()",
    option4: "createComponent()",
    ans: 2
  },
  {
    q: "How do you export a component in React?",
    option1: "export MyComponent;",
    option2: "export = MyComponent;",
    option3: "export default MyComponent;",
    option4: "exports MyComponent;",
    ans: 3
  },
  {
    q: "What is the correct syntax to import React in a component file?",
    option1: "import React from 'react';",
    option2: "require React;",
    option3: "import 'react';",
    option4: "React.import();",
    ans: 1
  },
  {
    q: "What is the purpose of the render() method in class components?",
    option1: "To modify the DOM directly",
    option2: "To render JSX to the DOM",
    option3: "To bind event handlers",
    option4: "To update the state",
    ans: 2
  },
  {
    q: "In React, data flows in which direction?",
    option1: "Two-way binding",
    option2: "Parent to child (unidirectional)",
    option3: "Child to parent only",
    option4: "Circular flow",
    ans: 2
  },
  {
    q: "What is 'state' in React?",
    option1: "An object that stores component data",
    option2: "A global variable",
    option3: "A method to handle events",
    option4: "A type of prop",
    ans: 1
  },
  {
    q: "How can you pass data from parent to child component?",
    option1: "Using props",
    option2: "Using state",
    option3: "Using Redux only",
    option4: "Using functions",
    ans: 1
  },
  {
    q: "What is 'props' short for?",
    option1: "Properties",
    option2: "Propositions",
    option3: "Prototypes",
    option4: "Propagations",
    ans: 1
  },
  {
    q: "What hook is used to manage state in a functional component?",
    option1: "useEffect()",
    option2: "useState()",
    option3: "useContext()",
    option4: "useReducer()",
    ans: 2
  },
  {
    q: "What does useEffect() hook do?",
    option1: "Handles side effects like API calls",
    option2: "Updates the DOM manually",
    option3: "Changes component props",
    option4: "Adds new state variables",
    ans: 1
  },
  {
    q: "Which of the following is true about React Hooks?",
    option1: "They can be used in class components",
    option2: "They can only be used in functional components",
    option3: "They are used for styling",
    option4: "They replace JSX",
    ans: 2
  },
  {
    q: "What will happen if you call setState() in a class component?",
    option1: "It replaces the state completely",
    option2: "It merges the new state with the old one",
    option3: "It does nothing",
    option4: "It reloads the page",
    ans: 2
  },
  {
    q: "What is the virtual DOM in React?",
    option1: "A copy of the real DOM kept in memory",
    option2: "A database for storing elements",
    option3: "A DOM API for backend",
    option4: "A state manager",
    ans: 1
  },
  {
    q: "How can you handle events in React?",
    option1: "Using inline JavaScript only",
    option2: "Using event handlers like onClick",
    option3: "By editing the DOM directly",
    option4: "Using Redux actions",
    ans: 2
  },
  {
    q: "Which method is used to update state in React class components?",
    option1: "updateState()",
    option2: "this.setState()",
    option3: "setStateDirectly()",
    option4: "changeState()",
    ans: 2
  },
  {
    q: "What is the default port number for React development server?",
    option1: "3000",
    option2: "8000",
    option3: "5000",
    option4: "8080",
    ans: 1
  },
  {
    q: "Which of the following is NOT a hook?",
    option1: "useRef",
    option2: "useFetch",
    option3: "useState",
    option4: "useEffect",
    ans: 2
  },
  {
    q: "What is the main purpose of useRef hook?",
    option1: "To re-render a component",
    option2: "To reference DOM elements or persist values",
    option3: "To manage context",
    option4: "To trigger side effects",
    ans: 2
  },
  {
    q: "In React Router, which component is used to define a route?",
    option1: "<Route>",
    option2: "<Link>",
    option3: "<Router>",
    option4: "<Switch>",
    ans: 1
  },
  {
    q: "How do you navigate programmatically in React Router v6?",
    option1: "useNavigate()",
    option2: "useHistory()",
    option3: "navigateTo()",
    option4: "push()",
    ans: 1
  },
  {
    q: "Which package is used for routing in React?",
    option1: "react-dom-router",
    option2: "react-router-dom",
    option3: "react-navigation",
    option4: "react-router",
    ans: 2
  },
  {
    q: "What does lifting state up mean?",
    option1: "Moving state to a higher-level component",
    option2: "Copying state to a sibling component",
    option3: "Creating a new state variable",
    option4: "Resetting component state",
    ans: 1
  },
  {
    q: "What is Context API used for?",
    option1: "Global state management",
    option2: "Styling components",
    option3: "Handling routing",
    option4: "Fetching data",
    ans: 1
  },
  {
    q: "What is a key in React list rendering?",
    option1: "A unique identifier for list items",
    option2: "An event listener",
    option3: "A CSS property",
    option4: "A prop for styling",
    ans: 1
  },
  {
    q: "Which hook replaces componentDidMount, componentDidUpdate, and componentWillUnmount?",
    option1: "useReducer",
    option2: "useEffect",
    option3: "useMemo",
    option4: "useCallback",
    ans: 2
  },
  {
    q: "Which file typically represents the entry point in a React app?",
    option1: "index.js",
    option2: "app.js",
    option3: "main.js",
    option4: "home.js",
    ans: 1
  },
  {
    q: "What does React.StrictMode do?",
    option1: "Checks potential problems in application",
    option2: "Optimizes code for production",
    option3: "Improves performance automatically",
    option4: "Adds routing capabilities",
    ans: 1
  },
  {
    q: "Which lifecycle method is used to perform side effects after rendering?",
    option1: "componentDidMount",
    option2: "componentWillMount",
    option3: "componentWillReceiveProps",
    option4: "shouldComponentUpdate",
    ans: 1
  },
  {
    q: "How can you optimize performance in a React app?",
    option1: "By avoiding keys in lists",
    option2: "By memoizing components",
    option3: "By adding more states",
    option4: "By using more effects",
    ans: 2
  },
  {
    q: "What is React.memo used for?",
    option1: "To memoize functions",
    option2: "To prevent unnecessary re-renders of functional components",
    option3: "To create new hooks",
    option4: "To memoize JSX syntax",
    ans: 2
  },
  {
    q: "Which hook helps avoid re-creating functions unnecessarily?",
    option1: "useMemo",
    option2: "useCallback",
    option3: "useRef",
    option4: "useEffect",
    ans: 2
  },
  {
    q: "What is the default behavior of React on setState?",
    option1: "Asynchronous update",
    option2: "Synchronous update",
    option3: "Manual DOM manipulation",
    option4: "Forced re-render",
    ans: 1
  },
  {
    q: "What does useMemo() do?",
    option1: "Stores a cached value to avoid recalculations",
    option2: "Handles side effects",
    option3: "Manages component refs",
    option4: "Changes component state",
    ans: 1
  },
  {
    q: "What is a higher-order component (HOC)?",
    option1: "A function that takes a component and returns a new component",
    option2: "A class extending another class",
    option3: "A built-in React component",
    option4: "A function that returns JSX",
    ans: 1
  },
  {
    q: "What is React.Fragment used for?",
    option1: "To group multiple elements without adding extra DOM nodes",
    option2: "To create event listeners",
    option3: "To define context",
    option4: "To handle side effects",
    ans: 1
  },
  {
    q: "Which hook can be used for global state management?",
    option1: "useEffect",
    option2: "useContext",
    option3: "useState",
    option4: "useReducer",
    ans: 2
  },
  {
    q: "Which hook helps manage complex state logic?",
    option1: "useReducer",
    option2: "useRef",
    option3: "useMemo",
    option4: "useCallback",
    ans: 1
  },
  {
    q: "What is prop drilling?",
    option1: "Passing props through multiple nested components",
    option2: "Fetching props from API",
    option3: "Modifying props in state",
    option4: "Using props for styling",
    ans: 1
  }
]
