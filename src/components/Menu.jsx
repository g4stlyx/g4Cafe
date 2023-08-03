import { useContext, useEffect, useState } from "react"
import ProductsContext from "../context/productsContext"
import MenuItem from "./MenuItem"
import "../styles/menu.css"
import MenuHeader from "./MenuHeader"

function Menu() {

    const {categories,setChosenProducts,chosenCategory,chosenProducts,fetchProductsByCategory,setChosenCategory} = useContext(ProductsContext)

    const [headerCategory,setHeaderCategory] = useState("")

    useEffect(()=>{
        setChosenCategory("Hot Drinks")
        fetchProductsByCategory("Hot Drinks")
    },[])

    useEffect(()=>{
        fetchProductsByCategory(chosenCategory.category_name)
    },[chosenCategory.category_name])


    // I know this could be coded way better, but i am tired -also it works-
    if(window.location.hash==""||window.location.hash=="#Hot%20Drinks"){
        setTimeout(()=>{
            setChosenProducts(categories[0].category_products)
            setHeaderCategory("Hot Drinks")
        },1)
    }
    else if(window.location.hash=="#Cold%20Drinks"){
        setTimeout(()=>{
            setChosenProducts(categories[1].category_products)
            setHeaderCategory("Cold Drinks")
        },1)
    }
    else if(window.location.hash=="#Smoothies"){
        setTimeout(()=>{
            setChosenProducts(categories[2].category_products)
            setHeaderCategory("Smoothies")
        },1)
    }
    else if(window.location.hash=="#Sodas"){
        setTimeout(()=>{
            setChosenProducts(categories[3].category_products)
            setHeaderCategory("Sodas")
        },1)
    }
    else if(window.location.hash=="#Juices"){
        setTimeout(()=>{
            setChosenProducts(categories[4].category_products)
            setHeaderCategory("Juices")
        },1)
    }
    else if(window.location.hash=="#Milkshakes"){
        setTimeout(()=>{
            setChosenProducts(categories[5].category_products)
            setHeaderCategory("Milkshakes")
        },1)
    }
    else if(window.location.hash=="#Sandwiches"){
        setTimeout(()=>{
            setChosenProducts(categories[6].category_products)
            setHeaderCategory("Sandwiches")
        },1)
    }
    else if(window.location.hash=="#Desserts"){
        setTimeout(()=>{
            setChosenProducts(categories[7].category_products)
            setHeaderCategory("Desserts")
        },1)
    }
    

    return (
        
        <div className="menu-main">
            
            <div className="menu-header">
                <MenuHeader headerCategory={headerCategory} />
            </div>

            <div className="menu-products">

            {
                chosenProducts.map(product=>{
                    return(
                        <MenuItem key={product.name} product={product} />
                    ) 
                })
            }
            </div>
        </div>
    )
}

export default Menu