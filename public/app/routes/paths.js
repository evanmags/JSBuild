import {
  c,
  homeContent,
  aboutContent,
  clockContent,
  styleContent,
  contactContent
} from "../exports.js";

function changeTab(ele) {
  if(!ele.DOMelement.classList.contains("active")){
    document.querySelectorAll("#menuButton").forEach(l => {
      l.classList.remove("active");
    });
    ele.DOMelement.classList.add("active");
  }
}

function changeMenu(ele) {
  document.querySelectorAll(".sidebarItem").forEach(l => {
    l.classList.remove("viewing");
  });
  document.querySelector(ele).classList.add("viewing");
}

function gateSetHas(element, checkFor, elseSet){
  if(!element.getHas().includes(checkFor)){
    element.setHas(elseSet);
  }
}

export const routes = {
  home: () => {
    c.main.setHas([c.container]);
    c.container.setHas([...homeContent]);
    changeTab(c.home);
  },
  about: () => {
    gateSetHas(c.main, c.sidebar, [c.sidebar, c.container])
    c.container.setHas([...aboutContent]);
    changeTab(c.about);
    changeMenu("#sidebarItem0");
  },
  style: () => {
    gateSetHas(c.main, c.sidebar, [c.sidebar, c.container])
    c.container.setHas([...styleContent]);
    changeTab(c.about);
    changeMenu("#sidebarItem5");
  },
  clock: () => {
    gateSetHas(c.main, c.sidebar, [c.sidebar, c.container])
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