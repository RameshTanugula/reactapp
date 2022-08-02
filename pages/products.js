
import styles from '../styles/Home.module.css';
import Image from 'next/image'
const Products = (props) => {
    const item = props.data;
    return (
        <div className={styles.products}>
            <Image src={item.image} alt="Vercel Logo" width={350} height={350} className={styles.image} />
            <div>
                <p>{item.title}</p>
                <p>{item.category}</p>
                <p>{item.availability}</p>
                <p>{item.price}</p>
            </div>
        </div>)
}
export default Products;