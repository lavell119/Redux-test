import React, { Component } from 'react'
import { connect } from 'react-redux'

class Test2 extends Component {
  render() {
    console.log(this.props)
    return (
      <>
      <div>Test2</div>
      <button>Dispatch Test</button>
      </>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch({type: 'DELETE_POST'}) }
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(Test2)