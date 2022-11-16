import React from 'react'
import './OrderJob.scss'
export default function OrderJob() {
    return (
        <div className="p-3">
            <div className="d-flex justify-content-between">
                <h5>Stardard</h5>
                <p className="h5 text-muted">$1000</p>
            </div>
            <p className="disabled h6 my-4" >
                123123123123
            </p>
            <div className='timeJob'>
                <i class="fa-regular fa-clock mx-2"></i>
                30 Day Delivery
                <i class="fa-solid fa-rotate mx-2"></i>
                Revlslons
            </div>
            <ul className="list-unstyled">
                <li className="h6 text-muted">✔️ 1 page</li>
                <li className="h6 text-muted">✔️ Design customization</li>
                <li className="h6 text-muted">✔️ Content upload</li>
                <li className="h6 text-muted">✔️ Responsive design</li>
                <li className="h6 text-muted">✔️ Include source code</li>
            </ul>
            <div className='flex flex-col'>
                <button className="btn-lg btn btn-success btn-block my-4">
                    Continue ($1000)
                </button>
                <div role="button" className="h5 text-success text-center">
                    Compare Package
                </div>
            </div>
        </div>
    )
}
