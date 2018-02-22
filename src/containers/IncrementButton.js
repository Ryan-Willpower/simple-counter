import React, { Component } from 'react'
import { add } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Add extends Component {
    render() {
        return <button onClick={() => this.props.add()}>+</button>
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ add: add }, dispatch)
}

export default connect(null, mapDispatchToProps)(Add)