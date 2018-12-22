'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./postonents.cjs.production.js');
} else {
  module.exports = require('./postonents.cjs.development.js');
}
