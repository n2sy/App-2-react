
import styles from './Layout.module.css';
import NavBar from './navbar';

function Layout(props) {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    )
}

export default Layout;