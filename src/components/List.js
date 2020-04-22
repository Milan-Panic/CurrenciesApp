import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class List extends Component {
    constructor(props){
        super(props)
        
    }

    render(){        
        return(
            <div className='list-item'>
                <p>Symbol: {this.props.post.symbol}</p>
                <p>Name: {this.props.post.name}</p>
                <div className="input-group-append">
                <Link to={`/delete/${this.props.post.id}`}><button id='libtn' className="btn btn-danger btn-sm">Delete</button></Link>
                <Link to={`/edit/${this.props.post.id}`}><button className="btn btn-warning btn-sm">Edit</button></Link>
                </div>
            </div>
        )
    }
}

export default List