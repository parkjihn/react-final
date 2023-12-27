import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../../.."
import { changeCountAction } from "../../../store/cartReducer"
import styles from './CartPage.module.css';
import OrderForm from "./CartForm/OrderForm";
import { ReactComponent as CloseIcon } from '../../assets/CartPage/cart-close-icon.svg';


function CartPage(){

    const dispatch = useDispatch()
    const cartList = useSelector(store => store.cartList)

    const countAction = (id, count) => dispatch(changeCountAction({id,count}))

    return(
        <div className={styles.cartPage}>
        <h2>Cart page</h2>
        <div className={styles.cartList}>
            {cartList.map(elem => 
                <div key={elem.id} className={styles.cartItem}>
                    <img src={BASE_URL+elem.image} className={styles.cartItemImage}/>
                    <div className={styles.itemDetails}>
                        <p className={styles.cartItemTitle}>{elem.title}</p>
                        <div className={styles.cartItemCount}>
                            <button onClick={() => countAction(elem.id, -1)} className={styles.countButton}>-</button>
                            <span className={styles.countValue}>{elem.count}</span>
                            <button onClick={() => countAction(elem.id, 1)} className={styles.countButton}>+</button>
                        </div>
                        <p className={styles.cartItemPrice}>{`$${elem.price}`}</p>
                        <p className={styles.originalPrice}>{`$${elem.originalPrice}`}</p>
                    </div>
                    <button className={styles.removeItemButton} onClick={() => {/* handle remove item */}}>
                        <CloseIcon className={styles.closeIcon} />
                    </button>
                </div>
            )}
        </div>
        <OrderForm/>
    </div>
    )
}

export default CartPage