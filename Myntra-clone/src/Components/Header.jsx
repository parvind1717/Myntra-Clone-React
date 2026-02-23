import { MdPersonOutline } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/" className="myntra_home">
            <img src="/images/myntra_logo.webp" alt="Myntra Home" />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">KIDS</a>
          <a href="#">HOME & LIVING</a>
          <a href="#">BEAUTY</a>
          <a href="#">
            STUDIO<sup>NEW</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>

          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container profile">
            <MdPersonOutline />
            <span className="action_name">Profile</span>
          </div>
          <div className="action_container">
            <IoMdHeartEmpty />
            <span className="action_name">Wishlist</span>
          </div>
          <Link className="action_container" to="/Bag">
            <MdOutlineShoppingBag />
            <span className="action_name" id="bag_name">
              Bag
            </span>
            <span className="bag_item_count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
