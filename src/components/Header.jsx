function Header() {
  return (
    <header className="p-2 bg-neutral text-neutral-content">
      <nav className="container mx-auto flex justify-between items-center p-2">
        <h4 className="text-2xl font-semibold">Redux Cart</h4>
        <button className="btn btn-primary">Cart</button>
      </nav>
    </header>
  );
}
export default Header;
