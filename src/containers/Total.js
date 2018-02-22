import React, { Component } from 'react'
import { connect } from 'react-redux'

class AllTotal extends Component {
    render() {
        return <p>total: {this.props.total}</p>
    }
}

function mapStateToProps(state) {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps)(AllTotal)