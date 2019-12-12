import React, { PureComponent } from 'react';

//React.PureComponent is similar to React.Component. 
/* Description
The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), 
but React.PureComponent implements it with a shallow prop and state comparison.
For Shallow Comparison Visit - https://reactjs.org/docs/shallow-compare.html
For Pure Component more in detail Visit - https://reactjs.org/docs/react-api.html#reactpurecomponent
*/
class PureComp extends PureComponent {

    constructor(){
        super()
        this.state = {}
        console.log("PureComp constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("PureComp getDerivedStateFromProps", props, state)
        return null
    }

    componentDidMount(){
        console.log("PureComp componentDidMount")
    }

    render() {
        console.log("PureComp render")
        return (
            <div>
                <p>PureComp {this.props.name}</p>
            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("PureComp getSnapshotBeforeUpdate", prevProps, prevState)
        return prevState
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("PureComp componentDidUpdate", prevProps, prevState, snapshot)
    }

    componentDidCatch(error, info){
        console.log("PureComp componentDidCatch", error, info)
    }

    componentWillUnmount(){
        console.log("PureComp componentWillUnmount")
    }
}

//make this component available to the app
export default PureComp;
