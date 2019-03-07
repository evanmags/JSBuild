import {
  c,
  pages
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
    c.container.setHas(pages.homeContent);
    changeTab(c.home);
  },
  about: () => {
    gateSetHas(c.main, c.sidebar, [c.sidebar, c.container])
    c.container.setHas(pages.aboutContent);
    changeTab(c.about);
    changeMenu("#sidebarItem0");
  },
  clock: () => {
    gateSetHas(c.main, c.sidebar, [c.sidebar, c.container])
    c.container.setHas(pages.clockContent);
    changeTab(c.about);
    changeMenu("#sidebarItem1");
  },
  events: () => {
    gateSetHas(c.main, c.sidebar, [c.sidebar, c.container])
    c.container.setHas(pages.eventContent);
    changeTab(c.about);
    changeMenu("#sidebarItem2");
  },
  functions: () => {
    gateSetHas(c.main, c.sidebar, [c.sidebar, c.container])
    c.container.setHas(pages.functionContent);
    changeTab(c.about);
    changeMenu("#sidebarItem3");
  },
  list: () => {
    gateSetHas(c.main, c.sidebar, [c.sidebar, c.container])
    c.container.setHas(pages.listContent);
    changeTab(c.about);
    changeMenu("#sidebarItem4");
  },
  conditions: () => {},
  style: () => {
    gateSetHas(c.main, c.sidebar, [c.sidebar, c.container])
    c.container.setHas(pages.styleContent);
    changeTab(c.about);
    changeMenu("#sidebarItem5");
  },
  routing: () => {},
  contact: () => {
    c.main.setHas([c.container]);
    c.container.setHas(pages.contactContent);
    changeTab(c.contact);
  }
};