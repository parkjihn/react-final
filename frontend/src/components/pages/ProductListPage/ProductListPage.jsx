
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchAllProductsSale, fetchProductsByCategories } from "../../../asyncActions/products";
import { useLocation, useParams } from "react-router-dom";
import { BASE_URL } from "../../..";
import { addNewItemAction } from "../../../store/cartReducer";
import elem from './ProductListPage.module.css';
import FilterBar from '../../UI/FilterBar/FilterBar'; // Import the FilterBar component

function ProductListPage({ type }) {
    const { categories_name, products } = useSelector(store => store.productList);
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();
    const { discon } = useParams()
    const [saleChecked, setSaleChecked] = useState(false);
    const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (type === 'all') {
            dispatch(fetchAllProducts());
        } else if (type === 'sale') {
            dispatch(fetchAllProductsSale());
        } else if (type === 'categories') {
            dispatch(fetchProductsByCategories(id));
        }
        document.body.scrollIntoView({ behavior: "smooth" });
    }, [location.pathname, type, id, dispatch]);

    useEffect(() => {
        let updatedProducts = products.filter(product => {
            const showBasedOnSale = !saleChecked || (product.discountPercentage && product.discountPercentage > 0);
            const withinPriceRange = product.price >= priceRange.min && product.price <= priceRange.max;
            const hasDiscountPrice = !!product.discont_price; // Check if the product has discont_price
            return (showBasedOnSale && withinPriceRange) || hasDiscountPrice; // Include discont_price products without filter
        });
        setFilteredProducts(updatedProducts);
    }, [products, saleChecked, priceRange]);

    return (
        <div>
            <h1 className={elem.categories_name}>{categories_name}</h1>
            <FilterBar setSaleChecked={setSaleChecked} setPriceRange={setPriceRange} saleChecked={saleChecked} />
            <div className={elem.productListContainer}>
                {filteredProducts.map(product => (
                    <div key={product.id} className={elem.productCard}>
                        <img src={BASE_URL + product.image} width={200} alt={product.title} />
                        <p className={elem.productTitle}>{product.title}</p>
                        <p className={elem.productPrice}>{product.price}</p>
                        <p className={elem.productDiscountPrice}>{product.discont_price}</p>
                        <button
                            className={elem.addToCartButton}
                            onClick={() => dispatch(addNewItemAction({ ...product, count: 1 }))}
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductListPage;
