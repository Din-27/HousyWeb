import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import NavbarGuest from '../navbar'


function HomeGuest() {
  return (
    <div className='container'>
        <NavbarGuest/>
        <div class="container mt-5 mb-5">
            <div class="row">
                <div class="col-lg-3 col-md-6">
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
                    <div className='row'>
                        <div className='date mt-4 mb-2'>
                            <h4 style={{fontWeight: 'bold'}}>Budget</h4>
                        </div>
                            <div className='col-lg-5 col-md-12'>
                                <p style={{fontWeight: 'bold', color: 'grey'}}>Less than IDR.</p>
                            </div>
                            <Form className='col-lg-7 col-md-12'>
                                <FormControl
                                type="number"
                                style={{fontWeight: 'bold',
                                border: '1px solid'}}
                                />
                            </Form>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                <Button variant='outline-primary'>Day</Button>
                </div>

                <div class="col-lg-3 col-md-6">
                <Button variant='outline-primary'>Day</Button>
                </div>

                <div class="col-lg-3 col-md-6">
                <Button variant='outline-primary'>Day</Button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HomeGuest