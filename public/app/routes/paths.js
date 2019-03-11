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

function changeMenu(index) {
  const elements = document.querySelectorAll(".sidebarItem")
  if(!elements[index].classList.contains("viewing")){
    elements.forEach(l => {
      l.classList.remove("viewing");
    });
    elements[index].classList.add("viewing");
  }
}

function gateSetHas(element, checkFor, elseSet){
  if(!element.getHas().includes(checkFor)){
    element.setHas(elseSet);
  }
}

export const routes = {
  home: () => {
    c.main.removeHas(c.sidebar);
    c.container.setHas(pages.homeContent);
    changeTab(c.home);
  },
  about: () => {
    c.main.addHas(c.sidebar, 0)
    c.container.setHas(pages.aboutContent);
    changeTab(c.about);
    changeMenu(0);
  },
  clock: () => {
    c.main.addHas(c.sidebar, 0)
    c.container.setHas(pages.clockContent);
    changeTab(c.about);
    changeMenu(1);
  },
  events: () => {
    c.main.addHas(c.sidebar, 0)
    c.container.setHas(pages.eventContent);
    changeTab(c.about);
    changeMenu(2);
  },
  functions: () => {
    c.main.addHas(c.sidebar, 0)
    c.container.setHas(pages.functionContent);
    changeTab(c.about);
    changeMenu(3);
  },
  list: () => {
    c.main.addHas(c.sidebar, 0)
    c.container.setHas(pages.listContent);
    changeTab(c.about);
    changeMenu(4);
  },
  style: () => {
    c.main.addHas(c.sidebar, 0)
    c.container.setHas(pages.styleContent);
    changeTab(c.about);
    changeMenu(5);
  },
  routing: () => {
    c.main.addHas(c.sidebar, 0)
    changeTab(c.about);
    changeMenu(6);
  },
  download: () => {
    c.main.removeHas(c.sidebar);
    c.container.setHas([]);
    changeTab(c.download);
  },
  contact: () => {
    c.main.removeHas(c.sidebar);
    c.container.setHas(pages.contactContent);
    changeTab(c.contact);
  }
};