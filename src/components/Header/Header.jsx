import headerStyles from './Header.module.css'
import { DevamSvg } from "../../SvgComponents/DevamLogo/DevamLogo"
import ConnectWalletBtn from '../ConnectWalletBtn/ConnectWalletBtn';
import { SearchBar } from '../SearchBar/SearchBar';

const Header = () => {
    // const date = new Date();
    // const todaysDate = date.toDateString();
  
    return (
      <header className={headerStyles.header}>
        <div className={headerStyles.headerInfo}>
          {/* <span className={headerStyles.date}>{todaysDate}</span> */}
          <DevamSvg className={headerStyles.devamSvg} fill='#EDF8F8' />
          <ConnectWalletBtn />
        </div>
          <SearchBar />
      </header>
    )
  }
  
  export { Header }