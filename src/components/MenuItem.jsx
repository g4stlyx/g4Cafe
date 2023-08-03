import { Card, Col } from "react-bootstrap"
import "../styles/menu.css"

function MenuItem({ product }) {
  return (

      <Col xs={12} sm={12} md={5} lg={3} className="menu-item-container">
        <div className="menu-item">
        <Card style={{ width: "auto" }}>
          <Card.Img className="menu-img" variant="top" src="https://images-pardonapp.s3.eu-central-1.amazonaws.com/defaultproductimage/default-product-pardon.webp" />
          <Card.Body className="menu-item-body">
            
            <div className="menu-item-name-price">
              <Card.Text>
                {product.name}
              </Card.Text>
              <Card.Text>
                {product.price}$
              </Card.Text>
            </div>

            <div className="menu-item-desc">
                {product.description}
            </div>

          </Card.Body>
        </Card>
        </div>
      </Col>
    
  )
}

export default MenuItem