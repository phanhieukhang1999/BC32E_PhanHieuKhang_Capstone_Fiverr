import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { layDanhSachCongViecTheoTenAction } from '../../redux/actions/CongViecActions';
import ItemJob from './ItemJob/ItemJob';
import './ListJob.scss'
export default function ListJob() {
    const { valueSearch } = useParams();
    const dispatch = useDispatch()
    const {resultSearchJobByName} = useSelector(state => state.CongViecReducers)
    console.log("resultSearchJobByName: ", resultSearchJobByName);

    let {renderJob, setRenderJob} = useState([])

    useEffect(() => {
        dispatch(layDanhSachCongViecTheoTenAction(valueSearch))
    }, [valueSearch])
    return (
        <div className='ListJob py-36'>
            <div className="container">
                <h1 className='pt-5 text-3xl'>Result for "{valueSearch}"</h1>
                <div className='top-bar flex justify-between'>
                    <div className='left flex'>
                        <DropdownButton id="dropdown-basic-button" title="Category">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Service Options">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Seller Details">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Budget">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Delivery Time">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>

                    <div className='right'>
                        <Form className='check flex'>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Pro Service" />
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Local sellers"
                            />
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Online Sellers"
                            />

                        </Form>
                    </div>
                </div>
                <div className='job-content'>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-5" >
                            <ItemJob />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
