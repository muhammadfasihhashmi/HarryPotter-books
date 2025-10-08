//footer component
export function Footer() {
  const openAt = 11;
  const closeAt = 22;
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openAt && currentHour < closeAt;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? <p>we are open, place your order!</p> : <p>closed</p>}
        {isOpen && <button className="btn">order now</button>}
      </div>
    </footer>
  );
}
