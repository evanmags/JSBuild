const colors = {
  black: "#343434",
  white: "#f1e1e1",
  red: "#f1c1c1",
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
    width: "85%"
  },
  ".red": {
    color: "red"
  },
  ".underline": {
    text_decoration: "underline"
  }
};

export { colors , styles };
