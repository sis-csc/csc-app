import MenuIcon from "../ui/MenuIcon";
import MenuCloseIcon from "../ui/MenuCloseIcon";

export default function MobileMenuButton({ showMenu, onClick }) {
  return (
    <button onClick={onClick}>
      {showMenu ? <MenuCloseIcon /> : <MenuIcon />}
    </button>
  );
}
