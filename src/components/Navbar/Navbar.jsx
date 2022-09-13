import { Navigation } from './styled';
import ZabkowicLogo from '../../assets/logo.png';
function Navbar() {
  
  return (
      <Navigation>
        <img src={ZabkowicLogo} alt="zabkowic logo" />
        <h4>Uniwersytet Żabkowica</h4>
      </Navigation>
  );
}

export default Navbar;
