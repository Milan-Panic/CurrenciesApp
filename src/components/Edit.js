import React, { useEffect, useState } from 'react'
import { getPost, editPost } from '../services/appServices';
import { useHistory,  useParams } from 'react-router-dom';

const Edit = () => {
    let { id } = useParams();
    const history = useHistory();

    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');

    const setStat = async () => {
        let data = await getPost(id)
        setName(data.name)
        setSymbol(data.symbol)
    }

    useEffect(() => {
        setStat()
    },[])

    const handleName = (e) => {
        let name = e.target.value;
        setName(name);        
    }

    const handleSymbol = (e) => {
        let symbol = e.target.value;
        setSymbol(symbol);   
    }


    const handleChange = (e) => {
        if(symbol.trim() && name.trim()){
            editPost(id, symbol, name)
            .then(()=>{
                setStat()
                document.querySelector('.success').innerHTML= "Successfully edited"
            document.querySelector('.error').innerHTML= ""
            })        
        }else{
            document.querySelector('.error').innerHTML= "Fields are empty!"
            document.querySelector('.success').innerHTML= ""
        }
    }

    return(
        <>
            <div id="edit">
                <h3 className="display-4 text-center">Edit Currency</h3>
                <div className='success'></div>
                <div className='error'></div>
                <form className="form-group">
                <input 
                type='text' 
                placeholder='Name'
                onChange= {(e) => handleName(e)}
                value = {name}
                className="form-control"
                />
                <input  
                type='text' 
                placeholder='Symbol'
                onChange= {(e) => handleSymbol(e)}
                value = {symbol}
                className="form-control"
                />
                </form>

                <button className="btn btn-success btn-block" onClick={(e) => handleChange(e)}>Edit</button>
                <button className="btn btn-primary btn-block" onClick={(e) => history.push('/')}>Return to Home</button>
            </div>
        </>
    )
}

export default Edit