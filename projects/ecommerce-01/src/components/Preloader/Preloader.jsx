import { useEffect, useState } from "react";

import "./Preloader.scss";

export default function Preloader() {
  const [visible, setVisible] =
    useState(true);

  useEffect(() => {
    const timer =
      window.setTimeout(
        () => setVisible(false),
        450
      );

    return () =>
      window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="store-preloader"
      aria-hidden="true"
    >
      <div className="store-preloader__top">
        <span>NOVA</span>
        <span>STORE</span>
      </div>

      <div className="store-preloader__line">
        <span />
      </div>
    </div>
  );
}