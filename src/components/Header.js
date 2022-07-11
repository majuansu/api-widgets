import React from "react";
import Link from "./Link";

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" href="/">
        Photos
      </Link>
      <Link className="item" href="/videos">
        Videos
      </Link>
      <Link className="item" href="/translate ">
        Translate
      </Link>
      <Link className="item" href="/wikipedia">
        Wikipedia
      </Link>
    </div>
  );
}
