//External Lib Import
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCategoryListQuery } from "../../redux/services/categoryService";

//Internal Lib Import
import CategoryPlaceholder from "../Placeholder/CategoryPlaceholder";

const Categories = () => {
  const { data: categoryList } = useCategoryListQuery();

  if (!categoryList?.length > 0) {
    return <CategoryPlaceholder />;
  }

  return (
    <Container className="text-center" fluid={true}>
      <h4 className="section-title">CATEGORIES</h4>
      <p className="section-sub-title">
        Some Of Our Exclusive Collection, You May Like
      </p>
      <Row>
        {categoryList?.map((category, i) => (
          <Col
            className="p-0"
            key={i.toString()}
            xl={2}
            lg={2}
            md={2}
            sm={6}
            xs={6}
          >
            <Link to={"product-list-by-category/" + category.slug}>
              <Card className=" w-100 ">
                <img className="w-100" src={category?.image?.src} />
                <Card.Body>
                  <p className="category-name">{category.name}</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
