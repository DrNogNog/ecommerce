import { IoListOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { Button } from '@mui/material';
import { useState } from 'react';

const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal] = useState(true);
    return(
        <nav>
            <div className='container'>
                <div className='row'>
                <div className="col-sm-3 navPart1">
                    <div className="catWrapper">
                        <button className="allCatTab align-items-center"
                        onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                        <span className="icon1 mr-2"><IoListOutline /></span>
                        <span className="text">ALL CATEGORIES</span>
                        <span className="icon2 ml-2"><FaAngleDown /></span>
                        </button>

                        <div className={`sidebarNav ${isopenSidebarVal===true ? 'open' : ''}`}>
                        <ul>
                            <li><Link to="/"><Button>Black</Button></Link></li>
                            <li><Link to="/"><Button>Black</Button></Link></li>
                            <li><Link to="/"><Button>Black</Button></Link></li>
                            <li><Link to="/"><Button>Black</Button></Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className='col-sm-9 navPart2'>
                        <ul className = 'list list-inline ml-auto'>
                            <li className = 'list-inline-item'><Link to="/"><Button><CiHome/>&nbsp; Home
                            </Button></Link></li>
                            <li className = 'list-inline-item'><Link to="/"><Button>Shop</Button></Link>
                            <div className="submenu">
                                <Link to="/"><Button>Black</Button></Link>
                                <Link to="/"><Button>White</Button></Link>
                                <Link to="/"><Button>Red</Button></Link>
                                </div></li>
                            <li className = 'list-inline-item'><Link to="/"><Button>Iphone</Button></Link></li>
                            <li className = 'list-inline-item'><Link to="/"><Button>Parts</Button></Link></li>
                            <li className = 'list-inline-item'><Link to="/"><Button>Repairs</Button></Link></li>
                            <li className = 'list-inline-item'><Link to="/"><Button>Blog</Button></Link></li>
                            <li className = 'list-inline-item'><Link to="/"><Button>Contact</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;