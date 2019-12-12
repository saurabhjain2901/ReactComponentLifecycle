//import liraries
import React, { Component } from 'react';
import Child from './Child'
import PureComp from './PureComp'
// create a component
class Parent extends Component {

    // 1. Called Once On Initialization
    // 2. Initializing local state by assigning an object to this.state.
    // 3. Binding event handler methods to an instance.
    /*  Description
    The constructor for a React component is called before it is mounted. 
    When implementing the constructor for a React.Component subclass, 
    you should call super(props) before any other statement. 
    Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    constructor(){
        super()
        this.state = {
            name: "Saurabh"
        }
        console.log("Parent constructor")
    }

    //getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and 
    // on subsequent updates. It should return an object to update the state, 
    // or null to update nothing.
    /*  Description
    Called before render method invoked every time

    props - Holding current props
    state - Holding current state
    */
    static getDerivedStateFromProps(props, state){
        console.log("Parent getDerivedStateFromProps", props, state)
        return null
    }

    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
    // Initialization that requires DOM nodes should go here. 
    /* Description
    This is a good place to instantiate the network request.
    This method is a good place to set up any subscriptions. 
    If you do that, don’t forget to unsubscribe in componentWillUnmount().
    this.setState can be used in this method and allows re-render of the component.
    */
    componentDidMount(){
        console.log("Parent componentDidMount")
        //To get understanding of Pure Component open the commented setInterval Method
        // setInterval(() => {
        //     this.setState({
        //         name: "Saurabh Jain"
        //     })
        // }, 2000);
    }

    //The render() method is the only required method in a class component.
    /* Description
    Returns the complete View of component with Child components
    */
    render() {
        console.log("Parent render")
        return (
            <div>
                <p>Parent {`${this.state.name}`}</p>
                <Child name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        );
    }

    // shouldComponentUpdate() is invoked before rendering when new props or state 
    // are being received. Defaults to true. 
    // This method is not called for the initial render or when forceUpdate() is used.
    /* Description
    This method only exists as a performance optimization. 
    Do not rely on it to “prevent” a rendering, as this can lead to bugs. 
    Consider using the built-in PureComponent instead of writing shouldComponentUpdate() 
    by hand. PureComponent performs a shallow comparison of props and state, 
    and reduces the chance that you’ll skip a necessary update.

    nextProps - holding the next/new Props which would be updated.
    nextState - holding the next/new State which would be updated.
    */
    shouldComponentUpdate(nextProps,nextState){
        console.log("Parent shouldComponentUpdate", nextProps, nextState)
        console.log("Parent shouldComponentUpdate currentState", this.state)
        return true
    }

    // getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is 
    // committed to e.g. the DOM. It enables your component to capture some information 
    // from the DOM (e.g. scroll position) before it is potentially changed. 
    // Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().
    /* Description
    This use case is not common, but it may occur in UIs like a chat thread that need 
    to handle scroll position in a special way.

    prevProps - Holding the props before updating the props with new values
    prevState - Holding the state before updating the state with new values
    returning null or value i.e the third argument in componentDidUpdate i.e snapshot
    */
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Parent getSnapshotBeforeUpdate", prevProps, prevState)
        return prevState
    }

    // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    /* Description
    Use this as an opportunity to operate on the DOM when the component has been updated. 
    This is also a good place to do network requests as long as you compare the current props 
    to previous props (e.g. a network request may not be necessary 
    if the props have not changed).
    Best place to compare prevProps and prevState to new props and state and based on comparison,
    Good place to do network requests and this, setState also can be used,
    mandatory - Task must be wrapped in the Condition to prevent infinite loop,
    It can cause extra rendering again and again which is not visible to user,
    even if props and state are not updated, It affect the performance.

    prevProps - Holding the props before updating the props with new values
    prevState - Holding the state before updating the state with new values
    snapshot - third argument received object returning from getSnapshotBeforeUpdate
    */
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Parent componentDidUpdate", prevProps, prevState, snapshot)
    }

    // This lifecycle is invoked after an error has been thrown by a descendant component. 
    /* Description
    It should be used for things like logging errors.
    It receives two parameters:
    error - The error that was thrown.
    info - An object with a componentStack key containing information about which component threw the error.
    Network Request can be used to send error on the server
    */
    componentDidCatch(error, info){
        console.log("Parent componentDidCatch", error, info)
    }

    //componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
    /* Description 
    Perform any necessary cleanup in this method, such as invalidating timers, 
    canceling network requests, or cleaning up any subscriptions that were created in 
    componentDidMount().
    Component will never re-render after this method, 
    so don't use any task to set state or props or any network calls
    */
    componentWillUnmount(){
        console.log("Parent componentWillUnmount")
    }
}

export default Parent;

//Reference - https://reactjs.org/docs/react-component.html
//You can visit the link for more details.