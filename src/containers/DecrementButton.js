import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { minus } from '../actions/index'

class Minus extends Component {
    render() {
        return <button onClick={() => this.props.minus()}>-</button>
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ minus: minus }, dispatch)
}

export default connect(null, mapDispatchToProps)(Minus)