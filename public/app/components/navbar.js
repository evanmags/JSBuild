import { sec, font } from '../exports.js';
const color = sec;

export const menuBrand = {
  a: {
    id: 'brand',
    href: '#home'
  },

  has: ['{Curly.js}'],
  style: {
    color: color.dark,
    font_size: '1rem',
    flex: '1 1 40px',
    height: '100%',
    padding_bottom: '2px',
    max_width: '100px',
    display: 'flex',
    text_decoration: 'none',
    justify_content: 'center',
    align_items: 'center',
    margin_right: 'auto',
    background_image: `linear-gradient(${color.dark}, ${color.dark})`,
    background_repeat: 'no-repeat',
    background_position: '0 -52px',
    transition: 'all .2s, margin 0s',
    psudo: {
      ':hover': {
        color: color.light,
        background_position: '0 0'
      }
    }
  }
};

export const menuButton = ({ ...props }) => {
  return {
    a: {
      id: `menuButton_${props.name}`,
      classList: props.class || 'menuButton',
      href: props.href
    },
    has: [props.name],
    style: {
      color: color.dark,
      text_decoration: 'none',
      font_size: font.size.h6,
      flex: '1 1 40px',
      max_width: '100px',
      height: '100%',
      padding_bottom: '2px',
      display: 'flex',
      justify_content: 'center',
      align_items: 'center',
      text_transform: 'uppercase',
      psudo: {
        '::after': {
          position: 'absolute',
          bottom: '0px',
          content: `''`,
          height: '0px',
          width: '100px',
          z_index: '-1',
          background: color.dark,
          transition: 'all .2s'
        },

        '.active::after': {
          bottom: 'calc(100% - 5px)',
          height: `5px`
        },

        ':hover::after': {
          height: `5px`
        },

        '.active:hover::after': {
          bottom: '0px',
          height: `5px`
        }
      }
    }
  };
};
export const home = menuButton({
  name: 'home',
  href: '#home',
  class: 'altered'
});
export const about = menuButton({ name: 'about', href: '#about' });
export const download = menuButton({ name: 'download', href: '#download' });
export const contact = menuButton({ name: 'contact', href: '#contact' });

export const menu = {
  div: {
    id: 'menu'
  },
  has: [menuBrand, home, about, download, contact],
  style: {
    position: 'fixed',
    top: '0',
    height: '40px',
    width: '100vw',
    padding: '0 5vw',
    display: 'flex',
    justify_content: 'flex-end',
    align_items: 'center',
    transition: 'background .1s',
    color: '#333'
  }
};
