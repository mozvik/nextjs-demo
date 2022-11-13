import Footer from "./Footer";
import classes from "./Layout.module.css";
import Nav from "./Nav";

function Layout(props: any) {
  return (
    <div className={classes.page}>
      <Nav />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
