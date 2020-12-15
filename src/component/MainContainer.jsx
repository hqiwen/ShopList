import React from "react";
import Footer from "../component/footer";
import Header from "../component/header";

const MainContainer: React.FC = (props) => {
  return (
    <div>
      <Header />
      <main className="p-0-10">{props.children}</main>
      <Footer />
    </div>
  );
};

export default MainContainer;
