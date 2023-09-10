const { config } = require('./config');

require('ignore-styles');
require('asset-require-hook')({
  extensions: ['svg', 'css', 'less', 'jpg', 'png', 'gif'],
});
windowPolyfill();
require('./server');
/**
 * window兼容
 */
function windowPolyfill() {
  const localStorage = require('localStorage');
  global.localStorage = localStorage;
  global.sessionStorage = localStorage;
  const { JSDOM } = require('jsdom');
  const { window } = new JSDOM('<!DOCTYPE html><body></body>');
  window.apiHost = 'http://127.0.0.1:' + config.port;
  global.MutationObserver = window.MutationObserver;
  global.window = window;
  global.self = window;
  global.location = window.location;
  global.window.localStorage = localStorage;
  global.document = window.document;
  global.navigator = window.navigator;
}
