const colors = {
  black: "#343434",
  trans_red: '#f1c1c166',
  light_red: "#f1e1e1",
  red: "#f1c1c1",
  yellow: '#f1e9d1',
  dark_yellow: '#ebe0bd',
  lightgrey: "#989898"
};

const styles = {
  "*": {
    margin: 0,
    padding: 0,
    box_sizing: "border-box",
    _webkit_font_smoothing: "antialiased",
    _moz_osx_font_smoothing: "grayscale"
  },
  ".green": {
    background: "#f1e9d1"
  },
  "#menuButton.active": {
    color: "#d88282",
    background: colors.red,
    font_weight: "bold",
    padding_bottom: `4px`,
    border_top: `4px solid #d88282`,
    border_bottom: "none"
  },
  "#menuButton.hover": {
    color: "#d88282",
    border_top: "none",
    border_bottom: `4px solid #d88282`,
    padding_top: `4px`
  },
  ".codeblock .code": {
    margin: "0 20px"
  },
  hr: {
    width: "65%"
  },
  ".red": {
    color: "red"
  },
  ".underline": {
    text_decoration: "underline"
  },
  "#footer p": {
    margin: "0",
    font_size: '12px'
  }
};

export { colors , styles };
