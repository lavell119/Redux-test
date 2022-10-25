import React, { Component } from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

function Test(props) {  
    const gimp = useSelector(state=>state.posts)
    console.log(gimp)
    return (
    <div>Test</div>
  )
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(Test)