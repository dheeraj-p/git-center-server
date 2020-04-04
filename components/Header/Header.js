import HeaderStyles from './Header.style';

export default function Header() {
  return (
    <nav className="navbar navbar-default header">
      <div className="container-fluid">
      <h3>
        <small className="text-light">GitCenter</small>
      </h3>
      </div>
      <style jsx>{HeaderStyles}</style>
    </nav>
  );
}
