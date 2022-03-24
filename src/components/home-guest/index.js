import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import NavbarGuest from '../navbar'
import SideBar from '../side-bar'
import ContentGuest from '../content'


function HomeGuest() {
  return (
    <div className='container'>
        <NavbarGuest/>
        <div class="row mt-5 mb-4">
            <SideBar/>
            <ContentGuest/>
        </div>
    </div>
  )
}

export default HomeGuest