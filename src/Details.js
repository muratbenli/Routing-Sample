import React, { Component } from 'react'


import { Link } from 'react-router-dom'

export default class Details extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <p>
                    Welcome to Details Page!
                </p>
                <Link to='/'>Go To Home Page</Link>
            </div>
        )
    }
}
