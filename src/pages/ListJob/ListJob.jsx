import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { layCongViecTheoChiTietLoaiAction, layDanhSachCongViecTheoTenAction } from '../../redux/actions/CongViecActions';
import ItemJob from './ItemJob/ItemJob';
import './ListJob.scss'
export default function ListJob() {
    const { valueSearch } = useParams();
    const dispatch = useDispatch()
    const { resultSearchJobByName, menuItem } = useSelector(state => state.CongViecReducers)
    console.log("resultSearchJobByName: ", resultSearchJobByName);

    let [renderJob, setRenderJob] = useState([]);


    useEffect(() => {
        dispatch(layDanhSachCongViecTheoTenAction(valueSearch))
    }, [valueSearch])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='ListJob py-36'>
            <div className="container">
                
                <h1 className='pt-5 text-3xl'>Result for "{valueSearch}"</h1>
                <div className='top-bar flex justify-between'>
                    <div className='left mb-3 flex flex-wrap'>
                        <DropdownButton id="dropdown-basic-button" className='mb-3' title="Category">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" className='mb-3' title="Service Options">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" className='mb-3' title="Seller Details">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" className='mb-3' title="Budget">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" className='mb-3' title="Delivery Time">
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
                        {resultSearchJobByName?.map((item) => {
                            return (
                                <div className="col-12 col-md-6 col-lg-3 mb-5" key={item.id}>
                                    <ItemJob listJob={item} />
                                </div>
                            )
                        })}
                        {/* <div className="col-12 col-md-6 col-lg-3 mb-5" >
                            <ItemJob  />
                        </div> */}


                    </div>
                </div>
            </div>
        </div>
    )
}
