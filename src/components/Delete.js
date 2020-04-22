import React from 'react'
import { deletePost } from '../services/appServices';
import { useHistory, useParams } from 'react-router-dom';

const Delete = () => {
    let { id } = useParams();
    const history = useHistory();
    const handleChange = (e) => {
        deletePost(id).then(() => {
            history.push('/');
        })
    }

    return(
        <>
            <div id="delete">
                <h3 className="display-4 text-center">Delete Currency</h3>
                <p>Are you sure you want to delete this post?</p>
                <button onClick={(e) => handleChange(e)} className="btn btn-danger btn-block">Yes</button>
                <button onClick={(e) => history.push('/')} className="btn btn-success btn-block">No</button>
            </div>
        </>
    )
}

export default Delete