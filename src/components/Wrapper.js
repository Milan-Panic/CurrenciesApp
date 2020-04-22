import React, { Component } from 'react'
import { getAllPosts, paginationPosts } from '../services/appServices'
import List from './List'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

/*
    json-server --watch currencies.json --port 3001
    npm install axios
    npm install --save react-router-dom
    npm install uuid
    npm install bootstrap
*/
class Wrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            totalResults: '',
            currentPage: 1,
            perPage: 5
        }
    }
    componentDidMount() {
        this.setPosts()
        this.nextPage(1)
    }

    setPosts = async () => {
        let data = await getAllPosts();

        this.setState({
            totalResults: [...data].length
        })
    }

    nextPage = async (pageNumber) => {
        await paginationPosts(pageNumber, this.state.perPage)
        .then((data)=>{
            this.setState({
                posts: data,
                currentPage: pageNumber
            })
        })
    }


    render() {
        const numberPages = Math.floor(this.state.totalResults / this.state.perPage);
        return (
            <div className='container'>
                <h1 className="display-4 text-center">Currency APP</h1>
                <div className='lists'>
                    <Link to='/addNew'><button id='dugme' className='btn btn-success'>Add New</button></Link>
                    {this.state.posts.map(post => <List key={post.id} post={post} />)}
                    {this.state.totalResults > 5 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''}
                    <div className="dropdown" role="group">
                        <button type="button" className="btn btn-secondary" onClick={() =>{this.setState({perPage: 5})}}>Five</button>
                        <button type="button" className="btn btn-secondary" onClick={() =>{this.setState({perPage: 10})}}>Ten</button>
                        <button type="button" className="btn btn-secondary" onClick={() =>{this.setState({perPage: 20})}}>Twenty</button>
                    </div>
                        <h6 style={{'color':'white'}}>Per Page:</h6>
                </div>
            </div>
        )
    }
}

export default Wrapper