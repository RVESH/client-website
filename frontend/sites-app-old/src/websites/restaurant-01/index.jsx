import {
  Outlet,
} from "react-router-dom";

function Restaurant01() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f5ef",
      }}
    >
      <Outlet />
    </div>
  );
}

export default Restaurant01;