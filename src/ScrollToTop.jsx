// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//wrapper component that makes the window scroll to the top on url location change
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      {" "}
      <div className="mx-5">{props.children}</div>
    </div>
  );
};

export default ScrollToTop;
