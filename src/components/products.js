import './products.scss'
import logo from '../Assets/Logo_ML.png'
const Products=()=>{
    return(
        <body>
        <div className="product_container-outside">
            <p>hola</p>
            <div className='product_container'>
                <div>
                <img className='product_img'src={logo}></img>
                </div>
                <div>
                <p className='product_price'>price</p>
                <h3 className='product_description'>description</h3>
                </div>
                <div>
                <p className='product_place'>Ubicacion</p>
                </div>
             
              
                

            </div>
        </div>
        </body>
    )
}
export default Products;