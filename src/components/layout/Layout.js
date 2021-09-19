import { Fragment } from "react"
import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css';

const Layout = (props) => {
    return <Fragment>
        <MainNavigation onShowModal={props.onShowModal} />
        <main className={classes.main}>{props.children}</main>
      </Fragment>
}
export default Layout;