import React, { Component } from 'react'
import { connect } from 'react-redux'



class Test2 extends Component {
  handleClick = () =>{
    this.props.deletePost();
  }
  render() {
    console.log(this.props)
    return (
      <>
      <div>Test2</div>
      <button onClick={this.handleClick}>Dispatch Test</button>
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
    deletePost: () => { dispatch({type: 'DELETE_POST'}) }
  }
}

export default connect(null, mapDispatchToProps)(Test2)