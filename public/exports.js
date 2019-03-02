//  Exports is a 'merge' file. i.e. it takes all of your files and puts them in a package.
//  the general structure of this file should be as follows:
//
//      Styles
//        |
//      Components
//        |
//      Pages
//        |
//      Routes
//
//  In general routes use pages, pages use components, and components use styles.
//  Your app uses all of these and accesses them from here.

//styles import comes first
export { colors, styles } from "./styles/styles.js";

//then import and export components
import * as c from "./components/components.js";
export { c };

//export pages
export { homeContent } from "./pages/home.js";
export { aboutContent } from "./pages/about.js";
export { styleContent } from "./pages/style.js";
export { contactContent } from "./pages/contact.js";

//routes comes last
export { routes } from "./routes/paths.js";
