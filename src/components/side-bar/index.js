import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'


function SideBar() {
  return (
                <div class="col-md-4">
                    <div className='row'>
                        <div className='title mb-2'>
                            <h4 style={{fontWeight: 'bold'}}>Type of Rent</h4>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '80px'}}>Day</Button>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '80px'}}>Month</Button>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '80px'}}>Year</Button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='date mt-4 mb-2'>
                            <h4 style={{fontWeight: 'bold'}}>Date</h4>
                        </div>
                        <div class="col-md-12">
                            <Form>
                                <FormControl
                                type="date"
                                style={{fontWeight: 'bold',
                                border: '1px solid'}}
                                />
                            </Form>
                        </div>
                    </div>
                    <div className='row justify-content-around'>
                        <div className='date mt-4 mb-2'>
                            <h4 style={{fontWeight: 'bold'}}>Property Room</h4>
                        </div>
                        <p style={{fontWeight: 'bold', color: 'grey'}}>Bedroom</p>
                        <div class="col-lg-2 col-md-12">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '50px'}}>1</Button>
                        </div>
                        <div class="col-lg-2 col-md-12">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '50px'}}>1</Button>
                        </div>
                        <div class="col-lg-2 col-md-12">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '50px'}}>1</Button>
                        </div>
                        <div class="col-lg-2 col-md-12">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '50px'}}>1</Button>
                        </div>
                        <div class="col-lg-2 col-md-12">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '50px'}}>+1</Button>
                        </div>
                    </div>
                    <div className='row justify-content-around mt-3'>
                        <p style={{fontWeight: 'bold', color: 'grey'}}>Bathroom</p>
                        <div class="col-lg-2 col-md-12">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '50px'}}>1</Button>
                        </div>
                        <div class="col-lg-2 col-md-12">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '50px'}}>1</Button>
                        </div>
                        <div class="col-lg-2 col-md-12">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '50px'}}>1</Button>
                        </div>
                        <div class="col-lg-2 col-md-12">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '50px'}}>1</Button>
                        </div>
                        <div class="col-lg-2 col-md-12">
                            <Button variant='outline-dark' style={{fontWeight: 'bold', width: '50px'}}>+1</Button>
                        </div>
                    </div>
                    <div className='row justify-content-around'>
                        <div className='date mt-4 mb-2'>
                            <h4 style={{fontWeight: 'bold'}}>Amenities</h4>
                        </div>
                            <div className='col-lg-8 col-md-12'>
                                <p style={{fontWeight: 'bold', color: 'grey'}}>Furnished</p>
                            </div>
                            <div className='col-lg-4 col-md-12'>
                                <input type="checkbox" />
                            </div>
                            <div className='col-lg-8 col-md-12'>
                                <p style={{fontWeight: 'bold', color: 'grey'}}>Pet allowed</p>
                            </div>
                            <div className='col-lg-4 col-md-12'>
                                <input type="checkbox" />
                            </div>
                            <div className='col-lg-8 col-md-12'>
                                <p style={{fontWeight: 'bold', color: 'grey'}}>Share accomodation</p>
                            </div>
                            <div className='col-lg-4 col-md-12'>
                                <input type="checkbox" />
                            </div>
                    </div>
                    <div className='row d-flex'>
                        <div className='date mt-4 mb-2'>
                            <h4 style={{fontWeight: 'bold'}}>Budget</h4>
                        </div>
                            <div className='col-lg-6 col-md-12 mt-2'>
                                <p style={{fontWeight: 'bold', color: 'grey'}}>Less than IDR.</p>
                            </div>
                            <Form className='col-lg-6 col-md-12'>
                                <FormControl
                                placeholder='Rp.8000000'
                                type="text"
                                value=''
                                style={{fontWeight: 'bold',
                                border: '1px solid',
                                width: '130px'}}
                                />
                            </Form>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5 col-md-12 mt-2' style={{marginLeft: '230px'}}>
                            <Button variant='outline-dark' style={{fontWeight: 'bold'}}>Apply</Button>
                        </div>
                    </div>
                </div>
  )
}

export default SideBar