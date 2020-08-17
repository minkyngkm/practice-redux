import React from 'react'
import { connect } from 'react-redux'

function MovieDetails(props) {
    if (!props.selectedMovie){
        return (
            <div>
               <h1> Movie </h1> 
               <p> select movie </p>
            </div>
        )
    } else {
        return (
            <div>
               <h1> Movie </h1> 
               <p> {props.selectedMovie.title} </p>
               <p> {props.selectedMovie.releaseDate} </p>
            </div>
        )
    }
   
}

const mapStateToProps = (state) => {
    return { selectedMovie : state.selectedMovie }
}

export default connect( mapStateToProps )(MovieDetails)