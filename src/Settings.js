import React, { Component } from 'react'


import { Link } from 'react-router-dom'

export default class Settings extends Component {
    render() {
        return (
            <div>
                <p>
                    Welcome to Settings Page!
                </p>
                <Link to='/'>Go To Home Page</Link>
            </div>
        )
    }
}
