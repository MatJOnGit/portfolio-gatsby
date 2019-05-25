const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Development\\Projects\\Perso\\React\\portfolio-gatsby\\.cache\\dev-404-page.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("D:\\Development\\Projects\\Perso\\React\\portfolio-gatsby\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Development\\Projects\\Perso\\React\\portfolio-gatsby\\src\\pages\\index.js"))),
  "component---src-pages-recent-projects-js": hot(preferDefault(require("D:\\Development\\Projects\\Perso\\React\\portfolio-gatsby\\src\\pages\\recent-projects.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("D:\\Development\\Projects\\Perso\\React\\portfolio-gatsby\\src\\pages\\resume.js")))
}

