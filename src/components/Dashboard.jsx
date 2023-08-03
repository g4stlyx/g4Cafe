import { useContext } from 'react'
import ProductsContext from '../context/productsContext'
import "../styles/dashboard.css"
import CategoryList from './CategoryList'
import { Button, Card } from 'react-bootstrap'
import About from './About'

function Dashboard() {

    const { categories, isAboutOpen, setIsAboutOpen } = useContext(ProductsContext)

    return (
        <div>
            <div className='dashboard-main' 
            style={{filter: isAboutOpen?"blur(4px)":"none"}}
            onClick={isAboutOpen ? () => setIsAboutOpen(false) : console.log("g4 was here!")}>

                <div className='dashboard-brand'>
                    <Card className='dashboard-card'>
                        <Card.Img variant="left" src="https://images-pardonapp.s3.eu-central-1.amazonaws.com/restaurants/8369df07-525b-4817-9b29-fa93fcd15333.png"
                            className='dashboard-brand-image'
                        />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "33px" }}>g4 Cafe</Card.Title>
                            <Card.Text className='dashboard-text'>
                                <p>The data of categories, and products in them is AI generated. Including names, prices and descriptions.</p>
                                <p>btw here is the website I kind of cloned while creating this project: webmenum.pardonapp.co/en/tincatinca</p>
                            </Card.Text>
                            <Button variant="danger" onClick={() => setIsAboutOpen(true)}>About Us</Button>
                        </Card.Body>
                    </Card>
                </div>


                <div className='menu-categories'>
                    <h4 style={{ marginLeft: "0", marginRight: "auto" }}>Menu Categories</h4>
                    <CategoryList categories={categories} />
                </div>
            </div>

            <div>
                {isAboutOpen && <About />}
            </div>
        </div>

    )
}

export default Dashboard