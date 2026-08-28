import { useEffect, useState } from "react";

import "./Preloader.scss";

function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;

    const first = window.setTimeout(() => {
      if (mounted) setProgress(38);
    }, 120);

    const second = window.setTimeout(() => {
      if (mounted) setProgress(72);
    }, 260);

    const third = window.setTimeout(() => {
      if (mounted) setProgress(100);
    }, 430);

    const finish = window.setTimeout(() => {
      if (mounted) setVisible(false);
    }, 650);

    return () => {
      mounted = false;
      window.clearTimeout(first);
      window.clearTimeout(second);
      window.clearTimeout(third);
      window.clearTimeout(finish);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="restaurant-preloader">
      <div className="restaurant-preloader__top">
        <span>LUMA</span>
        <span>{progress}%</span>
      </div>

      <div className="restaurant-preloader__line">
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="restaurant-preloader__bottom">
        <span>RESTAURANT</span>
        <span>SEASONAL / PRIVATE / SLOW</span>
      </div>
    </div>
  );
}

export default Preloader;