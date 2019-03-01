import { c, homeContent, aboutContent, contactContent } from "../exports.js";

function changeTab(i) {
  document.querySelectorAll("#menuButton").forEach(li => {
    li.classList.remove("active");
  });
  document.querySelectorAll("#menuButton")[i].classList.toggle("active");
}

const routes = {
  home: e => {
    c.container.setHas([...homeContent]);
    changeTab(0)
  },
  about: e => {
    c.container.setHas([...aboutContent]);
    changeTab(1)
  },
  contact: e => {
    c.container.setHas([...contactContent]);
    changeTab(2)
  }
};

export { routes };
