import MainNavigation from "./main-navigation";

const { Fragment } = require("react");

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
