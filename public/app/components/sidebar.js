import { sec, font } from "../exports.js";
const colors = sec;

export const sidebarItems = props => {
  let arr = [];
  let itemnum = 0;
  let headnum = 0;
  props.forEach(el => {
    if (el.type === "item") {
      itemnum++;
      const item = {
        a: {
          id: `sidebarItem${itemnum}`,
          classList: `sidebarItem`,
          href: el.href
        },
        has: [el.text],
        style: {
          color: "#333",
          text_decoration: "none",
          font_size: "12px",
          margin: "5px 0",
          flex: "0 0 24px",
          display: "flex",
          align_items: "center",
          text_transform: "capitalize",
          padding_left: "12px",
          border_left: "0px solid #d88282",
          background_image: `linear-gradient(to right, ${colors.dark} 0px, ${
            colors.dark
          } 150px)`,
          background_repeat: "no-repeat",
          background_position: "170px 0px",
          box_shadow: "0 0 0 0 transparent",
          transition: "all .1s, background .1s .08s",
          psudo: {
            ":hover": {
              color: colors.dark,
              border_left: `4px solid ${colors.dark}`,
              padding_left: "8px"
            },
            ".viewing": {
              color: colors.light,
              padding_left: "8px",
              background_position: `0px 0px`,
              border_left: `4px solid ${colors.dark}`,
              transition: "all .1s, box-shadow .1s .08s"
            }
          }
        },
        events: {
          click: e => {
            document.querySelectorAll(".sidebarItem").forEach(li => {
              li.classList.remove("viewing");
            });
            e.target.classList.toggle("viewing");
          }
        }
      };
      arr.push(item);
    } else if (el.type === "head") {
      headnum++;
      const head = {
        h5: {
          id: `sidebarHead${headnum}`,
          classList: `sidebarHead`
        },
        has: [el.text],
        style: {
          color: "#333",
          text_decoration: "none",
          font_size: "13px",
          margin: "10px 0 5px 0",
          flex: "0 0 25px",
          display: "flex",
          align_items: "flex-end",
          text_transform: "capitalize",
          padding_left: "4px",
          border_bottom: `2px solid ${colors.dark}`
        }
      };
      arr.push(head);
    }
  });
  return arr;
};

export const sidebar = {
  div: {
    id: "sidebar"
  },
  has: sidebarItems([
    { text: "Components", type: "head" },
    { text: "Building", href: "#about", type: "item" },
    { text: "Dynamic Components", href: "#clock", type: "item" },
    { text: "Event Handling", href: "#events", type: "item" },
    { text: "Function Components", href: "#functions", type: "item" },
    { text: "list Example", href: "#list", type: "item" },
    { text: "Styling", type: "head" },
    { text: "Component styles", href: "#style", type: "item" },
    { text: "psudo styles", href: "#psudo", type: "item" },
    { text: "Global Styles", href: "#global", type: "item" },
    { text: "Routing", type: "head" },
    { text: "Set up", href: "#router", type: "item" },
    { text: "Paths Object", href: "#paths", type: "item" },
  ]),
  style: {
    position: "sticky",
    top: "120px",
    margin: "0 35px 0 -160px",
    min_width: "160px",
    display: "flex",  
    align_items: "stretch",
    flex_direction: "column"
  },
};