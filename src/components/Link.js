import React from "react";

const Link = ({ className, href, children }) => {
  const onLinkClicked = (e) => {
    // For command click, allow browser default behaviour
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // Otherwise, prevent full page re-load and change URL manually and re-render
    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);

    document.querySelectorAll(".item").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <a className={className} href={href} onClick={onLinkClicked}>
      {children}
    </a>
  );
};

export default Link;
