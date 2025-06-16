import { Button } from '@mui/material'
import { IoSearchOutline } from "react-icons/io5";

const SearchBox=()=>{
    return (
        <div className='headerSearch'>
            <input type='text' placeholder='Search for products...' />
            <Button><IoSearchOutline/></Button>
        </div>
    )
}

export default SearchBox;