import { Card, Col } from "react-bootstrap"
import "../styles/categories.css"
import { useContext } from "react"
import ProductsContext from "../context/productsContext"

function CategoryItem({category}) {

  const {setChosenCategory,fetchProductsByCategory,setChosenProducts} = useContext(ProductsContext)

  const handleCategoryClick = ()=>{
    setChosenCategory(category)
    fetchProductsByCategory(category.category_name)
    setChosenProducts(category[0].category_products)
  }

  return (
    <Col xs={5} sm={5} lg={3}>
      <a onClick={handleCategoryClick} href={"/menu#"+category.category_name}>
      <Card>
        <Card.Img variant="top" src={category.category_image} />
        <Card.Body className="category-item-body">
            <button className="category-button">{category.category_name}</button>
         </Card.Body>
      </Card>
      </a>
    </Col>
  )
}

export default CategoryItem