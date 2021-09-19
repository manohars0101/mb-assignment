import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Mind Bowser</div>
            <nav className={classes.nav}>
                <ul>
                    <li ><button className={classes.navBtn} onClick={props.onShowModal}>Add User</button></li>
                    <li><Link to="/"><button className={classes.navBtn}>Home</button></Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;