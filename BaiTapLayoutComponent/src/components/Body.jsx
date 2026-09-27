import Banner from "./Banner";
import Item from "./Item";

import React from "react";

export default function Body() {
  const listItems = [
    {
      icon: "bi-collection",
      title: "Fresh new layout",
      desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      icon: "bi-cloud-download",
      title: "Free to download",
      desc: "As always, Start Bootstrap has a powerful collection of free templates.",
    },
    {
      icon: "bi-card-heading",
      title: "Jumbotron hero header",
      desc: "The heroic part of this template is the jumbotron hero header!",
    },
    {
      icon: "bi-bootstrap",
      title: "Feature boxes",
      desc: "We've created some custom feature boxes using Bootstrap icons!",
    },
    {
      icon: "bi-code",
      title: "Simple clean code",
      desc: "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
      icon: "bi-patch-check",
      title: "A name you trust",
      desc: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          {listItems.map((item, index) => (
            <Item
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
