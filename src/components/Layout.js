
import styles from './Layout.module.css';
import NavBar from './navbar';

function Layout(props) {
    return (
        <div>
            <NavBar></NavBar>
            <main className={styles.main}> {props.children}</main>

        </div>
    )
}

export default Layout;