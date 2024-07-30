import React from "react";
import Container from "./Container";
import SubHeading from "./SubHeading";
import MainHeading from "./MainHeading";

const Header = () => {
  return (
    <header className="mt-3">
      <Container>
        <MainHeading className="mt-5">React-Invoice App</MainHeading>
        <SubHeading className="mb-1">Daniel's Solutions</SubHeading>
      </Container>
    </header>
  );
};

export default Header;
