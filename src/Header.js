import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom navbar-dark">
      <div className="container-fluid">
        <a href="/#" className="navbar-brand" alt="Course Viewver logo">
          Course Viewer
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link " href="/#">
              All Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/#">
              My Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/#">
              Username
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
