import React from 'react';
import { Button } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa';
import Dialog from '@mui/material/Dialog';
import { IoSearchOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const CountryDropdown = () => {
    const [isOpenModal, setisOpenModal] = React.useState(false);

    return (
        <>
            <Button className='countryDrop' onClick={() => setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">USA</span>
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
            </Button>

            <Dialog onClose={() => setisOpenModal(false)} open={isOpenModal} className="locationModal">
              <h4 className='mb-0'>Choose your delivery location.</h4>
              <p>Enter your address and we will specify the offer for your area.</p>
              <Button className='close_' onClick={() => setisOpenModal(false)}><MdClose/></Button>
              
                <div className='headerSearch'>
                    <input type='text' placeholder='Search your area' />
                    <Button><IoSearchOutline/></Button>
                </div>
                <ul className='countryList mt-3'>
                    <li><Button onClick={() => setisOpenModal(false)}>United States</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>Brazil</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>Canada</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>United Kingdom</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>United States</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>Brazil</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>Canada</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>United Kingdom</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>United States</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>Brazil</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>Canada</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>United Kingdom</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>United States</Button></li>
                </ul>

            </Dialog>

        </>
    );
};

export default CountryDropdown;