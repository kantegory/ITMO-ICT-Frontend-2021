import React, { Component } from 'react'

export default class HeaderTitle extends Component {
    render() {
        return (
            <div>
                <div style={{background: "white", position: "absolute", left: 0, right: 0, height: "232px"}}></div>
                <h1 class="comfortaaTitle" style={{zIndex: 1, position: "relative", padding: "90px 0 120px 0"}}> {this.props.title} </h1>
            </div>
        )
    }
}

