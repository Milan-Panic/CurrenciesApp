import React from 'react'

const Pagination = (props) => {
    const pageLinks = []

    for (let i = 1; i <= props.pages +1; i++) {
        let active = props.currentPage == i ? 'active' : '';
        

    pageLinks.push(<li className={`page-item ${active}`} key={i} onClick={()=> props.nextPage(i)}><a className='page-link' href="#">{i}</a></li>)
        
    }
    return (
        <div className='cont'>
            <div className='row'>
                <ul className='pagination'>
                { props.currentPage > 1 ? <li className={`page-item`} onClick={()=> props.nextPage(props.currentPage - 1)}><a className='page-link' href="#">Prev</a></li> : ''};
                    { pageLinks }
                { props.currentPage < props.pages + 1 ? <li className={`page-item`}  onClick={()=> props.nextPage(props.currentPage + 1)}><a className='page-link' href="#">Next</a></li> : ''};

                </ul>
            </div>
        </div>
    )
}

export default Pagination