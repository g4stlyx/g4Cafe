import CategoryItem from "./CategoryItem"

function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {
        categories.map(category=>{
          return(
            <CategoryItem key={category.category_name} category={category} />
          )
        })
      }
    </div>
  )
}

export default CategoryList