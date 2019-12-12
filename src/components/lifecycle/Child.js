import React, { Component } from 'react';

class Child extends Component {

    constructor(){
        super()
        this.state = {}
        console.log("Child constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Child getDerivedStateFromProps", props, state)
        return null
    }

    componentDidMount(){
        console.log("Child componentDidMount")
    }

    render() {
        console.log("Child render")
        return (
            <div>
                <p>Child {this.props.name}</p>
            </div>
        );
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Child shouldComponentUpdate", nextProps, nextState)
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Child getSnapshotBeforeUpdate", prevProps, prevState)
        return prevState
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Child componentDidUpdate", prevProps, prevState, snapshot)
    }

    componentDidCatch(error, info){
        console.log("Child componentDidCatch", error, info)
    }

    componentWillUnmount(){
        console.log("Child componentWillUnmount")
    }
}

//make this component available to the app
export default Child;
