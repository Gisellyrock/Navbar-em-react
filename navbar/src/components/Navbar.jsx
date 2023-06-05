import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classlist.toggle('responsive_nav');
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/">My Work</a>
        <a href="/">Blog</a>
        <a href="/">About me</a>
        <button onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
