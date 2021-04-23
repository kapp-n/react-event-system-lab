import React, { Component } from 'react'

export default class Keypad extends Component {

    keyHandler = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
               <input onKeyUp={this.keyHandler} type="password"></input>
            </div>
        )
    }
}
