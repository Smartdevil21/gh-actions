import Link from "next/link";
import React from "react";

function About() {
  return (
    <div>
      <p>THis is about page</p>
      <Link href={"/"} passHref>
        Home
      </Link>
    </div>
  );
}

export default About;
