import React, { Component } from 'react'
import { connect } from 'react-redux'

class Test2 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>Test2</div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(Test2)