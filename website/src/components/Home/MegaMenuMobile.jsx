//External Lib Import
import { useEffect } from "react";
import { Button } from "react-bootstrap";

//Internal Lib Import
import { useCategoryListQuery } from "../../redux/services/categoryService";

const MegaMenuMobile = () => {
  const { data: categoryList } = useCategoryListQuery();

  useEffect(() => {
    megaMenu();
  }, []);

  const megaMenu = () => {
    var acc = document.getElementsByClassName("accordionMobile");
    var accNum = acc.length;
    for (let i = 0; i < accNum; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  };

  return (
    <div className="accordionMenuDivMobile">
      <div className="accordionMenuDivInsideMobile">
        {categoryList?.map((category, i) => (
          <>
            <Button className="accordionMobile">
              <img
                className="accordionMenuIconMobile"
                src={category?.image?.src}
              />
              &nbsp;
              {category?.name}
            </Button>
            <div className="panelMobile">
              <ul>
                {category?.subcategories?.map((subcategory) => (
                  <li>
                    <a
                      href={subcategory?.slug}
                      className="accordionItemMobile"
                    ></a>
                    {subcategory?.name}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MegaMenuMobile;
