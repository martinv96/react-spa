import { Link } from 'react-router-dom';
import './style.css';


function TopNav(props) {
    const {
      pageId
    } = props
    return(
      <ul className="main-menu">
        <li>
          <Link 
            className={pageId === 'home' ? 'active' : ''}
            to={'/'}
            >Home</Link></li>
        <li>
          <Link 
            className={pageId === 'about' ? 'active' : ''}
            to={'/about'}
          >About</Link></li>
        <li>
          <Link 
            className={pageId === 'contact' ? 'active' : ''}
            to={'/contact'}
          >Contact</Link></li>
      </ul>
    )
  }

export default TopNav