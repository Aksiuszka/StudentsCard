import { Nav } from './styled';
import ZabkowicLogo from '../../assets/logo.png';
function Navbar() {
  
  return (
      <Nav>
        <img src={ZabkowicLogo} alt="zabkowic logo" />
        <h4>Uniwersytet Żabkowica</h4>
      </Nav>
  );
}

export default Navbar;
