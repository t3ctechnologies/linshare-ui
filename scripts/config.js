/**
 * lsUserConfig Constant
 * @namespace linshareUiUserApp
 */
(function() {
  'use strict';

  angular
    .module('linshareUiUserApp')
    .constant('lsUserConfig', {
      baseRestUrl: 'linshare/webservice/rest/user/v2',
      //The debug mode, allow to get more information while doing any interraction in the APP.
      //It is recommended to set it to 'true' when having any trouble for reporting information from the browser console to your software vendor
      debug: false,
      localPath: 'i18n/original', //custom your i18n folder path
      postLogoutUrl: null // default : null, example 'http://my.fake.page.for.sso'
    });
})();
