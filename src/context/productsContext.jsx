import { createContext,useState } from "react";
import axios from "axios"

const ProductsContext = createContext()

function ProductProvider({children}){

    const [categories,setCategories] = useState([])
    const [chosenCategory,setChosenCategory] = useState([])
    const [chosenProducts,setChosenProducts] = useState([])
    
    const [isAboutOpen,setIsAboutOpen] = useState(false)

    const fetchCategories = async ()=>{
        const db = await axios.get("https://my-json-server.typicode.com/g4stlyx/g4CafeData/products")
        setCategories(db.data)
    }

    const fetchProductsByCategory = async (category_name)=>{
        const wantedCategory = categories.filter(products=>{
            return products.category_name === category_name
        })

        setChosenCategory(wantedCategory)
        setChosenProducts(chosenCategory[0].category_products)
    }

    const sharedValuesAndMethods = {
        categories,
        fetchCategories,
        chosenCategory,
        setChosenCategory,
        chosenProducts,
        setChosenProducts,
        fetchProductsByCategory,
        isAboutOpen,
        setIsAboutOpen
        
    }

    return(
        <ProductsContext.Provider value={sharedValuesAndMethods}>
            {children}
        </ProductsContext.Provider>
    )

}

export {ProductProvider}
export default ProductsContext