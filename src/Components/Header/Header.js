import {withRouter, Link} from 'react-router-dom';
import './Header.css';


const Header = (props) => {
  
  return (
    <header className='header-container' style={{backgroundColor: '#215e47', padding: 20, height: '100px', width: '100vw', display: 'flex', justifyContent: 'flex-start',
    boxSizing: 'border-box'}} >
      <nav>
        <Link to ='/' className='nav-link' style={{textDecoration: 'none', fontSize: '20pt', color: '#538f77'}}>Home</Link>
      </nav>
      
      </header>
  )
}
export default withRouter(Header);

// functional component