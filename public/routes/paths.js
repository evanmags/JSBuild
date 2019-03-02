import { c, homeContent, aboutContent, styleContent, contactContent } from "../exports.js";

function changeTab(ele) {
  document.querySelectorAll("#menuButton").forEach(li => {
    li.classList.remove("active");
  });
  ele.DOMelement.classList.add('active');
}

const routes = {
  home: () => {
    console.log(document.referrer.split(`/`))
    c.container.setHas([...homeContent]);
    changeTab(c.home)
  },
  about: () => {
    c.container.setHas([...aboutContent]);
    changeTab(c.about)
  },
  style: () => {
    c.container.setHas([...styleContent]);
    changeTab(c.about)
  },
  contact: () => {
    c.container.setHas([...contactContent]);
    changeTab(c.contact)
  }
};

export { routes };
