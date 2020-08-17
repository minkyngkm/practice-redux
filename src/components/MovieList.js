import React from 'react'
import { connect } from 'react-redux'
import selectMovie from '../actions/index'


// state 를 사용하고 싶으면 props 로 받아와야함! 
const MovieList = ( props ) => { 

    const listItems = props.movies.map( movie => {
        return (
        <div key={movie.title}> 
            <span>{movie.title}</span>
            <button onClick={() => props.selectMovie(movie)}> Details </button>
            {/* action 도 props 로 받은 걸 써야 되니까!  */}
        </div>

    )})

    return (
        <div>
            <h2> Movie List </h2>
            <div> {listItems} </div>
        </div>
    )
}


// props 으로 state 와 dispatch 즉 action 을 받고 싶어서 쓰는 과정! 
// state와 dispatch 를 전달 받는 것은 reducer 이고, Reducer 가 store 에게 전달했고, store을 props로 전달했음! 

const mapStateToProps = (state) => {
    return {
        movies : state.movies
    }
}
// 이 과정이 hooks 에서 useSelector()
// state.movies의 movies 는 combineReducers 에서 key reducer의 key값으로 준 것! 

const mapDispatchToProps = {
    selectMovie : selectMovie
}
// 이 과정이 hooks 에서 useDispatch()
// 여기에서 selectMovie 는 action 

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)