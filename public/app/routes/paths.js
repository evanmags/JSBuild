import { c, pages } from "../exports.js";

function changeTab(ele) {
  if (!ele.DOMelement.classList.contains("active")) {
    document.querySelectorAll("a[id*='menuButton']").forEach(l => {
      l.classList.remove("active");
    });
    ele.DOMelement.classList.add("active");
  }
}

function changeMenu(index) {
  const elements = document.querySelectorAll(".sidebarItem");
  if (!elements[index].classList.contains("viewing")) {
    elements.forEach(l => {
      l.classList.remove("viewing");
    });
    elements[index].classList.add("viewing");
  }
}

function gateSetHas(element, checkFor, elseSet) {
  if (!element.getHas().includes(checkFor)) {
    element.setHas(elseSet);
  }
}

function docsGenericRoute(id){
    c.main.addHas(c.sidebar, 0);
    changeTab(c.about);
    changeMenu(id);
}

function fourOHfour(){
  docsGenericRoute(0)
  c.container.setHas(pages.four_O_four);
}

export const routes = {
  // landing page
  home: () => {
    c.main.removeHas(c.sidebar);
    c.container.setHas(pages.homeContent);
    changeTab(c.home);
  },

  //docs start
  about: () => {
    docsGenericRoute(0)
    c.container.setHas(pages.aboutContent);
  },
  clock: () => {
    docsGenericRoute(1)
    c.container.setHas(pages.clockContent);
  },
  events: () => {
    docsGenericRoute(2)
    c.container.setHas(pages.eventContent);
  },
  functions: () => {
    docsGenericRoute(3)
    c.container.setHas(pages.functionContent);
  },
  list: () => {
    docsGenericRoute(4)
    c.container.setHas(pages.listContent);
  },
  style: () => {
    docsGenericRoute(5)
    c.container.setHas(pages.styleContent);
  },
  psudo: () => {
    docsGenericRoute(6)
    c.container.setHas(pages.psudoContent);

  },
  routing: () => {
    docsGenericRoute(7);
  },
  fourOHfour: () => {
    fourOHfour();
  },

  // downloads
  download: () => {
    c.main.removeHas(c.sidebar);
    c.container.setHas(pages.downloadContent);
    changeTab(c.download);
  },

  // contact and links
  contact: () => {
    c.main.removeHas(c.sidebar);
    c.container.setHas(pages.contactContent);
    changeTab(c.contact);
  }
};
