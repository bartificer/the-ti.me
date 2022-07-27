// import bootstrap JavaScript
import * as BS from 'bootstrap'

// import bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// import jQuery
import $ from 'jquery';

// import Luxon
import { DateTime } from 'luxon'

// import forked version of is.js
import is from 'is-it-check';

// import font awesome
import '@fortawesome/fontawesome-free/js/all.min.js'

// import custom web font
import "@fontsource/share-tech-mono"

// do something
console.log('hello world?', typeof BS);

// make some imported libs effectively global for easy debugging
window.BS = BS;
window.$ = $;
window.DateTime = DateTime;
window.is = is;