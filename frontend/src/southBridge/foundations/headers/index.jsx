import Header01 from "./Header01";
import Header02 from "./Header02";
import Header03 from "./Header03";
import Header04 from "./Header04";
import Header05 from "./Header05";
import Header06 from "./Header06";
import Header07 from "./Header07";
import Header08 from "./Header08";
import Header09 from "./Header09";
import Header10 from "./Header10";


import "./style.scss";

function Header() {
  return (
    <div className="header_foundation">
      <Header01 />
      <Header02 />
      <Header03 />
      <Header04 />
      <Header05 />
      <Header06 />
      <Header07 />
      <Header08 />
      <Header09/>
      <Header10/>
    </div>
  );
}

export {
  Header01,
  Header02,
  Header03,
  Header04,
  Header05,
  Header06,
  Header07,
  Header08,

  Header10,
};

export default Header;