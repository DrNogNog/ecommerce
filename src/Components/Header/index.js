import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import CountryDropdown from '../CountryDropdown'
import { Button } from '@mui/material'
import { IoBagOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
const Header= () =>{
    return(
        <>
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center"> <b> Grand </b> Store Opening, large orders may be delayed.</p>
                </div>
            </div>
            <header className="header">
                <div className="container"></div>
                <div className="row align-items-center">
                    <div className="logoWrapper col-sm-3">
                        <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                    </div>
                    <div className='col-sm-3 d-flex align-items-center part2'>
                        <CountryDropdown/>

                        {/* Header Search Starts Here */}
                        <SearchBox/>
                        {/* Header Search Ends Here */}
                        <div className='part3 d-flex align-items-center ml-4'>
                            <Button className='circle mr-3'><FiUser/></Button>
                            <div className='ml-auto cartTab d-flex align-items-center'>
                                <span className='price'> $3.29 </span>
                                <div className='position-relative ml-2'>
                                    <Button className='circle'><IoBagOutline/></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                    
            </header>
            <Navigation/>
        </div>
        </>
    )
}
export default Header;