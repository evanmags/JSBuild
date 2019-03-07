import {
  c,
  homeContent,
  aboutContent,
  clockContent,
  styleContent,
  contactContent
} from "../exports.js";

function changeTab(ele) {
  document.querySelectorAll("#menuButton").forEach(l => {
    l.classList.remove("active");
  });
  ele.DOMelement.classList.add("active");
}

function changeMenu(ele) {
  document.querySelectorAll(".sidebarItem").forEach(l => {
    l.classList.remove("viewing");
  });
  document.querySelector(ele).classList.add("viewing");
}

export const routes = {
  home: () => {
    c.main.setHas([c.container]);
    c.container.setHas([...homeContent]);
    changeTab(c.home);
  },
  about: () => {
    c.main.setHas([c.sidebar, c.container]);
    c.container.setHas([...aboutContent]);
    changeTab(c.about);
    changeMenu("#sidebarItem0");
  },
  style: () => {
    c.main.setHas([c.sidebar, c.container]);
    c.container.setHas([...styleContent]);
    changeTab(c.about);
    changeMenu("#sidebarItem4");
  },
  clock: () => {
    c.main.setHas([c.sidebar, c.container]);
    c.container.setHas([...clockContent]);
    changeTab(c.about);
    changeMenu("#sidebarItem1");
  },
  contact: () => {
    c.main.setHas([c.container]);
    c.container.setHas([...contactContent]);
    changeTab(c.contact);
  }
};