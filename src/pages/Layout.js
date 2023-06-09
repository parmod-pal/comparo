import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className = "no-bullets">          
          <li>
            <Link to="/slider">Slider</Link>
          </li>
          <li>
          <Link to="/faq">FAQ</Link>
          </li>
          <li>
          <Link to="/quote">Quote</Link>
          </li>
          <li>
          <Link to="/shopping-list">Shopping List</Link>
          </li>
        </ul>
        <ul className = "no-bullets">          
          <li>
            <Link to="/github-user-search">Git Hub User Search</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;