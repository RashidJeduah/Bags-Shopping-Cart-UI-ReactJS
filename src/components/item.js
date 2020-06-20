import React from 'react';

function Item({ name, image }) {
    return (
        <div>
            <div class="card" style={{ width: '140px', height: '250px',}}>
                <img src={image} class="card-img-top" alt="..." style={{ height: '130px' }}/>
                <div class="card-body">
                    <h6 class="card-title" style={{ fontSize: '14px' }} >
                        {name}
                        <p style={{color:'gainsboro'}}>1 pc(s)</p>
                        </h6> 
                    <button style={{
                        backgroundColor: 'white', border: '1px solid gainsboro', borderRadius: '15px',
                        textAlign: 'right', color: 'turquoise',marginLeft:'35px',
                    }}>
                        <svg class="bi bi-basket" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{margin:'2px'}}>
                            <path fill-rule="evenodd" d="M10.243 1.071a.5.5 0 0 1 .686.172l3 5a.5.5 0 1 1-.858.514l-3-5a.5.5 0 0 1 .172-.686zm-4.486 0a.5.5 0 0 0-.686.172l-3 5a.5.5 0 1 0 .858.514l3-5a.5.5 0 0 0-.172-.686z" />
                            <path fill-rule="evenodd" d="M1 7v1h14V7H1zM.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H.5z" />
                            <path fill-rule="evenodd" d="M14 9H2v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9zM2 8a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H2z" />
                            <path fill-rule="evenodd" d="M4 10a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        cart</button>
                </div>
            </div>
        </div>
    )
}

export default Item