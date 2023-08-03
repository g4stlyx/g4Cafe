import { useContext, useEffect } from "react"
import { Nav } from "react-bootstrap"
import ProductsContext from "../context/productsContext"

function MenuHeader({headerCategory}) {

    const { categories, chosenCategory, setChosenCategory,fetchProductsByCategory } = useContext(ProductsContext)

    useEffect(()=>{
        fetchProductsByCategory("Hot Drinks")
    },[])

    return (
        <div style={{width:"100%"}} className="menu-header-container">
            <Nav fill variant="tabs" activeKey={headerCategory}>
                {
                    categories.map(category=>{
                        return (
                            <Nav.Item id={category.category_name} key={category.category_name} className="menu-header-items">
                                <Nav.Link 
                                onClick={()=>setChosenCategory(category)}
                                className="menu-header-item-button" 
                                href={"#"+chosenCategory.category_name} 
                                eventKey={category.category_name}>
                                    {category.category_name}</Nav.Link>
                            </Nav.Item>
                        )
                    })
                }
            </Nav>
        </div>
    )
}

export default MenuHeader