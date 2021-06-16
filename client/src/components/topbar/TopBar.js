import './topbar.css';
import { Search } from '@material-ui/icons';

const TopBar = () => {
  return (
    <div className='topBarContainer'>
      <div className='topBarLeft'>
        <span className='logo'>Aldo Social</span>
      </div>
      <div className='topBarCenter'>
        <div className='searchBar'>
          <Search></Search>
        </div>
      </div>
      <div className='topBarRight'></div>
    </div>
  );
};

export default TopBar;
