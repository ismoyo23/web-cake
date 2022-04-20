// containers
import React, { useState } from "react";

// component
import { NavbarOrganism } from "../organism/navbarOrganism";
import { HomeOrganism } from "../organism/homeOrganism";

export let NavBar = () => {
  return (
    <>
      <NavbarOrganism />
      <HomeOrganism />
    </>
  );
};
