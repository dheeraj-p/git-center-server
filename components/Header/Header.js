import HeaderStyles from './Header.style';

export default function Header() {
  return (
    <nav className="navbar header">
      <h3>
        <small className="text-light">GitCenter</small>
      </h3>
      <style jsx>{HeaderStyles}</style>
    </nav>
  );
}
