import React, { Component } from 'react';
import { newPost, getAllPosts } from '../services/appServices';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

class NewPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            currName: '',
            currSymbol: '',
            id: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        if(this.state.currSymbol.trim() && this.state.currName.trim()){
            getAllPosts()
                .then(res => {
                    if(res.find(el => el.symbol === this.state.currSymbol || el.name === this.state.currName)){
                        document.querySelector('.error').innerHTML= "This currency already exist!"
                        document.querySelector('.success').innerHTML= ""
                        return
                    }
                    else{
                        newPost(this.state.id, this.state.currSymbol, this.state.currName)
                        document.querySelector('.success').innerHTML= "Successfully added"
                        document.querySelector('.error').innerHTML= ""

                    }
                })
        }else{
                document.querySelector('.error').innerHTML= "Fields are empty!"
        }
        console.log(this.state.currName, this.state.currSymbol);
        e.target.reset()
        
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value,
            id: uuidv4()
        })
    }

    render(){
        return(
            <>
            <div className='unos'>
                <h3 className="display-4 text-center">Make New Currency</h3>
                <div className='success'></div>
                <div className='error'></div>
                <form onSubmit={(e) => this.handleSubmit(e)} className="form-group">
                        <h5>Currency name:</h5>
                        <input 
                        type='text' 
                        name='currName' 
                        placeholder='Currency name'
                        onChange={(e)=>{
                            this.handleChange(e)
                        }}
                        className="form-control"
                        />
                        <h5>Currency symbol:</h5>
                        <input 
                        type='text' 
                        name='currSymbol' 
                        placeholder='Currency symbol'
                        onChange={(e)=>{
                            this.handleChange(e)
                        }}
                        className="form-control"
                        />
                    <button className="btn btn-success btn-block">Submit</button>
                    <Link to='/'><button className="btn btn-primary btn-block">Home</button></Link>
                </form>
            </div>
            </>
        )
    }
}
export default NewPost