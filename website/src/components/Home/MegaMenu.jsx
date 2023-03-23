//External Lib Import
import { useEffect } from "react";
import { Button } from "react-bootstrap";

//Internal Lib Import
import { useCategoryListQuery } from "../../redux/services/categoryService";

const MegaMenu = () => {
  const { data: categoryList } = useCategoryListQuery();

  const menuItemClick = (event) => {
    event.target.classList.toggle("active");
    let panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className="accordionMenuDiv mt-5">
      <div className="accordionMenuDivInside">
        {categoryList?.map((category) => (
          <div>
            <Button onClick={menuItemClick} className="accordion">
              <img
                key={category?._id}
                className="accordionMenuIcon"
                src={category?.image?.src}
              />
              {category?.name}
            </Button>
            <div className="panel">
              <ul>
                {category?.subcategories?.map((subcategory, i) => {
                  return (
                    <Link className="accordionItem" href={subcategory?.slug}>
                      <li>{subcategory?.name}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
