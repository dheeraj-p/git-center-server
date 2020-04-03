import HeaderStyles from './Header.style';

export default function Header() {
  return (
    <nav className="navbar header">
      <h2 className="title">
        <small>GitCenter</small>
      </h2>
      <style jsx>{HeaderStyles}</style>
    </nav>
  );
}
