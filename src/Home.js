import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>
                    Welcome to Home Page
                </p>
                <Link to='/Details'>Go To Details Page</Link>
            </div>
        )
    }
}
