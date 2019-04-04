import { link, subhead } from "./components.js"
import { sec, font } from "../exports.js";

let colors = sec;

export const openLogo = {
  span: {
    id: "logo"
  },
  has: ["Curly.js"],
  style: {
    display: "inline-flex",
    justify_content: "center",
    align_items: "center",
    width: "0px",
    overflow: "hidden",
    transition: "all .75s cubic-bezier(.3,.7,.36,1.5)"
  },
  timers: {
    logoOpen() {
      return setTimeout(() => {
        openLogo.setStyle({"width": "18rem"});
      }, 270);
    }
  }
};

export const bannerHead = {
  div: {
    id: "bannerHead" },

  has: ["{", openLogo, "}"],
  style: {
    font_size: "5rem",
    text_align: "center",
    font_family: font.family.head 
  } 
};

export const bannerButton = link("Get Started!");
bannerButton.style = {
  color: colors.dark,
  border: `1px solid ${colors.dark}`,
  border_radius: "3px",
  text_decoration: "none",
  background_image: `linear-gradient(${colors.dark}, ${colors.dark})`,
  background_repeat: 'no-repeat',
  background_position: '0px 45px',
  text_align: "center",
  transition: "all .2s",
  padding: "8px 15px",
  margin: "30px",
  psudo: {
    ":hover": {
      color: colors.light,
      background_position: '0px 0px' 
    } 
  } 
};

export const bannerSub = subhead({ children: ["Building Object Oriented Websites"] });
export const banner = {
  div: {
    classList: 'bannerLarge' },

  has: [bannerHead, bannerSub, bannerButton],
  style: {
    height: '100vh',
    width: '100%',
    color: colors.dark,
    display: 'flex',
    flex_direction: 'column',
    justify_content: 'center',
    align_items: 'center' 
  } 
};
