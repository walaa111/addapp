cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-admob-simple.AdMob",
    "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
    "pluginId": "cordova-plugin-admob-simple",
    "clobbers": [
      "window.plugins.AdMob"
    ]
  },
  {
    "id": "onesignal-cordova-plugin.OneSignal",
    "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
    "pluginId": "onesignal-cordova-plugin",
    "clobbers": [
      "OneSignal"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-admob-sdklibs": "2.1.6",
  "cordova-plugin-admob-simple": "3.3.4",
  "onesignal-cordova-plugin": "2.2.2"
};
// BOTTOM OF METADATA
});