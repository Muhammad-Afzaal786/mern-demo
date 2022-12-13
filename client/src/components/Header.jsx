import { AppBar, Toolbar, styled} from '@mui/material'; 
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {DataContext} from '../components/context/DataProvider'
import { useContext } from 'react';

const Component = styled(AppBar)`  
    color: white;
    position : static !important;
`;
const Container = styled(Toolbar)`
    justify-content: space-between;
    & > div >a {
        padding: 20px;
        color: #fff;
        text-decoration: none;
    }
`
const Header = () => {
    const {account} = useContext(DataContext)
    const navigate = useNavigate();
    const Logout = async () =>{
        navigate('/login');      
    }       
    return (
        <Component>
            <Container>
               <div> <Link to='/'>HOME</Link></div>            
               <div>
               <Link className='user_name'>              
             <span> {account.name}</span><FaUserAlt/>             
               </Link>
               <Link to='/userdata'>Users Data</Link>             
                <Link to='/login' onClick={Logout}>Logout</Link> 
               </div>
            </Container>
        </Component>
    )
}

export default Header;