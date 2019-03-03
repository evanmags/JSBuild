import {
  c,
  homeContent,
  aboutContent,
  styleContent,
  contactContent
} from "../exports.js";

function changeTab(ele) {
  document.querySelectorAll("#menuButton").forEach(l => {
    l.classList.remove("active");
  });
  ele.DOMelement.classList.add("active");
}

const routes = {
  home: () => {
    c.container.setHas([...homeContent]);
    changeTab(c.home);
  },
  about: () => {
    c.container.setHas([...aboutContent]);
    changeTab(c.about);
  },
  style: () => {
    c.container.setHas([...styleContent]);
    changeTab(c.about);
  },
  contact: () => {
    c.container.setHas([...contactContent]);
    changeTab(c.contact);
  }
};

export { routes };
