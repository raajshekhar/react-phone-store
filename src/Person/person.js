import React, { useState, useEffect } from 'react'
import './person.css'
import UserInput from '../userInput/userInput'
// export const Person = props => {

//     const [counter,  setCounter] = useState(0);

//     useEffect(()=>{ console.log(counter)}, [counter])

//     return ( <div style= {{ color: 'white'}} className="person" onClick={props.click} onMouseOver={()=>setCounter(counter+1)} >Rajashekhar {counter}
//     <UserInput/>
//     </div>)
// }


export class Person  extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        this.setCounter = this.setCounter.bind(this)
        console.log(this.props)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate: ',nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        // used to store any previous state like scrolling position, time
        console.log('getSnapshotBeforeUpdate', prevProps, prevState)
        return { time: new Date().getTime()}
    }

    componentDidMount(){
        console.log('%ccomponentDidMount: ','color:red; font-size:20px',this.props);
    }

    componentDidUpdate(prevProps, prevState,snapShot){
        console.log('snapShot:: ',snapShot)
    }

    setCounter(){
        this.setState( (prevState,props) => {
            console.log('setState: ',prevState,props)
            return {
                       counter: this.state.counter + 1
                   }
        })
    }

    render(){
        let { className, ...rest } = { ...this.props}
       return (
             <div className="person "  onClick={this.props.click} onMouseOver={this.setCounter} >Rajashekhar {this.state.counter}
             {this.props.name} <br/>
                 <UserInput/>
            </div> 
        )
    }
}