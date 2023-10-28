'use client'
import passportInstance from "@/app/passport";

async function handleLogout() {
    await passportInstance.logout();

}
const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h1>Simple Notes</h1>
      </div>
      <div className="right">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
