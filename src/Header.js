import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CardTravel } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ cart }] = useStateValue();

  console.log(cart);

  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        ></img>
      </Link>
      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 Links */}
      <div className="header__nav">
        {/* 1st Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header_optionLineOne">Hello User</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link className="header__link">
          <div className="header__option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link className="header__link">
          <div className="header__option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th Link */}
        <Link to="/checkout" className="header__link">
        <div className="header__optionCart">
          {/* Shopping cart Icon */}
          <ShoppingCartIcon />

          {/* Number of items in the cart */}
          <span className="header__optionLineTwo header__cartCount">{cart?.length}</span>
        </div>
        </Link>
      </div>

      {/* Cart icon with item count */}
    </nav>
  );
}

export default Header;
