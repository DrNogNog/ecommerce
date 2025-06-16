import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa';
import Dialog from '@mui/material/Dialog';
import { IoSearchOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { MyContext } from '../../App';
import { useContext } from 'react';
const CountryDropdown = () => {
    const [isOpenModal, setisOpenModal] = React.useState(false);
    const [selectedTab, setSelectedTab] = useState(null);

    const [countryList, setCountryList] = useState([]);
    const context = useContext(MyContext)
    const selectCountry=(index,country)=>{
        setSelectedTab(index);
        setisOpenModal(false);
        context.setselectedCountry(country);
    }

    useEffect(()=>{
        setCountryList(context.countryList)
    },[])

    const filterList=(e)=>{
        const keyword = e.target.value.toLowerCase();
        if (keyword!==""){
            const list = countryList.filter((item)=>{
                return item.country.toLowerCase().includes(keyword)
            });
            setCountryList(list);
        }else{
            setCountryList(context.countryList);
        }

    }
    return (
        <>
            <Button className='countryDrop' onClick={() => setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">
                        {context.selectedCountry !== "" 
                            ? (context.selectedCountry.length > 10 
                                ? context.selectedCountry.substr(0, 17) + '...' 
                                : context.selectedCountry)
                            : "Select Location"}
                    </span>
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
            </Button>

            <Dialog onClose={() => setisOpenModal(false)} open={isOpenModal} className="locationModal">
              <h4 className='mb-0'>Choose your delivery location.</h4>
              <p>Enter your address and we will specify the offer for your area.</p>
              <Button className='close_' onClick={() => setisOpenModal(false)}><MdClose/></Button>
              
                <div className='headerSearch'>
                    <input type='text' placeholder='Search your area...' onChange={filterList} />
                    <Button><IoSearchOutline/></Button>
                </div>
                <ul className='countryList mt-3'>
                    { 
                        countryList?.length!==0 && countryList?.map((item, index)=>{
                            return(
                                <li key={index}><Button onClick={() => selectCountry(index,item.country)} className={`${selectedTab===index ? 'active' : ''}`}>{item.country}</Button></li>
                            )
                        })
                    }
                </ul>

            </Dialog>

        </>
    );
};

export default CountryDropdown;