import { useState } from "react";
import { ReactComponent as ListSvg } from "../images/icons/list.svg";
import { ReactComponent as DotsSvg } from "../images/icons/dots-nine.svg";

function BlogCard({ children }) {
  const [isFirstLayout, setIsFirstLayout] = useState(true);

  const toggleLayout = () => {
    setIsFirstLayout(!isFirstLayout);
  };
  return (
    <>
      <div className="d-flex justify-content-end py-2 px-3 border">
        <button onClick={toggleLayout} className="btn border-0 ">
          {isFirstLayout ? <DotsSvg /> : <ListSvg />}
        </button>
      </div>
      {children}
    </>
  );
}

export default BlogCard;
