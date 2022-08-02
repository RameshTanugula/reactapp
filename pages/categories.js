
import styles from '../styles/Home.module.css';
import Image from 'next/image'
const Categories = (props) => {
    const onChangeCategory = (category) => {
        return props.categoryHandler(category.category)
    }
    const item = props.data;
    return (
        <div className={styles.categories} onClick={() => onChangeCategory(item)}>
            <Image src={item.image} alt="Vercel Logo" width={50} height={50} className={styles.image} />

            <div className={styles.categories}
            >{item.category}</div>
        </div>)
}
export default Categories;