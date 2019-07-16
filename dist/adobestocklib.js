var AdobeStock =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2017 Adobe Systems Incorporated. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
// Query params properties
var QUERY_PARAMS_PROPS = {
  LOCALE: 'locale',
  SEARCH_PARAMETERS: 'search_parameters',
  RESULT_COLUMNS: 'result_columns',
  SIMILAR_IMAGE: 'similar_image',
  CATEGORY: 'category_id'
};

// http methods
var HTTPMETHOD = {
  GET: 'GET',
  POST: 'POST'
};

// environment
var ENVIRONMENT = {
  PROD: 1,
  STAGE: 2
};

// search parameters
var SEARCH_PARAMS = {
  WORDS: 'words',
  LIMIT: 'limit',
  OFFSET: 'offset',
  ORDER: 'order',
  CREATOR_ID: 'creator_id',
  MEDIA_ID: 'media_id',
  MODEL_ID: 'model_id',
  SERIE_ID: 'serie_id',
  SIMILAR: 'similar',
  SIMILAR_IMAGE: 'similar_image',
  SIMILAR_URL: 'similar_url',
  CATEGORY: 'category',
  FILTERS_3D_TYPE_ID: 'filters_3d_type_id',
  FILTERS_AGE: 'filters_age',
  FILTERS_AREA_PIXELS: 'filters_area_pixels',
  FILTERS_PREMIUM: 'filters_premium',
  FILTERS_COLORS: 'filters_colors',
  FILTERS_CONTENT_TYPE_3D: 'filters_content_type_3d',
  FILTERS_CONTENT_TYPE_ALL: 'filters_content_type_all',
  // FILTERS_EDITORIAL: 'filters_editorial', // restricted use
  FILTERS_CONTENT_TYPE_ILLUSTRATION: 'filters_content_type_illustration',
  FILTERS_CONTENT_TYPE_PHOTO: 'filters_content_type_photo',
  FILTERS_CONTENT_TYPE_VECTOR: 'filters_content_type_vector',
  FILTERS_CONTENT_TYPE_VIDEO: 'filters_content_type_video',
  FILTERS_CONTENT_TYPE_TEMPLATE: 'filters_content_type_template',
  FILTERS_HAS_RELEASES: 'filters_has_releases',
  FILTERS_ISOLATED_ON: 'filters_isolated_on',
  FILTERS_OFFENSIVE_2: 'filters_offensive_2',
  FILTERS_ORIENTATION: 'filters_orientation',
  FILTERS_PANORAMIC_ON: 'filters_panoramic_on',
  FILTERS_TEMPLATE_CATEGORY_ID: 'filters_template_category_id',
  FILTERS_TEMPLATE_TYPE_ID: 'filters_template_type_id',
  FILTERS_VIDEO_DURATION: 'filters_video_duration',
  THUMBNAIL_SIZE: 'thumbnail_size',
  GALLERY_ID: 'gallery_id'
};

var LICENSE_HISTORY_SEARCH_PARAMS = {
  LIMIT: 'limit',
  OFFSET: 'offset',
  THUMBNAIL_SIZE: 'thumbnail_size'
};

var SEARCH_PARAMS_ORDER = {
  RELEVANCE: 'relevance',
  CREATION: 'creation',
  POPULARITY: 'popularity',
  NB_DOWNLOADS: 'nb_downloads',
  UNDISCOVERED: 'undiscovered'
};

var SEARCH_PARAMS_ORIENTATION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  SQUARE: 'square',
  ALL: 'all'
};

var SEARCH_PARAMS_HAS_RELEASES = {
  TRUE: 'true',
  FALSE: 'false',
  ALL: 'all'
};

var SEARCH_PARAMS_3D_TYPES = {
  MODELS: 1,
  LIGHTS: 2,
  MATERIALS: 3
};

var SEARCH_PARAMS_TEMPLATE_CATEGORIES = {
  MOBILE: 1,
  WEB: 2,
  PRINT: 3,
  PHOTO: 4,
  FILM: 5,
  ART: 6
};

var SEARCH_PARAMS_TEMPLATE_TYPES = {
  PSDT: 1,
  AIT: 2
};

var SEARCH_PARAMS_THUMB_SIZES = {
  MEDIUM: 110,
  BIG: 160,
  XL: 500,
  XXL: 1000
};

var LICENSE_HISTORY_SEARCH_PARAMS_THUMB_SIZES = {
  MEDIUM: 110,
  BIG: 160,
  BIG_A: 220,
  BIG_N: 240,
  XL: 500,
  XXL: 1000
};

var SEARCH_PARAMS_AGE = {
  ONE_WEEK: '1w',
  ONE_MONTH: '1m',
  SIX_MONTH: '6m',
  ONE_YEAR: '1y',
  TWO_YEAR: '2y',
  ALL: 'all'
};

var SEARCH_PARAMS_VIDEO_DURATION = {
  TEN: '10',
  TWENTY: '20',
  THIRTY: '30',
  ABOVE_THIRTY: '30-',
  ALL: 'all'
};

var SEARCH_PARAMS_TYPE = {
  STRING: 0,
  INTEGER: 1,
  RANGE: 2,
  ARRAY: 3
};

var SEARCH_PARAMS_PREMIUM = {
  TRUE: 'true',
  FALSE: 'false',
  ALL: 'all'
};

// result columns
var RESULTS_COLUMNS_TOSTRING = 'result_columns[]';

var RESULT_COLUMNS = {
  NB_RESULTS: 'nb_results',
  ID: 'id',
  TITLE: 'title',
  CREATOR_NAME: 'creator_name',
  CREATOR_ID: 'creator_id',
  COUNTRY_NAME: 'country_name',
  WIDTH: 'width',
  HEIGHT: 'height',
  THUMBNAIL_URL: 'thumbnail_url',
  THUMBNAIL_HTML_TAG: 'thumbnail_html_tag',
  THUMBNAIL_WIDTH: 'thumbnail_width',
  THUMBNAIL_HEIGHT: 'thumbnail_height',
  THUMBNAIL_110_URL: 'thumbnail_110_url',
  THUMBNAIL_110_WIDTH: 'thumbnail_110_width',
  THUMBNAIL_110_HEIGHT: 'thumbnail_110_height',
  THUMBNAIL_160_URL: 'thumbnail_160_url',
  THUMBNAIL_160_WIDTH: 'thumbnail_160_width',
  THUMBNAIL_160_HEIGHT: 'thumbnail_160_height',
  THUMBNAIL_220_URL: 'thumbnail_220_url',
  THUMBNAIL_220_WIDTH: 'thumbnail_220_width',
  THUMBNAIL_220_HEIGHT: 'thumbnail_220_height',
  THUMBNAIL_240_URL: 'thumbnail_240_url',
  THUMBNAIL_240_WIDTH: 'thumbnail_240_width',
  THUMBNAIL_240_HEIGHT: 'thumbnail_240_height',
  THUMBNAIL_500_URL: 'thumbnail_500_url',
  THUMBNAIL_500_WIDTH: 'thumbnail_500_width',
  THUMBNAIL_500_HEIGHT: 'thumbnail_500_height',
  THUMBNAIL_1000_URL: 'thumbnail_1000_url',
  THUMBNAIL_1000_WIDTH: 'thumbnail_1000_width',
  THUMBNAIL_1000_HEIGHT: 'thumbnail_1000_height',
  MEDIA_TYPE_ID: 'media_type_id',
  CATEGORY: 'category',
  CATEGORY_HIERARCHY: 'category_hierarchy',
  NB_VIEWS: 'nb_views',
  NB_DOWNLOADS: 'nb_downloads',
  CREATION_DATE: 'creation_date',
  KEYWORDS: 'keywords',
  HAS_RELEASES: 'has_releases',
  COMP_URL: 'comp_url',
  COMP_WIDTH: 'comp_width',
  COMP_HEIGHT: 'comp_height',
  IS_LICENSED: 'is_licensed',
  VECTOR_TYPE: 'vector_type',
  CONTENT_TYPE: 'content_type',
  FRAMERATE: 'framerate',
  DURATION: 'duration',
  STOCK_ID: 'stock_id',
  COMPS: 'comps',
  DETAILS_URL: 'details_url',
  TEMPLATE_TYPE_ID: 'template_type_id',
  TEMPLATE_CATEGORY_IDS: 'template_category_ids',
  MARKETING_TEXT: 'marketing_text',
  DESCRIPTION: 'description',
  SIZE_BYTES: 'size_bytes',
  PREMIUM_LEVEL_ID: 'premium_level_id',
  IS_PREMIUM: 'is_premium',
  LICENSES: 'licenses',
  VIDEO_PREVIEW_URL: 'video_preview_url',
  VIDEO_PREVIEW_WIDTH: 'video_preview_width',
  VIDEO_PREVIEW_HEIGHT: 'video_preview_height',
  VIDEO_PREVIEW_CONTENT_LENGTH: 'video_preview_content_length',
  VIDEO_PREVIEW_CONTENT_TYPE: 'video_preview_content_type',
  VIDEO_SMALL_PREVIEW_URL: 'video_small_preview_url',
  VIDEO_SMALL_PREVIEW_WIDTH: 'video_small_preview_width',
  VIDEO_SMALL_PREVIEW_HEIGHT: 'video_small_preview_height',
  VIDEO_SMALL_PREVIEW_CONTENT_LENGTH: 'video_small_preview_content_length',
  VIDEO_SMALL_PREVIEW_CONTENT_TYPE: 'video_small_preview_content_type'
  // IS_EDITORIAL: 'is_editorial', // requires feature flag to use; to be released in June
};

var LICENSE_HISTORY_RESULT_COLUMNS = {
  THUMBNAIL_110_URL: 'thumbnail_110_url',
  THUMBNAIL_110_WIDTH: 'thumbnail_110_width',
  THUMBNAIL_110_HEIGHT: 'thumbnail_110_height',
  THUMBNAIL_160_URL: 'thumbnail_160_url',
  THUMBNAIL_160_WIDTH: 'thumbnail_160_width',
  THUMBNAIL_160_HEIGHT: 'thumbnail_160_height',
  THUMBNAIL_220_URL: 'thumbnail_220_url',
  THUMBNAIL_220_WIDTH: 'thumbnail_220_width',
  THUMBNAIL_220_HEIGHT: 'thumbnail_220_height',
  THUMBNAIL_240_URL: 'thumbnail_240_url',
  THUMBNAIL_240_WIDTH: 'thumbnail_240_width',
  THUMBNAIL_240_HEIGHT: 'thumbnail_240_height',
  THUMBNAIL_500_URL: 'thumbnail_500_url',
  THUMBNAIL_500_WIDTH: 'thumbnail_500_width',
  THUMBNAIL_500_HEIGHT: 'thumbnail_500_height',
  THUMBNAIL_1000_URL: 'thumbnail_1000_url',
  THUMBNAIL_1000_WIDTH: 'thumbnail_1000_width',
  THUMBNAIL_1000_HEIGHT: 'thumbnail_1000_height'
};

var LICENSE_STATE_PARAMS = {
  EMPTY: {
    EMPTY_LICENSE: ''
  },
  IMAGE: {
    STANDARD: 'standard',
    STANDARD_M: 'standard_m',
    EXTENDED: 'extended'
  },
  VIDEO: {
    VIDEO_HD: 'video_hd',
    VIDEO_4K: 'video_4k'
  },
  VECTOR_ASSETS: {
    STANDARD: 'standard',
    EXTENDED: 'extended'
  },
  ASSETS_3D: {
    STANDARD: 'standard'
  },
  TEMPLATES: {
    STANDARD: 'standard'
  }
};

var PURCHASE_STATE_PARAMS = {
  NOT_PURCHASED: 'not_purchased',
  PURCHASED: 'purchased',
  CANCELLED: 'cancelled',
  NOT_POSSIBLE: 'not_possible',
  JUST_PURCHASED: 'just_purchased',
  OVERAGE: 'overage'
};

var DOWNSAMPLE_PARAMS = {
  LONGEST_SIDE_MAXIMUM: 23000,
  LONGEST_SIDE_DOWNSAMPLE_TO: 1000
};

// Exif file format https://www.media.mit.edu/pia/Research/deepview/exif.html
var EXIF_FILE_FORMAT_PARAMS = {
  JPG_START_MARKER: 0xFFD8,
  APP1_MARKER: 0xFFE1,
  EXIF_HEADER: 0x45786966,
  TIF_HEADER: 0x4949,
  ORIENTATION_TAG: 0x0112,
  LAST_MARKER: 0xFF00
};

var Constants = function () {
  function Constants() {
    _classCallCheck(this, Constants);
  }

  _createClass(Constants, null, [{
    key: 'QUERY_PARAMS_PROPS',
    get: function get() {
      return Object.freeze(QUERY_PARAMS_PROPS);
    }
  }, {
    key: 'HTTPMETHOD',
    get: function get() {
      return Object.freeze(HTTPMETHOD);
    }
  }, {
    key: 'ENVIRONMENT',
    get: function get() {
      return Object.freeze(ENVIRONMENT);
    }
  }, {
    key: 'SEARCH_PARAMS',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS);
    }
  }, {
    key: 'LICENSE_HISTORY_SEARCH_PARAMS',
    get: function get() {
      return Object.freeze(LICENSE_HISTORY_SEARCH_PARAMS);
    }
  }, {
    key: 'SEARCH_PARAMS_ORDER',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS_ORDER);
    }
  }, {
    key: 'SEARCH_PARAMS_AGE',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS_AGE);
    }
  }, {
    key: 'SEARCH_PARAMS_ORIENTATION',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS_ORIENTATION);
    }
  }, {
    key: 'SEARCH_PARAMS_TYPE',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS_TYPE);
    }
  }, {
    key: 'SEARCH_PARAMS_HAS_RELEASES',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS_HAS_RELEASES);
    }
  }, {
    key: 'SEARCH_PARAMS_THUMB_SIZES',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS_THUMB_SIZES);
    }
  }, {
    key: 'LICENSE_HISTORY_SEARCH_PARAMS_THUMB_SIZES',
    get: function get() {
      return Object.freeze(LICENSE_HISTORY_SEARCH_PARAMS_THUMB_SIZES);
    }
  }, {
    key: 'SEARCH_PARAMS_3D_TYPES',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS_3D_TYPES);
    }
  }, {
    key: 'SEARCH_PARAMS_TEMPLATE_TYPES',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS_TEMPLATE_TYPES);
    }
  }, {
    key: 'SEARCH_PARAMS_VIDEO_DURATION',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS_VIDEO_DURATION);
    }
  }, {
    key: 'SEARCH_PARAMS_TEMPLATE_CATEGORIES',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS_TEMPLATE_CATEGORIES);
    }
  }, {
    key: 'SEARCH_PARAMS_PREMIUM',
    get: function get() {
      return Object.freeze(SEARCH_PARAMS_PREMIUM);
    }
  }, {
    key: 'RESULTS_COLUMNS_TOSTRING',
    get: function get() {
      return RESULTS_COLUMNS_TOSTRING;
    }
  }, {
    key: 'RESULT_COLUMNS',
    get: function get() {
      return Object.freeze(RESULT_COLUMNS);
    }
  }, {
    key: 'LICENSE_HISTORY_RESULT_COLUMNS',
    get: function get() {
      return Object.freeze(LICENSE_HISTORY_RESULT_COLUMNS);
    }
  }, {
    key: 'SEARCH_FILES_ITERATOR_RETURN_ERROR',
    get: function get() {
      return -1;
    }
  }, {
    key: 'LICENSE_HISTORY_ITERATOR_RETURN_ERROR',
    get: function get() {
      return -1;
    }
  }, {
    key: 'LICENSE_STATE_PARAMS',
    get: function get() {
      return Object.freeze(LICENSE_STATE_PARAMS);
    }
  }, {
    key: 'PURCHASE_STATE_PARAMS',
    get: function get() {
      return Object.freeze(PURCHASE_STATE_PARAMS);
    }
  }, {
    key: 'DOWNSAMPLE_PARAMS',
    get: function get() {
      return Object.freeze(DOWNSAMPLE_PARAMS);
    }
  }, {
    key: 'EXIF_FILE_FORMAT_PARAMS',
    get: function get() {
      return Object.freeze(EXIF_FILE_FORMAT_PARAMS);
    }
  }]);

  return Constants;
}();

exports.default = Constants;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

var _http = __webpack_require__(17);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DECIMAL_RADIX = 10;

var Utilities = function () {
  function Utilities() {
    _classCallCheck(this, Utilities);
  }

  _createClass(Utilities, null, [{
    key: 'isString',

    /**
     * Checks if value is string
     * @param {object} value to be checked
     * @returns {boolean} returns true if value is string otherwise false
     */
    value: function isString(value) {
      return typeof value === 'string';
    }

    /**
     * Checks if array contains given value
     * @param {object} array object in which the value needs to be checked
     * @param {string} value to be checked
     * @returns {boolean} returns true if array contains value otherwise false
     */

  }, {
    key: 'doesArrayContainValue',
    value: function doesArrayContainValue(array, value) {
      return array.indexOf(value) > -1;
    }

    /**
     * Checks if json object contains given value
     * @param {object} json object in which the value needs to be checked
     * @param {boolean|number|string} value value to be checked in json
     * @returns {boolean} returns true if json contains value otherwise false (checks recursively)
     */

  }, {
    key: 'doesJSONContainsValue',
    value: function doesJSONContainsValue(json, value) {
      if (!Utilities.isObject(json)) {
        return false;
      }

      var hasValue = false;
      Object.keys(json).forEach(function (key) {
        if (json[key] === value) {
          hasValue = true;
        } else if (_typeof(json[key]) === 'object') {
          hasValue = hasValue || Utilities.doesJSONContainsValue(json[key], value);
        }
      });

      return hasValue;
    }

    /**
     * Checks if the variable is integer
     * @param {object} variable to be checked for
     * @returns {boolean} returns true if variable is integer otherwise false
     */

  }, {
    key: 'isInteger',
    value: function isInteger(variable) {
      // even if the variable is string but contains valid integer number return true
      if (!isNaN(variable) && variable === parseInt(variable, DECIMAL_RADIX)) {
        return true;
      }

      return false;
    }

    /**
     * Checks if the variable is array
     * @param {object} variable to be checked for
     * @returns {boolean} returns true if variable is array otherwise false
     */

  }, {
    key: 'isArray',
    value: function isArray(variable) {
      if (variable.constructor === Array) {
        return true;
      }

      return false;
    }

    /**
     * Checks if the variable is object
     * @param {object} variable to be checked for
     * @returns {boolean} returns true if variable is object otherwise false
     */

  }, {
    key: 'isObject',
    value: function isObject(variable) {
      if (variable.constructor === Object) {
        return true;
      }

      return false;
    }

    /**
     * Makes GET ajax request to given url
     * @param {string} url object for ajax request
     * @param {object} headers to be sent with ajax request
     * @returns {promise} returns promise
     */

  }, {
    key: 'makeGetAjaxCall',
    value: function makeGetAjaxCall(url, headers) {
      return new Promise(function (onSuccess, onError) {
        var settings = {
          url: url,
          headers: headers
        };

        _http2.default.doXhr(settings).then(onSuccess, onError);
      });
    }

    /**
     * Makes POST ajax request to given url
     * @param {string} url object for ajax request
     * @param {object} headers to be sent with ajax request
     * @param {data} data to be sent as post request body with request
     * @returns {promise} returns promise
     */

  }, {
    key: 'makePostAjaxCall',
    value: function makePostAjaxCall(url, headers, data) {
      return new Promise(function (onSuccess, onError) {
        var settings = {
          data: data,
          url: url,
          method: _constants2.default.HTTPMETHOD.POST,
          headers: headers
        };

        _http2.default.doXhr(settings).then(onSuccess, onError);
      });
    }

    /**
     * Makes multipart/form-data ajax request to given url
     * @param {string} url object for ajax request
     * @param {object} headers to be sent with ajax request
     * @param {data} data to be sent as post request body with request
     * @returns {promise} returns promise
     */

  }, {
    key: 'makeMultiPartAjaxCall',
    value: function makeMultiPartAjaxCall(url, headers, data) {
      return new Promise(function (onSuccess, onError) {
        var settings = {
          data: data,
          url: url,
          method: _constants2.default.HTTPMETHOD.POST,
          contentType: false,
          headers: headers
        };

        _http2.default.doXhr(settings).then(onSuccess, onError);
      });
    }
  }]);

  return Utilities;
}();

exports.default = Utilities;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function rng() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResultColumnsUtils = function () {
  function ResultColumnsUtils() {
    _classCallCheck(this, ResultColumnsUtils);
  }

  _createClass(ResultColumnsUtils, null, [{
    key: 'validate',


    /**
     * Validates the result columns array
     * @param {object} params array of result columns
     */
    value: function validate(params) {
      var supportedColumns = Object.keys(_constants2.default.RESULT_COLUMNS).map(function (key) {
        return _constants2.default.RESULT_COLUMNS[key];
      });

      params.forEach(function (param) {
        if (!_utils2.default.doesArrayContainValue(supportedColumns, param)) {
          throw new Error('Invalid Result Column \'' + param + '\'');
        }
      });
    }

    /**
     * Validates the result columns array for license history
     * @param {object} params array of result columns
     */

  }, {
    key: 'validateLicenseHistory',
    value: function validateLicenseHistory(params) {
      var supportedColumns = Object.keys(_constants2.default.LICENSE_HISTORY_RESULT_COLUMNS).map(function (key) {
        return _constants2.default.LICENSE_HISTORY_RESULT_COLUMNS[key];
      });

      params.forEach(function (param) {
        if (!_utils2.default.doesArrayContainValue(supportedColumns, param)) {
          throw new Error('Invalid Result Column \'' + param + '\'');
        }
      });
    }

    /**
     * Encodes the result columns array into uri
     * @param {object} params array of result columns
     * @returns {string} uri encoded result columns
     */

  }, {
    key: 'encodeURI',
    value: function encodeURI(params) {
      var uri = [];
      params.forEach(function (param) {
        var paramToStr = encodeURIComponent(_constants2.default.RESULTS_COLUMNS_TOSTRING) + '=' + encodeURIComponent(param);
        uri.push(paramToStr);
      });

      return uri.join('&');
    }
  }]);

  return ResultColumnsUtils;
}();

exports.default = ResultColumnsUtils;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DECIMAL_RADIX = 10;

var searchParametersConfig = {
  words: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.STRING,
    toString: '[words]'
  },
  limit: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    max: 64,
    min: 1,
    toString: '[limit]'
  },
  offset: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    toString: '[offset]'
  },
  order: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.STRING,
    exists_in: _constants2.default.SEARCH_PARAMS_ORDER,
    toString: '[order]'
  },
  creator_id: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    toString: '[creator_id]'
  },
  media_id: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    toString: '[media_id]'
  },
  model_id: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    toString: '[model_id]'
  },
  serie_id: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    toString: '[serie_id]'
  },
  similar: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    toString: '[similar]'
  },
  similar_image: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    max: 1,
    toString: '[similar_image]'
  },
  similar_url: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.STRING,
    toString: '[similar_url]'
  },
  category: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    toString: '[category]'
  },
  filters_3d_type_id: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.ARRAY,
    exists_in: _constants2.default.SEARCH_PARAMS_3D_TYPES,
    toString: '[filters][3d_type_id][]'
  },
  filters_age: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.STRING,
    exists_in: _constants2.default.SEARCH_PARAMS_AGE,
    toString: '[filters][age]'
  },
  filters_area_pixels: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.RANGE,
    toString: '[filters][area_pixels]'
  },
  filters_colors: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.STRING,
    toString: '[filters][colors]'
  },
  filters_content_type_3d: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    max: 1,
    toString: '[filters][content_type:3d]'
  },
  filters_content_type_all: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    max: 1,
    toString: '[filters][content_type:all]'
  },
  filters_content_type_illustration: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    max: 1,
    toString: '[filters][content_type:illustration]'
  },
  filters_content_type_photo: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    max: 1,
    toString: '[filters][content_type:photo]'
  },
  filters_content_type_vector: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    max: 1,
    toString: '[filters][content_type:vector]'
  },
  filters_content_type_video: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    max: 1,
    toString: '[filters][content_type:video]'
  },
  filters_content_type_template: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    max: 1,
    toString: '[filters][content_type:template]'
  },
  /* Removing until released
    filters_editorial: {
      type: Constants.SEARCH_PARAMS_TYPE.INTEGER,
      min: 0,
      max: 1,
      toString: '[filters][editorial]',
    },
  */
  filters_has_releases: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.STRING,
    exists_in: _constants2.default.SEARCH_PARAMS_HAS_RELEASES,
    toString: '[filters][has_releases]'
  },
  filters_isolated_on: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    max: 1,
    toString: '[filters][isolated:on]'
  },
  filters_offensive_2: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    max: 1,
    toString: '[filters][offensive:2]'
  },
  filters_orientation: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.STRING,
    exists_in: _constants2.default.SEARCH_PARAMS_ORIENTATION,
    toString: '[filters][orientation]'
  },
  filters_panoramic_on: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    max: 1,
    toString: '[filters][panoramic:on]'
  },
  filters_premium: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.STRING,
    exists_in: _constants2.default.SEARCH_PARAMS_PREMIUM,
    toString: '[filters][premium]'
  },
  filters_template_category_id: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.ARRAY,
    exists_in: _constants2.default.SEARCH_PARAMS_TEMPLATE_CATEGORIES,
    toString: '[filters][template_category_id][]'
  },
  filters_template_type_id: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.ARRAY,
    exists_in: _constants2.default.SEARCH_PARAMS_TEMPLATE_TYPES,
    toString: '[filters][template_type_id][]'
  },
  filters_video_duration: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.STRING,
    exists_in: _constants2.default.SEARCH_PARAMS_VIDEO_DURATION,
    toString: '[filters][video_duration]'
  },
  thumbnail_size: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    exists_in: _constants2.default.SEARCH_PARAMS_THUMB_SIZES,
    toString: '[thumbnail_size]'
  },
  gallery_id: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.STRING,
    toString: '[gallery_id]'
  }
};

var searchParametersConfigLicenseHistory = {
  limit: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    max: 100,
    min: 1,
    toString: '[limit]'
  },
  offset: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    min: 0,
    toString: '[offset]'
  },
  thumbnail_size: {
    type: _constants2.default.SEARCH_PARAMS_TYPE.INTEGER,
    exists_in: _constants2.default.LICENSE_HISTORY_SEARCH_PARAMS_THUMB_SIZES,
    toString: '[thumbnail_size]'
  }
};

var SearchParamsUtils = function () {
  function SearchParamsUtils() {
    _classCallCheck(this, SearchParamsUtils);
  }

  _createClass(SearchParamsUtils, null, [{
    key: 'validate',

    /**
     * Validates the search query parameters
     * @param {object} params object reference of search_parameters
     */
    value: function validate(params) {
      Object.keys(params).forEach(function (param) {
        var value = params[param];
        var config = searchParametersConfig[param];

        var supportedParams = Object.keys(_constants2.default.SEARCH_PARAMS).map(function (key) {
          return _constants2.default.SEARCH_PARAMS[key];
        });

        if (config === undefined || !_utils2.default.doesArrayContainValue(supportedParams, param)) {
          throw new Error('Search parameter \'' + param + '\' not supported!');
        }

        var permittedValues = [];
        if (config.exists_in && _utils2.default.isObject(config.exists_in)) {
          permittedValues = Object.keys(config.exists_in).map(function (key) {
            return config.exists_in[key];
          });
        }

        switch (config.type) {
          case _constants2.default.SEARCH_PARAMS_TYPE.STRING:
            {
              if (!_utils2.default.isString(value)) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have string value.');
              }

              if (config.exists_in && !_utils2.default.doesArrayContainValue(permittedValues, value)) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have value from [ ' + permittedValues.join(', ') + ' ].');
              }
              break;
            }

          case _constants2.default.SEARCH_PARAMS_TYPE.INTEGER:
            {
              if (!_utils2.default.isInteger(value)) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have integers.');
              }

              if (config.min !== undefined && parseInt(value, DECIMAL_RADIX) < config.min) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have integers >= ' + config.min + '.');
              }

              if (config.max !== undefined && parseInt(value, DECIMAL_RADIX) > config.max) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have integers <= ' + config.max + '.');
              }

              break;
            }

          case _constants2.default.SEARCH_PARAMS_TYPE.RANGE:
            {
              var matchResults = value.match(/^([0-9]*)-([0-9]*)$/);
              if (!matchResults) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have range values. For e.g. 0-250000.');
              }

              if (matchResults.length < 3 || matchResults[1] > matchResults[2]) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have range values from lower to higher. For e.g. 0-250000.');
              }
              break;
            }

          case _constants2.default.SEARCH_PARAMS_TYPE.ARRAY:
            {
              if (!_utils2.default.isArray(value)) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have array.');
              }

              if (config.exists_in) {
                value.forEach(function (item) {
                  if (!_utils2.default.doesArrayContainValue(permittedValues, item)) {
                    throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have values from [ ' + permittedValues.join(', ') + ' ].');
                  }
                });
              }

              break;
            }

          default:
        }
      });
    }

    /**
     * Validates the license history search query parameters
     * @param {object} params object reference of search_parameters
     */

  }, {
    key: 'validateLicenseHistory',
    value: function validateLicenseHistory(params) {
      Object.keys(params).forEach(function (param) {
        var value = params[param];
        var config = searchParametersConfigLicenseHistory[param];

        var supportedParams = Object.keys(_constants2.default.LICENSE_HISTORY_SEARCH_PARAMS).map(function (key) {
          return _constants2.default.LICENSE_HISTORY_SEARCH_PARAMS[key];
        });

        if (config === undefined || !_utils2.default.doesArrayContainValue(supportedParams, param)) {
          throw new Error('Search parameter \'' + param + '\' not supported!');
        }

        var permittedValues = [];
        if (config.exists_in && _utils2.default.isObject(config.exists_in)) {
          permittedValues = Object.keys(config.exists_in).map(function (key) {
            return config.exists_in[key];
          });
        }

        switch (config.type) {
          case _constants2.default.SEARCH_PARAMS_TYPE.INTEGER:
            {
              if (!_utils2.default.isInteger(value)) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have integers.');
              }

              if (config.exists_in && !_utils2.default.doesArrayContainValue(permittedValues, value)) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have value from [ ' + permittedValues.join(', ') + ' ].');
              }

              if (config.min !== undefined && parseInt(value, DECIMAL_RADIX) < config.min) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have integers >= ' + config.min + '.');
              }

              if (config.max !== undefined && parseInt(value, DECIMAL_RADIX) > config.max) {
                throw new Error('Invalid value of Search Parameter \'' + param + '\'. It can only have integers <= ' + config.max + '.');
              }

              break;
            }

          default:
        }
      });
    }

    /**
     * Encodes the search query parameters object into uri
     * @param {object} params object reference of search_parameters
     * @returns {string} encoded uri string
     */

  }, {
    key: 'encodeURI',
    value: function encodeURI(params) {
      var uri = [];
      Object.keys(params).forEach(function (param) {
        var value = params[param];
        var config = searchParametersConfig[param];
        var paramToStr = 'search_parameters' + config.toString;

        switch (config.type) {
          case _constants2.default.SEARCH_PARAMS_TYPE.STRING:
          case _constants2.default.SEARCH_PARAMS_TYPE.INTEGER:
          case _constants2.default.SEARCH_PARAMS_TYPE.RANGE:
            uri.push(encodeURIComponent(paramToStr) + '=' + encodeURIComponent(value));
            break;
          case _constants2.default.SEARCH_PARAMS_TYPE.ARRAY:
            params[param].forEach(function (item) {
              uri.push(encodeURIComponent(paramToStr) + '=' + encodeURIComponent(item));
            });
            break;
          default:
        }
      });

      return uri.join('&');
    }
  }]);

  return SearchParamsUtils;
}();

exports.default = SearchParamsUtils;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Adobe Systems Incorporated. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file is licensed to you under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License. You may obtain a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of the License at http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _searchParamsUtils = __webpack_require__(5);

var _searchParamsUtils2 = _interopRequireDefault(_searchParamsUtils);

var _resultColumnsUtils = __webpack_require__(4);

var _resultColumnsUtils2 = _interopRequireDefault(_resultColumnsUtils);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _downSamplingUtils = __webpack_require__(16);

var _downSamplingUtils2 = _interopRequireDefault(_downSamplingUtils);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates the url for search files api
 * @param {string} endpoint api endpoint url
 * @param {object} queryParams object of query parameters
 * @returns {string} api url
 */
function createSearchFilesApiUrl(endpoint, queryParams) {
  var url = endpoint;
  var paramsStr = [];

  if (queryParams.locale) {
    paramsStr.push('locale=' + encodeURIComponent(queryParams.locale));
  }

  if (queryParams.search_parameters) {
    paramsStr.push(_searchParamsUtils2.default.encodeURI(queryParams.search_parameters));
  }

  if (queryParams.result_columns) {
    paramsStr.push(_resultColumnsUtils2.default.encodeURI(queryParams.result_columns));
  }

  if (paramsStr.length > 0) {
    url = url + '?' + paramsStr.join('&');
  }

  return url;
}

/**
 * Creates the url for license history api
 * @param {string} endpoint api endpoint url
 * @param {object} queryParams object of query parameters
 * @returns {string} api url
 */
function createLicenseHistoryApiUrl(endpoint, queryParams) {
  var url = endpoint;
  var paramsStr = [];

  if (queryParams.locale) {
    paramsStr.push('locale=' + encodeURIComponent(queryParams.locale));
  }

  if (queryParams.search_parameters) {
    paramsStr.push(_searchParamsUtils2.default.encodeURI(queryParams.search_parameters));
  }

  if (queryParams.result_columns) {
    paramsStr.push(_resultColumnsUtils2.default.encodeURI(queryParams.result_columns));
  }

  if (paramsStr.length > 0) {
    url = url + '?' + paramsStr.join('&');
  }

  return url;
}

/**
 * Creates the url for search files api
 * @param {string} endpoint api endpoint url
 * @param {object} queryParams object of query parameters
 * @returns {string} api url
 */
function createSearchCategoryApiUrl(endpoint, queryParams) {
  var url = endpoint;
  var paramsStr = [];

  if (queryParams.locale) {
    paramsStr.push(_constants2.default.QUERY_PARAMS_PROPS.LOCALE + '=' + encodeURIComponent(queryParams.locale));
  }

  if (queryParams.category_id) {
    paramsStr.push(_constants2.default.QUERY_PARAMS_PROPS.CATEGORY + '=' + encodeURIComponent(queryParams.category_id));
  }

  if (paramsStr.length > 0) {
    url = url + '?' + paramsStr.join('&');
  }

  return url;
}

/**
 * Creates the url for access member profile api
 * @param {string} (required) endpoint api endpoint url
 * @param {integer} contentId (optional) asset's unique identifer
 * @param {string} license (optional) licensing state for the asset.
 * @param {string} locale (optional) location language code
 * @returns {string} api url
 */
function createAccessMemberProfileApiUrl(endpoint, contentId, license, locale) {
  var url = endpoint;
  var paramsStr = [];

  if (locale) {
    paramsStr.push('locale=' + encodeURIComponent(locale));
  }

  if (contentId) {
    paramsStr.push('content_id=' + encodeURIComponent(contentId));
  }

  if (license) {
    paramsStr.push('license=' + encodeURIComponent(license));
  }

  url = url + '?' + paramsStr.join('&');

  return url;
}

/**
 * Creates the url for content info api
 * @param {string} (required) endpoint api endpoint url
 * @param {integer} contentId (required) asset's unique identifer
 * @param {string} license (optional) licensing state for the asset.
 * @returns {string} api url
 */
function createContentInfoApiUrl(endpoint, contentId, license) {
  var url = endpoint;
  var paramsStr = [];

  paramsStr.push('content_id=' + encodeURIComponent(contentId));
  if (license) {
    paramsStr.push('license=' + encodeURIComponent(license));
  }

  url = url + '?' + paramsStr.join('&');

  return url;
}

/**
 * Creates the url for request license api
 * @param {string} (required) endpoint api endpoint url
 * @param {integer} contentId (required) asset's unique identifer
 * @param {string} license (optional) licensing state for the asset.
 * @returns {string} api url
 */
function createRequestLicenseApiUrl(endpoint, contentId, license) {
  var url = endpoint;
  var paramsStr = [];

  paramsStr.push('content_id=' + encodeURIComponent(contentId));
  if (license) {
    paramsStr.push('license=' + encodeURIComponent(license));
  }

  url = url + '?' + paramsStr.join('&');

  return url;
}

/**
 * Creates the url for member abandon profile api
 * @param {string} (required) endpoint api endpoint url
 * @param {integer} contentId (required) asset's unique identifer
 * @param {string} state (required) user's purchase relationship to an asset
 * @returns {string} api url
 */
function createMemberAbandonApiUrl(endpoint, contentId, state) {
  var url = endpoint;
  var paramsStr = [];

  paramsStr.push('content_id=' + encodeURIComponent(contentId));
  paramsStr.push('state=' + encodeURIComponent(state));

  url = url + '?' + paramsStr.join('&');

  return url;
}

/**
 * Get the http method for the search files api call
 * @param {object} queryParams object of query parameters
 * @returns {string} http method
 */
function getSearchFilesApiHttpMethod(queryParams) {
  var method = _constants2.default.HTTPMETHOD.GET;
  // The http method for similar image search is POST
  if (queryParams.search_parameters && queryParams.search_parameters.similar_image === 1) {
    method = _constants2.default.HTTPMETHOD.POST;
  }

  return method;
}

/**
 * Get the http method for the request license api call.
 * @param {array} cceAgency
 * @returns {string} http method
 */
function getRequestLicenseApiHttpMethod(cceAgency) {
  var method = _constants2.default.HTTPMETHOD.GET;
  if (cceAgency) {
    method = _constants2.default.HTTPMETHOD.POST;
  }

  return method;
}

var StockApis = function () {
  /*
   * Constructor of StockApis class
   */
  function StockApis(config) {
    _classCallCheck(this, StockApis);

    this.config = config;
  }
  /**
   * Creates the url for search api
   * @param {string} accessToken to be sent with Authorization header
   * @param {object} queryParams query params object to be used for search files api query params
   * @returns {promise} returns promise
   */


  _createClass(StockApis, [{
    key: 'searchFiles',
    value: function searchFiles(accessToken, queryParams) {
      var _this = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var httpMethod = getSearchFilesApiHttpMethod(queryParams);

          var requestURL = createSearchFilesApiUrl(_this.config.endpoints.search, queryParams);

          var headers = {
            'x-api-key': _this.config.x_api_key,
            'x-product': _this.config.x_product
          };

          if (accessToken) {
            headers.Authorization = 'Bearer ' + accessToken;
          }

          if (httpMethod === _constants2.default.HTTPMETHOD.GET) {
            _utils2.default.makeGetAjaxCall(requestURL, headers).then(onSuccess, onError);
          } else {
            // multipart/form-data request for similar_image search
            var fd = new FormData();
            var downsamplePromise = _downSamplingUtils2.default.downsampleAndFixOrientationImage(queryParams.similar_image);
            downsamplePromise.then(function (downsampledFile) {
              fd.append('similar_image', downsampledFile);
              _utils2.default.makeMultiPartAjaxCall(requestURL, headers, fd).then(onSuccess, onError);
            }, function (e) {
              onError(e);
            });
          }
        } catch (e) {
          onError(e);
        }
      });
    }

    /**
     * Creates the url for license history api
     * @param {string} accessToken to be sent with Authorization header
     * @param {object} queryParams query params object to be used for license history api query params
     * @returns {promise} returns promise
     */

  }, {
    key: 'licenseHistory',
    value: function licenseHistory(accessToken, queryParams) {
      var _this2 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var requestURL = createLicenseHistoryApiUrl(_this2.config.endpoints.license_history, queryParams);
          var headers = {
            'x-api-key': _this2.config.x_api_key,
            'x-product': _this2.config.x_product
          };

          if (accessToken) {
            headers.Authorization = 'Bearer ' + accessToken;
          }

          _utils2.default.makeGetAjaxCall(requestURL, headers).then(onSuccess, onError);
        } catch (e) {
          onError(e);
        }
      });
    }

    /**
     * Creates the url for category search api and fetch the result
     * @param {object} queryParams query params object to be used for search category api query params
     * @returns {promise} returns promise
     */

  }, {
    key: 'searchCategory',
    value: function searchCategory(queryParams) {
      var _this3 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var requestURL = createSearchCategoryApiUrl(_this3.config.endpoints.category, queryParams);

          var headers = {
            'x-api-key': _this3.config.x_api_key,
            'x-product': _this3.config.x_product
          };

          _utils2.default.makeGetAjaxCall(requestURL, headers).then(onSuccess, onError);
        } catch (e) {
          onError(e);
        }
      });
    }

    /**
     * Creates the url for category search api and fetch the result
     * @param {object} queryParams query params object to be used for search category api query params
     * @returns {promise} returns promise
     */

  }, {
    key: 'searchCategoryTree',
    value: function searchCategoryTree(queryParams) {
      var _this4 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var requestURL = createSearchCategoryApiUrl(_this4.config.endpoints.category_tree, queryParams);

          var headers = {
            'x-api-key': _this4.config.x_api_key,
            'x-product': _this4.config.x_product
          };

          _utils2.default.makeGetAjaxCall(requestURL, headers).then(onSuccess, onError);
        } catch (e) {
          onError(e);
        }
      });
    }

    /**
     * Acess member profile
     * @param {string} {required} accessToken to be sent with Authorization header
     * @param {integer} contentId (required) asset's unique identifer
     * @param {string} license (required) licensing state for the asset.
     * @param {string} locale (optional) location language code
     * @returns {promise} returns promise
     */

  }, {
    key: 'accessMemberProfile',
    value: function accessMemberProfile(accessToken, contentId, license, locale) {
      var _this5 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var requestURL = createAccessMemberProfileApiUrl(_this5.config.endpoints.user_profile, contentId, license, locale);

          var headers = {
            'x-api-key': _this5.config.x_api_key,
            'x-product': _this5.config.x_product
          };

          headers.Authorization = 'Bearer ' + accessToken;

          _utils2.default.makeGetAjaxCall(requestURL, headers).then(onSuccess, onError);
        } catch (e) {
          onError(e);
        }
      });
    }

    /**
     * Notifies the system when a user abandons a licensing operation
     * @param {string} {required} accessToken to be sent with Authorization header
     * @param {integer} contentId (required) asset's unique identifer
     * @param {string} state (required) user's purchase relationship to an asset
     * @returns {promise} returns promise
     */

  }, {
    key: 'memberAbandon',
    value: function memberAbandon(accessToken, contentId, state) {
      var _this6 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var requestURL = createMemberAbandonApiUrl(_this6.config.endpoints.abandon, contentId, state);

          var headers = {
            'x-api-key': _this6.config.x_api_key,
            'x-product': _this6.config.x_product
          };

          headers.Authorization = 'Bearer ' + accessToken;

          _utils2.default.makeGetAjaxCall(requestURL, headers).then(onSuccess, onError);
        } catch (e) {
          onError(e);
        }
      });
    }

    /**
     * Get licensing information about a specific asset for a specific user
     * @param {string} {required} accessToken to be sent with Authorization header
     * @param {integer} contentId (required) asset's unique identifer
     * @param {string} license (required) licensing state for the asset.
     * @returns {promise} returns promise
     */

  }, {
    key: 'licenseInfo',
    value: function licenseInfo(accessToken, contentId, license) {
      var _this7 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var requestURL = createContentInfoApiUrl(_this7.config.endpoints.license_info, contentId, license);

          var headers = {
            'x-api-key': _this7.config.x_api_key,
            'x-product': _this7.config.x_product
          };

          headers.Authorization = 'Bearer ' + accessToken;

          _utils2.default.makeGetAjaxCall(requestURL, headers).then(onSuccess, onError);
        } catch (e) {
          onError(e);
        }
      });
    }

    /**
    * Requests a license for an asset for a specific user
    * @param {string} {required} accessToken to be sent with Authorization header
    * @param {integer} contentId (required) asset's unique identifer
    * @param {string} license (required) licensing state for the asset.
    * @param {array} cceAgency (optional) Specifies license references.
    * @returns {promise} returns promise
    */

  }, {
    key: 'requestLicense',
    value: function requestLicense(accessToken, contentId, license, cceAgency) {
      var _this8 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var httpMethod = getRequestLicenseApiHttpMethod(cceAgency);
          var requestURL = createRequestLicenseApiUrl(_this8.config.endpoints.license, contentId, license);

          var headers = {
            'x-api-key': _this8.config.x_api_key,
            'x-product': _this8.config.x_product
          };

          headers.Authorization = 'Bearer ' + accessToken;

          if (httpMethod === _constants2.default.HTTPMETHOD.GET) {
            _utils2.default.makeGetAjaxCall(requestURL, headers).then(onSuccess, onError);
          } else {
            var obj = {
              cce_agency: cceAgency
            };
            var postData = JSON.stringify(obj);
            _utils2.default.makePostAjaxCall(requestURL, headers, postData).then(onSuccess, onError);
          }
        } catch (e) {
          onError(e);
        }
      });
    }

    /**
     * Download the asset if user has valid quota or already purchased
     * @param {string} accessToken (required) access token to be used for Authorization header
     * @param {integer} contentId (required) asset's unique identifer
     * @param {string} license (required) licensing state for the asset.
     * @param {string} assetReturnMethodType (optional) how to retrive the image e.g. URL,
     byte etc default is URL
     * @returns {promise} promise
     */

  }, {
    key: 'downloadAsset',
    value: function downloadAsset(accessToken, contentId, license) {
      var _this9 = this;

      return new Promise(function (onSuccess, onError) {
        _this9.licenseInfo(accessToken, contentId, license).then(function (response) {
          if (response.contents[contentId].purchase_details.state !== _constants2.default.PURCHASE_STATE_PARAMS.PURCHASED) {
            _this9.accessMemberProfile(accessToken, contentId, license).then(function (res) {
              var canBuy = res.available_entitlement.quota !== 0 || res.purchase_options.state === _constants2.default.PURCHASE_STATE_PARAMS.OVERAGE;
              if (canBuy) {
                onError(new Error('Content not licensed but have enough quota or overage plan, so first buy the license!'));
              } else {
                onError(new Error('Content not licensed and you do not have enough quota or overage plan!'));
              }
            }, function (error) {
              onError(error);
            });
          } else {
            _this9.requestLicense(accessToken, contentId, license).then(function (res) {
              var URL = res.contents[contentId].purchase_details.url;
              URL = URL + '?token=' + accessToken;
              onSuccess(URL);
            }, function (error) {
              onError(error);
            });
          }
        }, function (error) {
          onError(error);
        });
      });
    }
  }]);

  return StockApis;
}();

exports.default = StockApis;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Adobe Systems Incorporated. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file is licensed to you under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License. You may obtain a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of the License at http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var prodEndpoints = __webpack_require__(18);
var stageEndpoints = __webpack_require__(19);

var Config = function () {

  /**
   * Constructor for Config class
   * @param {string} apiKey x_api_key header for the api calls
   * @param {string} product x_product header for the api calls
   * @param {ENVIRONMENT} env defines the environment for the library
   */
  function Config(apiKey, product) {
    var env = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants2.default.ENVIRONMENT.PROD;

    _classCallCheck(this, Config);

    this.target_env = env;

    this.endpoints = this.target_env === _constants2.default.ENVIRONMENT.PROD ? prodEndpoints : stageEndpoints;

    if (apiKey) {
      this.x_api_key = apiKey;
    } else {
      throw new Error('Api Key configuration is missing!');
    }

    if (product) {
      this.x_product = product;
    } else {
      throw new Error('Product configuration is missing!');
    }
  }

  /**
   * Checks if the config is initialized/set
   * @returns {boolean} true if config is initialized/set, false otherwise
   */


  _createClass(Config, [{
    key: 'isConfigInitialized',
    value: function isConfigInitialized() {
      if (this.target_env && this.endpoints && this.x_api_key && this.x_product) {
        return true;
      }
      return false;
    }
  }]);

  return Config;
}();

exports.default = Config;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Adobe Systems Incorporated. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file is licensed to you under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License. You may obtain a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of the License at http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_LICENSE_HISTORY_LIMIT = 100;

/**
 * Helper function for LicenseHistoryIterator to clone Query Params object
 * @param {object} queryParams object to be cloned
 * @returns {object} the cloned object
 */
function cloneQueryParamsHelper(queryParams) {
  var cloneQueryParams = {};

  Object.keys(queryParams).forEach(function (key) {
    if (key === _constants2.default.QUERY_PARAMS_PROPS.SEARCH_PARAMETERS || key === _constants2.default.QUERY_PARAMS_PROPS.RESULT_COLUMNS) {
      cloneQueryParams[key] = JSON.parse(JSON.stringify(queryParams[key]));
    } else {
      cloneQueryParams[key] = queryParams[key];
    }
  });

  return cloneQueryParams;
}

/**
 * Stores queryParams
 * @private
 */
function storeQueryParamsState() {
  this.lastQueryParams = this.queryParams;
}

/**
 * Restores queryParams
 * @private
 */
function revertToLastQueryParamsState() {
  if (this.lastQueryParams) {
    this.queryParams = this.lastQueryParams;
  }
  this.lastQueryParams = null;
}

/**
 * Does stuff on doApiCall success
 * @param {string} response string from the api
 */
function doOnSuccess(response) {
  this.response = response;

  this.apiInProgress = false;
}

/**
 * Does stuff on doApiCall failure
 */
function doOnError() {
  revertToLastQueryParamsState.call(this);
  this.apiInProgress = false;
}

/**
 * Do license history api call
 * @param {object} queryParams query parameter object
 * @returns {promise} returns promise
 */
function doApiCall(queryParams) {
  var _this = this;

  return new Promise(function (onSuccess, onError) {
    if (_this.apiInProgress) {
      throw new Error('Some other search is already in progress!');
    }

    try {
      _this.apiInProgress = true;

      storeQueryParamsState.call(_this);
      _this.queryParams = queryParams;

      if (_this.stockApis) {
        _this.stockApis.licenseHistory(_this.accessToken, _this.queryParams).then(function (response) {
          doOnSuccess.call(_this, response);
          if (onSuccess) {
            onSuccess();
          }
        }, function (error) {
          doOnError.call(_this, error);
          if (onError) {
            onError(error);
          }
        });
      } else {
        throw new Error('Library couldn\'t initialize properly! Please initialize the library first.');
      }
    } catch (e) {
      doOnError.call(_this, e);
      if (onError) {
        onError(e);
      }
    }
  });
}

/**
 * LicenseHistoryIterator class
 */

var LicenseHistoryIterator = function () {

  /**
   * constructor of LicenseHistoryIterator
   * @param {StockApis} stockApis api object
   * @param {string} accessToken access token string to be used with api calls
   * @param {object} queryParams query params object to be used for license history api query params
   * @param {boolean} nbResultsPresent nb_results column was present in user requested columns
   */
  function LicenseHistoryIterator(stockApis, accessToken, queryParams, nbResultsPresent) {
    _classCallCheck(this, LicenseHistoryIterator);

    this.stockApis = stockApis;
    this.accessToken = accessToken;
    this.queryParams = queryParams;
    this.nbResultsPresent = nbResultsPresent;
    this.response = {};
    this.lastQueryParams = null;
    this.apiInProgress = false;

    if (!this.queryParams.search_parameters.limit) {
      this.queryParams.search_parameters.limit = DEFAULT_LICENSE_HISTORY_LIMIT;
    }

    // Set the offset to one page behind to the current page
    if (!this.queryParams.search_parameters.offset) {
      this.queryParams.search_parameters.offset = 0;
    }

    this.queryParams.search_parameters.offset -= this.queryParams.search_parameters.limit;
  }

  /**
  * Returns total licensed files available
  * @returns {integer} total licensed files available
   */


  _createClass(LicenseHistoryIterator, [{
    key: 'totalSearchFiles',
    value: function totalSearchFiles() {
      if (this.queryParams.search_parameters.offset >= 0 && this.response.nb_results) {
        return this.response.nb_results;
      }
      return _constants2.default.LICENSE_HISTORY_ITERATOR_RETURN_ERROR;
    }

    /**
     * Returns total license history pages
     * @returns {integer} total license history (pages) available
     */

  }, {
    key: 'totalSearchPages',
    value: function totalSearchPages() {
      if (this.queryParams.search_parameters.offset >= 0 && this.response.nb_results) {
        return Math.ceil(this.response.nb_results / this.queryParams.search_parameters.limit);
      }
      return _constants2.default.LICENSE_HISTORY_ITERATOR_RETURN_ERROR;
    }

    /**
     * Returns current license history page index
     * @returns {integer} index of current license history (page) available
     */

  }, {
    key: 'currentSearchPageIndex',
    value: function currentSearchPageIndex() {
      if (this.queryParams.search_parameters.offset >= 0 && this.response.nb_results) {
        var offset = this.queryParams.search_parameters.offset;
        return Math.ceil(offset / this.queryParams.search_parameters.limit);
      }
      return _constants2.default.LICENSE_HISTORY_ITERATOR_RETURN_ERROR;
    }

    /**
     * Returns response from last api call
     * @returns {object} response object available from last api call
     */

  }, {
    key: 'getResponse',
    value: function getResponse() {
      var userResponse = cloneQueryParamsHelper(this.response);

      if (!this.nbResultsPresent && userResponse.nb_results) {
        delete userResponse.nb_results;
      }

      return userResponse;
    }

    /**
     * function to get to next license history page
     * @returns {promise} returns the promise
     */

  }, {
    key: 'next',
    value: function next() {
      var _this2 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var queryParams = cloneQueryParamsHelper(_this2.queryParams);

          var limit = queryParams.search_parameters.limit;

          if (!queryParams.search_parameters.offset) {
            queryParams.search_parameters.offset = limit;
          } else {
            queryParams.search_parameters.offset += limit;
          }

          if (_this2.response.nb_results && queryParams.search_parameters.offset >= _this2.response.nb_results) {
            throw new Error('No more search results available!');
          }

          doApiCall.call(_this2, queryParams).then(onSuccess, onError);
        } catch (er) {
          if (onError) {
            onError(er);
          }
        }
      });
    }

    /**
     * function to get to previous license history page
     * @returns {promise} returns the promise
     */

  }, {
    key: 'previous',
    value: function previous() {
      var _this3 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var queryParams = cloneQueryParamsHelper(_this3.queryParams);

          queryParams.search_parameters.offset -= queryParams.search_parameters.limit;

          if (queryParams.search_parameters.offset < 0) {
            throw new Error('No more search results available!');
          }

          doApiCall.call(_this3, queryParams).then(onSuccess, onError);
        } catch (er) {
          if (onError) {
            onError(er);
          }
        }
      });
    }

    /**
     * function to skip to a specific license history results page
     * @param {integer} pageIndex (required) the index of page to skip on
     * @returns {promise} returns the promise
     */

  }, {
    key: 'skipTo',
    value: function skipTo(pageIndex) {
      var _this4 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var totalPages = _this4.totalSearchPages();

          if (!_utils2.default.isInteger(pageIndex) || pageIndex < 0 || totalPages !== _constants2.default.LICENSE_HISTORY_ITERATOR_RETURN_ERROR && pageIndex >= totalPages) {
            throw new Error('Page index out of bounds!');
          }

          var queryParams = cloneQueryParamsHelper(_this4.queryParams);

          queryParams.search_parameters.offset = pageIndex * queryParams.search_parameters.limit;

          if (queryParams.search_parameters.offset < 0) {
            throw new Error('No more search results available!');
          }

          doApiCall.call(_this4, queryParams).then(onSuccess, onError);
        } catch (er) {
          if (onError) {
            onError(er);
          }
        }
      });
    }
  }]);

  return LicenseHistoryIterator;
}();

exports.default = LicenseHistoryIterator;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Adobe Systems Incorporated. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file is licensed to you under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License. You may obtain a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of the License at http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_SEARCH_FILES_LIMIT = 32;

/**
 * Helper function for SearchFilesIterator to clone Query Params object
 * @param {object} queryParams object to be cloned
 * @returns {object} the cloned object
 */
function cloneQueryParamsHelper(queryParams) {
  var cloneQueryParams = {};

  Object.keys(queryParams).forEach(function (key) {
    if (key === _constants2.default.QUERY_PARAMS_PROPS.SEARCH_PARAMETERS || key === _constants2.default.QUERY_PARAMS_PROPS.RESULT_COLUMNS) {
      cloneQueryParams[key] = JSON.parse(JSON.stringify(queryParams[key]));
    } else {
      cloneQueryParams[key] = queryParams[key];
    }
  });

  return cloneQueryParams;
}

/**
 * Stores queryParams
 * @private
 */
function storeQueryParamsState() {
  this.lastQueryParams = this.queryParams;
}

/**
 * Restores queryParams
 * @private
 */
function revertToLastQueryParamsState() {
  if (this.lastQueryParams) {
    this.queryParams = this.lastQueryParams;
  }
  this.lastQueryParams = null;
}

/**
 * Does stuff on doApiCall success
 * @param {string} response string from the api
 */
function doOnSuccess(response) {
  this.response = response;

  this.apiInProgress = false;
}

/**
 * Does stuff on doApiCall failure
 */
function doOnError() {
  revertToLastQueryParamsState.call(this);
  this.apiInProgress = false;
}

/**
 * Do search files api call
 * @param {object} queryParams query parameter object
 * @returns {promise} returns promise
 */
function doApiCall(queryParams) {
  var _this = this;

  return new Promise(function (onSuccess, onError) {
    if (_this.apiInProgress) {
      throw new Error('Some other search is already in progress!');
    }

    try {
      _this.apiInProgress = true;

      storeQueryParamsState.call(_this);
      _this.queryParams = queryParams;

      if (_this.stockApis) {
        _this.stockApis.searchFiles(_this.accessToken, _this.queryParams).then(function (response) {
          doOnSuccess.call(_this, response);
          if (onSuccess) {
            onSuccess();
          }
        }, function (error) {
          doOnError.call(_this, error);
          if (onError) {
            onError(error);
          }
        });
      } else {
        throw new Error('Library couldn\'t initialize properly! Please initialize the library first.');
      }
    } catch (e) {
      doOnError.call(_this, e);
      if (onError) {
        onError(e);
      }
    }
  });
}

/**
 * SearchFilesIterator class
 */

var SearchFilesIterator = function () {

  /**
   * constructor of SearchFilesIterator
   * @param {StockApis} stockApis api object
   * @param {string} accessToken access token string to be used with api calls
   * @param {object} queryParams query params object to be used for search files api query params
   * @param {boolean} nbResultsPresent nb_results column was present in user requested columns
   */
  function SearchFilesIterator(stockApis, accessToken, queryParams, nbResultsPresent) {
    _classCallCheck(this, SearchFilesIterator);

    this.stockApis = stockApis;
    this.accessToken = accessToken;
    this.queryParams = queryParams;
    this.nbResultsPresent = nbResultsPresent;
    this.response = {};
    this.lastQueryParams = null;
    this.apiInProgress = false;

    if (!this.queryParams.search_parameters.limit) {
      this.queryParams.search_parameters.limit = DEFAULT_SEARCH_FILES_LIMIT;
    }

    // Set the offset to one page behind to the current page
    if (!this.queryParams.search_parameters.offset) {
      this.queryParams.search_parameters.offset = 0;
    }

    this.queryParams.search_parameters.offset -= this.queryParams.search_parameters.limit;
  }

  /**
  * Returns total search files available
  * @returns {integer} total search files available
   */


  _createClass(SearchFilesIterator, [{
    key: 'totalSearchFiles',
    value: function totalSearchFiles() {
      if (this.queryParams.search_parameters.offset >= 0 && this.response.nb_results) {
        return this.response.nb_results;
      }
      return _constants2.default.SEARCH_FILES_ITERATOR_RETURN_ERROR;
    }

    /**
     * Returns total search results pages
     * @returns {integer} total search results (pages) available
     */

  }, {
    key: 'totalSearchPages',
    value: function totalSearchPages() {
      if (this.queryParams.search_parameters.offset >= 0 && this.response.nb_results) {
        return Math.ceil(this.response.nb_results / this.queryParams.search_parameters.limit);
      }
      return _constants2.default.SEARCH_FILES_ITERATOR_RETURN_ERROR;
    }

    /**
     * Returns current search results page index
     * @returns {integer} index of current search results (page) available
     */

  }, {
    key: 'currentSearchPageIndex',
    value: function currentSearchPageIndex() {
      if (this.queryParams.search_parameters.offset >= 0 && this.response.nb_results) {
        var offset = this.queryParams.search_parameters.offset;
        return Math.ceil(offset / this.queryParams.search_parameters.limit);
      }
      return _constants2.default.SEARCH_FILES_ITERATOR_RETURN_ERROR;
    }

    /**
     * Returns response from last api call
     * @returns {object} response object available from last api call
     */

  }, {
    key: 'getResponse',
    value: function getResponse() {
      var userResponse = cloneQueryParamsHelper(this.response);

      if (!this.nbResultsPresent && userResponse.nb_results) {
        delete userResponse.nb_results;
      }

      return userResponse;
    }

    /**
     * function to get to next search results page
     * @returns {promise} returns the promise
     */

  }, {
    key: 'next',
    value: function next() {
      var _this2 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var queryParams = cloneQueryParamsHelper(_this2.queryParams);

          var limit = queryParams.search_parameters.limit;

          if (!queryParams.search_parameters.offset) {
            queryParams.search_parameters.offset = limit;
          } else {
            queryParams.search_parameters.offset += limit;
          }

          if (_this2.response.nb_results && queryParams.search_parameters.offset >= _this2.response.nb_results) {
            throw new Error('No more search results available!');
          }

          doApiCall.call(_this2, queryParams).then(onSuccess, onError);
        } catch (er) {
          if (onError) {
            onError(er);
          }
        }
      });
    }

    /**
     * function to get to previous search results page
     * @returns {promise} returns the promise
     */

  }, {
    key: 'previous',
    value: function previous() {
      var _this3 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var queryParams = cloneQueryParamsHelper(_this3.queryParams);

          queryParams.search_parameters.offset -= queryParams.search_parameters.limit;

          if (queryParams.search_parameters.offset < 0) {
            throw new Error('No more search results available!');
          }

          doApiCall.call(_this3, queryParams).then(onSuccess, onError);
        } catch (er) {
          if (onError) {
            onError(er);
          }
        }
      });
    }

    /**
     * function to skip to a specific search results page
     * @param {integer} pageIndex (required) the index of page to skip on
     * @returns {promise} returns the promise
     */

  }, {
    key: 'skipTo',
    value: function skipTo(pageIndex) {
      var _this4 = this;

      return new Promise(function (onSuccess, onError) {
        try {
          var totalPages = _this4.totalSearchPages();

          if (!_utils2.default.isInteger(pageIndex) || pageIndex < 0 || totalPages !== _constants2.default.SEARCH_FILES_ITERATOR_RETURN_ERROR && pageIndex >= totalPages) {
            throw new Error('Page index out of bounds!');
          }

          var queryParams = cloneQueryParamsHelper(_this4.queryParams);

          queryParams.search_parameters.offset = pageIndex * queryParams.search_parameters.limit;

          if (queryParams.search_parameters.offset < 0) {
            throw new Error('No more search results available!');
          }

          doApiCall.call(_this4, queryParams).then(onSuccess, onError);
        } catch (er) {
          if (onError) {
            onError(er);
          }
        }
      });
    }
  }]);

  return SearchFilesIterator;
}();

exports.default = SearchFilesIterator;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * validates license against the predefined license type
 * @param {string} license License type
 */
function validateLicenseType(license) {
  // stock APIs do case insensitive matching for license type,
  // hence converting all characters to lower case
  var licenseLower = license.toLowerCase();

  // check if license is one of the license type supported
  if (!_utils2.default.doesJSONContainsValue(_constants2.default.LICENSE_STATE_PARAMS, licenseLower)) {
    throw new Error('License type not supported!');
  }
}

/**
 * validates license state against the predefined license state
 * @param {string} state License state
 */
function validateLicenseState(state) {
  // stock APIs do case insensitive matching for license state,
  // hence converting all characters to lower case
  var stateLower = state.toLowerCase();
  // check if license is one of the license type supported
  if (!_utils2.default.doesJSONContainsValue(_constants2.default.PURCHASE_STATE_PARAMS, stateLower)) {
    throw new Error('License state not supported!');
  }
}

var LicenseParamsUtils = function () {
  function LicenseParamsUtils() {
    _classCallCheck(this, LicenseParamsUtils);
  }

  _createClass(LicenseParamsUtils, null, [{
    key: 'validateContentLicenseParams',

    /**
     * function to verify the params for the license related APIs
     * @param {string} accessToken access token to be used for Authorization header
     * @param {integer} contentId asset's unique identifer
     * @param {string} license licensing state for the asset.
     */
    value: function validateContentLicenseParams(accessToken, contentId, license) {
      if (accessToken == null || typeof accessToken !== 'string') {
        throw new Error('access token missing or not of type string!');
      }

      if (contentId == null || Number.isInteger(contentId) === false) {
        throw new Error('contentId missing or contentId is not of type Integer!');
      }

      if (license && typeof license !== 'string') {
        throw new Error('license is not of type string!');
      }

      if (license) {
        validateLicenseType(license);
      }
    }

    /**
     * function to verify the params for the license related APIs
     * @param {string} accessToken access token to be used for Authorization header
     * @param {integer} contentId asset's unique identifer
     * @param {string} state licensing state for the asset.
     */

  }, {
    key: 'validateMemberAbandonLicenseParams',
    value: function validateMemberAbandonLicenseParams(accessToken, contentId, state) {
      if (accessToken == null || typeof accessToken !== 'string') {
        throw new Error('access Token missing or not of type string!');
      }

      if (contentId == null || Number.isInteger(contentId) === false) {
        throw new Error('contentId missing or contentId is not of type Integer!');
      }

      if (state == null || typeof state !== 'string') {
        throw new Error('state missing or state is not of type string!');
      }

      validateLicenseState(state);
    }

    /**
     * function to verify the params for the license related APIs
     * @param {string} accessToken access token to be used for Authorization header
     * @param {integer} contentId asset's unique identifer
     * @param {string} license licensing state for the asset.
     */

  }, {
    key: 'validateMemberProfileLicenseParams',
    value: function validateMemberProfileLicenseParams(accessToken, contentId, license) {
      if (accessToken == null || typeof accessToken !== 'string') {
        throw new Error('access token missing or not of type string!');
      }

      if (contentId && Number.isInteger(contentId) === false) {
        throw new Error('contentId is not of type Integer!');
      }

      if (license && typeof license !== 'string') {
        throw new Error('license is not of type string!');
      }

      if (license) {
        validateLicenseType(license);
      }
    }

    /**
     * function to verify the reference data for Content License API
     * @param {array} cceAgency Specifies license references.
     */

  }, {
    key: 'validateReferenceData',
    value: function validateReferenceData(cceAgency) {
      if (!_utils2.default.isArray(cceAgency)) {
        throw new Error('cceAgency is not of type array');
      }

      cceAgency.forEach(function (referenceData) {
        if (referenceData.id == null || _utils2.default.isInteger(referenceData.id) === false) {
          throw new Error('id missing or id is not of type Integer!');
        }

        if (referenceData.value == null || typeof referenceData.value !== 'string') {
          throw new Error('value missing or value is not of type string!');
        }
      });
    }
  }]);

  return LicenseParamsUtils;
}();

exports.default = LicenseParamsUtils;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _searchParamsUtils = __webpack_require__(5);

var _searchParamsUtils2 = _interopRequireDefault(_searchParamsUtils);

var _resultColumnsUtils = __webpack_require__(4);

var _resultColumnsUtils2 = _interopRequireDefault(_resultColumnsUtils);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueryParamsUtils = function () {
  function QueryParamsUtils() {
    _classCallCheck(this, QueryParamsUtils);
  }

  _createClass(QueryParamsUtils, null, [{
    key: 'isNBResultsColumnPresent',


    /**
    * Checks if the queryParams has nb_results column
    * @param {!object} queryParams object of query parameters
    * @returns {boolean} true if nb_results present, false otherwise
    */
    value: function isNBResultsColumnPresent(queryParams) {
      // we need result column for hasMoreFiles & nextSearchFiles to work properly
      if (queryParams.result_columns && queryParams.result_columns.indexOf(_constants2.default.RESULT_COLUMNS.NB_RESULTS) === -1) {
        return false;
      }

      // if result_columns isn't present in query params then default result_columns
      // contains nb_results
      return true;
    }

    /**
    * Add result column nb_results
    * @param {!object} queryParams object of query parameters
    * @returns {object} query parameter object with nb_results column if added
    */

  }, {
    key: 'addResultColumnNBResults',
    value: function addResultColumnNBResults(queryParams) {
      if (queryParams.result_columns && QueryParamsUtils.isNBResultsColumnPresent(queryParams)) {
        throw new Error('Query parameter already contains nb_results in result_columns');
      }

      // we need result column for hasMoreFiles & nextSearchFiles to work properly
      if (queryParams.result_columns) {
        queryParams.result_columns.push(_constants2.default.RESULT_COLUMNS.NB_RESULTS);
      }

      return queryParams;
    }

    /**
    * Validates the query parameters
    * @param {!object} queryParams object of query parameters
    * @param {string} accessToken access token to be validated if is_licensed requested in results
    * column
    */

  }, {
    key: 'validateSearchFileQueryParams',
    value: function validateSearchFileQueryParams(queryParams, accessToken) {
      Object.keys(queryParams).forEach(function (param) {
        if (param === _constants2.default.QUERY_PARAMS_PROPS.LOCALE) {
          if (typeof queryParams[param] !== 'string') {
            throw new Error('locale expects string only. For e.g. en-US, fr-FR etc.');
          }
        } else if (param === _constants2.default.QUERY_PARAMS_PROPS.SEARCH_PARAMETERS) {
          _searchParamsUtils2.default.validate(queryParams[param]);
        } else if (param === _constants2.default.QUERY_PARAMS_PROPS.RESULT_COLUMNS) {
          _resultColumnsUtils2.default.validate(queryParams[param]);
        } else if (param !== _constants2.default.QUERY_PARAMS_PROPS.SIMILAR_IMAGE) {
          throw new Error('Invalid query parameter \'' + param + '\'! for file search query');
        }
      });

      // Check if is_licensed is requested in result_columns
      if (queryParams.result_columns && queryParams.result_columns.indexOf(_constants2.default.RESULT_COLUMNS.IS_LICENSED) > -1 && !accessToken) {
        throw new Error('Access Token missing! Result Column \'is_licensed\' requires authentication.');
      }

      if (queryParams.search_parameters && queryParams.search_parameters.similar_image === 1 && !queryParams.similar_image) {
        throw new Error('Image Data missing! Search parameter similar_image requires similar_image in query parameters');
      }
    }

    /**
    * Validates the query parameters for license history
    * @param {!object} queryParams object of query parameters
    * @param {string} accessToken access token to be validated if is_licensed requested in results
    * column
    */

  }, {
    key: 'validateLicenseHistoryQueryParams',
    value: function validateLicenseHistoryQueryParams(queryParams) {
      Object.keys(queryParams).forEach(function (param) {
        if (param === _constants2.default.QUERY_PARAMS_PROPS.LOCALE) {
          if (typeof queryParams[param] !== 'string') {
            throw new Error('locale expects string only. For e.g. en-US, fr-FR etc.');
          }
        } else if (param === _constants2.default.QUERY_PARAMS_PROPS.SEARCH_PARAMETERS) {
          _searchParamsUtils2.default.validateLicenseHistory(queryParams[param]);
        } else if (param === _constants2.default.QUERY_PARAMS_PROPS.RESULT_COLUMNS) {
          _resultColumnsUtils2.default.validateLicenseHistory(queryParams[param]);
        } else {
          throw new Error('Invalid query parameter \'' + param + '\'! for license history query');
        }
      });
    }

    /**
    * Validates the query parameters
    * @param {!object} queryParams object of query parameters
    */

  }, {
    key: 'validateSearchCategoryQueryParams',
    value: function validateSearchCategoryQueryParams(queryParams) {
      QueryParamsUtils.validateSearchCategoryTreeQueryParams(queryParams);

      //  category_id is required with url parameters
      if (!Object.getOwnPropertyDescriptor(queryParams, _constants2.default.QUERY_PARAMS_PROPS.CATEGORY)) {
        throw new Error('category_id missing! category search requires category_id in query parameters.');
      }
    }

    /**
    * Validates the query parameters
    * @param {!object} queryParams object of query parameters
    */

  }, {
    key: 'validateSearchCategoryTreeQueryParams',
    value: function validateSearchCategoryTreeQueryParams(queryParams) {
      if (queryParams && !_utils2.default.isObject(queryParams)) {
        throw new Error('queryParams expects Object!');
      }

      Object.keys(queryParams).forEach(function (param) {
        if (param === _constants2.default.QUERY_PARAMS_PROPS.LOCALE) {
          if (typeof queryParams[param] !== 'string') {
            throw new Error('locale expects string only. For e.g. en-US, fr-FR etc.');
          }
        } else if (param === _constants2.default.QUERY_PARAMS_PROPS.CATEGORY) {
          if (!Number.isInteger(queryParams[param])) {
            throw new Error('category_id expects integer only. For e.g. 1043, 4526 etc.');
          }
        } else {
          throw new Error('Invalid query parameter \'' + param + '\'! for category search query!');
        }
      });
    }
  }]);

  return QueryParamsUtils;
}();

exports.default = QueryParamsUtils;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var v1 = __webpack_require__(13);
var v4 = __webpack_require__(14);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var rng = __webpack_require__(3);
var bytesToUuid = __webpack_require__(2);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [_seedBytes[0] | 0x01, _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0,
    _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rng = __webpack_require__(3);
var bytesToUuid = __webpack_require__(2);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DownSamplingUtils = function () {
  function DownSamplingUtils() {
    _classCallCheck(this, DownSamplingUtils);
  }

  _createClass(DownSamplingUtils, null, [{
    key: 'dataURItoBlob',

    /**
    * Converts the data uri from a canvas to a blob that can be pushed to redpill
    *
    * @param {Object} dataURI
    * @return {Object} blob of uri data
    */
    value: function dataURItoBlob(dataURI) {
      // convert base64/URLEncoded data component to raw binary data held in a string
      var byteString = void 0;
      var uriSplit = dataURI.split(',');

      if (uriSplit[0].indexOf('base64') >= 0) {
        byteString = atob(uriSplit[1]);
      } else {
        byteString = decodeURI(uriSplit[1]);
      }

      // separate out the mime component
      var mimeString = uriSplit[0].split(':')[1].split(';')[0];

      // write the bytes of the string to a typed array
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
      }

      return new Blob([ia], { type: mimeString });
    }
    /**
    * Pulls the orientation tag out of the EXIF information of the image if any
    *
    * @param {ArrayBuffer} result
    * @return {number} Orientation tag if any for the image in the array buffer
    */

  }, {
    key: 'getImageOrientation',
    value: function getImageOrientation(result) {
      if (!(result && result instanceof ArrayBuffer && result.byteLength !== undefined)) {
        throw new Error('parameter must be of type  ArrayBuffer!');
      }

      var view = new DataView(result);
      var marker = 0;
      var length = view.byteLength;
      var little = void 0;
      var tags = void 0;
      var offset = 2;
      var defualtOrientation = -1;

      if (view.getUint16(0, false) !== _constants2.default.EXIF_FILE_FORMAT_PARAMS.JPG_START_MARKER) {
        return -2;
      }

      var lastMarker = _constants2.default.EXIF_FILE_FORMAT_PARAMS.LAST_MARKER;
      var markerAnded = marker & lastMarker; // eslint-disable-line no-bitwise

      while (offset < length) {
        marker = view.getUint16(offset, false);
        offset += 2;

        if (marker === _constants2.default.EXIF_FILE_FORMAT_PARAMS.APP1_MARKER) {
          offset += 2;
          if (view.getUint32(offset, false) !== _constants2.default.EXIF_FILE_FORMAT_PARAMS.EXIF_HEADER) {
            return -1;
          }

          little = view.getUint16(offset += 6, false) === _constants2.default.EXIF_FILE_FORMAT_PARAMS.TIF_HEADER;
          offset += view.getUint32(offset + 4, little);
          tags = view.getUint16(offset, little);
          offset += 2;

          for (var i = 0; i < tags; i += 1) {
            if (view.getUint16(offset + i * 12, little) === _constants2.default.EXIF_FILE_FORMAT_PARAMS.ORIENTATION_TAG) {
              return view.getUint16(offset + i * 12 + 8, little);
            }
          }
        } else if (markerAnded !== _constants2.default.EXIF_FILE_FORMAT_PARAMS.LAST_MARKER) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }

      return defualtOrientation;
    }

    /**
    * Converts a base64 string to an array buffer
    *
    * @param {Object} dataURI
    * @return {ArrayBuffer} The base64 blob is converted to an array buffer
    */

  }, {
    key: 'base64ToArrayBuffer',
    value: function base64ToArrayBuffer(dataURI) {
      var byteString = void 0;
      var uriSplit = dataURI.split(',');

      if (uriSplit[0].indexOf('base64') >= 0) {
        byteString = atob(uriSplit[1]);
      } else {
        byteString = decodeURI(uriSplit[1]);
      }

      var len = byteString.length;
      var bytes = new Uint8Array(len);

      for (var i = 0; i < len; i += 1) {
        bytes[i] = byteString.charCodeAt(i);
      }

      return bytes.buffer;
    }

    /**
    * Checks to see if the Image needs to be downsampled or rotated and does it
    *
    * @param {Integer} originalWidth width of the image
    * @param {Integer} originalHeight height of the image
    * @return {Object} with two parameters 'width' and 'height'
    */

  }, {
    key: 'calculateResizeParams',
    value: function calculateResizeParams(originalWidth, originalHeight) {
      var imgWidth = originalWidth;
      var imgHeight = originalHeight;

      if (Math.max(originalWidth, originalHeight) > _constants2.default.DOWNSAMPLE_PARAMS.LONGEST_SIDE_MAXIMUM) {
        throw new Error('Image dropped is too large for visual search!');
      } else {
        var aspectRatio = originalWidth / originalHeight;
        if (originalWidth > originalHeight) {
          if (originalWidth > _constants2.default.DOWNSAMPLE_PARAMS.LONGEST_SIDE_DOWNSAMPLE_TO) {
            imgWidth = _constants2.default.DOWNSAMPLE_PARAMS.LONGEST_SIDE_DOWNSAMPLE_TO;
            imgHeight = _constants2.default.DOWNSAMPLE_PARAMS.LONGEST_SIDE_DOWNSAMPLE_TO / aspectRatio;
          }
        } else if (originalHeight > _constants2.default.DOWNSAMPLE_PARAMS.LONGEST_SIDE_DOWNSAMPLE_TO) {
          imgWidth = _constants2.default.DOWNSAMPLE_PARAMS.LONGEST_SIDE_DOWNSAMPLE_TO * aspectRatio;
          imgHeight = _constants2.default.DOWNSAMPLE_PARAMS.LONGEST_SIDE_DOWNSAMPLE_TO;
        }
      }

      var resizeParams = {};
      resizeParams.width = imgWidth;
      resizeParams.height = imgHeight;

      return resizeParams;
    }

    /**
    * Checks to see if the Image needs to be downsampled or rotated and does it
    *
    * @param {Image} img image to be downsampled
    * @param {Integer} orientation EXIF orientation value
    * @return {Blob} resized file
    */

  }, {
    key: 'resizeImage',
    value: function resizeImage(img, orientation) {
      // grab the original image width and height
      var originalWidth = img.naturalWidth;
      var originalHeight = img.naturalHeight;

      var resizeParams = DownSamplingUtils.calculateResizeParams(originalWidth, originalHeight);

      var imgWidth = resizeParams.width;
      var imgHeight = resizeParams.height;

      var canvas = void 0;
      var ctx = void 0;
      var cx = 0;
      var cy = 0;
      var degree = 0;
      var orientationNeedsFlip = [2, 4, 5, 7];
      var resizedFile = void 0;

      // if we don't need to downsize but we do need to rotate or
      // flip then lets use the original width/height
      if (orientation !== 1 && imgWidth === 0 && imgHeight === 0) {
        imgWidth = originalWidth;
        imgHeight = originalHeight;
      }

      // if a new width and height was set then downsample to those dimensions
      if (imgWidth > 0 && imgHeight > 0) {
        // Create an empty canvas element
        canvas = document.createElement('canvas');

        // Copy the image contents to the canvas
        ctx = canvas.getContext('2d');

        // Calculate new x/y coorditates for image if needed
        switch (orientation) {
          case 5:
          case 6:
            degree = 90;
            cy = imgHeight * -1;
            break;

          case 3:
          case 4:
            degree = 180;
            cx = imgWidth * -1;
            cy = imgHeight * -1;
            break;
          case 7:
          case 8:
            degree = 270;
            cx = imgWidth * -1;
            break;
          default:
          // ignore any other values
        }

        // if the rotation changes the aspect ratio of the image
        // then use the image height for canvas width and vice versa
        if (degree === 0 || degree === 180) {
          canvas.width = imgWidth;
          canvas.height = imgHeight;
        } else {
          canvas.width = imgHeight;
          canvas.height = imgWidth;
        }

        // flip the image if needed
        if (orientationNeedsFlip.indexOf(orientation) > -1) {
          ctx.translate(imgHeight, 0);
          ctx.scale(-1, 1);
        }

        if (degree > 0) {
          ctx.rotate(degree * Math.PI / 180);
        }

        ctx.drawImage(img, cx, cy, imgWidth, imgHeight);
        resizedFile = DownSamplingUtils.dataURItoBlob(canvas.toDataURL('image/jpeg'));
      }

      // we have a properly sized file
      return resizedFile;
    }

    /**
    * Checks to see if the file needs to be downsampled or rotated and does it
    *
    * @param {Object} file
    */

  }, {
    key: 'downsampleAndFixOrientationImage',
    value: function downsampleAndFixOrientationImage(file) {
      return new Promise(function (onSuccess, onFailure) {
        try {
          if (!/\.(png|jpeg|jpg|gif)$/i.test(file.name)) {
            throw new Error('Unsupported image extension.! AdobeStock supports only JPG, JPEG, PNG and GIF!');
          }

          var reader = new FileReader();
          var orientation = -1;
          // Since the File Object does not hold the size of an image
          // we need to create a new image and assign it's src, so when
          // the image is loaded we can calculate it's width and height:
          var img = new Image();

          reader.onload = function () {
            img.onerror = function () {
              onFailure('Unsupported filetype for visual search.!');
            };

            img.onload = function () {
              try {
                var resizedFile = DownSamplingUtils.resizeImage(img, orientation);
                onSuccess(resizedFile);
              } catch (err) {
                onFailure(err.message);
              }
            };

            // pull the orientation from the image
            orientation = DownSamplingUtils.getImageOrientation(DownSamplingUtils.base64ToArrayBuffer(reader.result));

            img.src = reader.result;
          };

          reader.readAsDataURL(file);
        } catch (err) {
          onFailure(err.message);
        }
      });
    }
  }]);

  return DownSamplingUtils;
}();

exports.default = DownSamplingUtils;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = __webpack_require__(12);

var _uuid2 = _interopRequireDefault(_uuid);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DECIMAL_RADIX = 10;

var Http = function () {
  function Http() {
    _classCallCheck(this, Http);
  }

  _createClass(Http, null, [{
    key: 'getXhr',

    /**
     * Creates XMLHttpRequest object as per browser support
     * @returns {XMLHttpRequest} XMLHttpRequest object reference
     */
    value: function getXhr() {
      var xhr = null;

      try {
        // Chrome, Opera, Firefox, Safari
        xhr = new XMLHttpRequest();
      } catch (e1) {
        // Internet Explorer Browsers
        try {
          xhr = new window.ActiveXObject('Msxml2.XMLHTTP');
        } catch (e2) {
          try {
            xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
          } catch (e3) {
            // do nothing
          }
        }
      }

      return xhr;
    }

    /**
     * Does Ajax call as per settings provided
     * @param {object} settings object for ajax request
     * @param {string} accessToken to be sent with Authorization header
     * @returns {promise} returns promise
     */

  }, {
    key: 'doXhr',
    value: function doXhr(settings) {
      return new Promise(function (onSuccess, onError) {
        try {
          var defaultSettings = {
            async: true,
            method: _constants2.default.HTTPMETHOD.GET,
            crossDomain: false,
            contentType: 'application/x-www-form-urlencoded',
            headers: {
              'cache-control': 'no-cache',
              'x-request-id': (0, _uuid2.default)()
            }
          };

          var resolvedSettings = _extends({}, defaultSettings, settings);

          var xhr = Http.getXhr();

          if (!xhr) {
            throw new Error('Browser doesn\'t support XHR!');
          }

          if (settings.headers) {
            resolvedSettings.headers = _extends({}, defaultSettings.headers, settings.headers);
          }

          xhr.onreadystatechange = function onReadyStateChanged() {
            if (this.readyState === 4 && this.status === 200) {
              if (onSuccess) {
                onSuccess(this.response);
              }
            } else if (this.readyState === 4 && parseInt(this.status / 100, DECIMAL_RADIX) === 4) {
              if (onError) {
                onError(this.response);
              }
            } else if (this.readyState === 4 && this.status !== 0) {
              if (onError) {
                onError(this.statusText);
              }
            } else if (this.readyState === 4) {
              if (onError) {
                onError(new Error('Request got aborted!'));
              }
            }
          };

          xhr.open(resolvedSettings.method, resolvedSettings.url, resolvedSettings.async);

          // set the headers
          Object.keys(resolvedSettings.headers).forEach(function (header) {
            xhr.setRequestHeader(header, resolvedSettings.headers[header]);
          });

          if (typeof resolvedSettings.contentType === 'string' && resolvedSettings.contentType) {
            xhr.setRequestHeader('Content-type', resolvedSettings.contentType);
          }

          if (resolvedSettings.crossDomain) {
            xhr.withCredentials = true;
          }

          xhr.responseType = 'json';

          if (resolvedSettings.method === _constants2.default.HTTPMETHOD.GET) {
            xhr.send(null);
          } else {
            xhr.send(resolvedSettings.data);
          }
        } catch (er) {
          if (onError) {
            onError(er);
          }
        }
      });
    }
  }]);

  return Http;
}();

exports.default = Http;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {"search":"https://stock.adobe.io/Rest/Media/1/Search/Files","license_history":"https://stock.adobe.io/Rest/Libraries/1/Member/LicenseHistory","category":"https://stock.adobe.io/Rest/Media/1/Search/Category","category_tree":"https://stock.adobe.io/Rest/Media/1/Search/CategoryTree","license":"https://stock.adobe.io/Rest/Libraries/1/Content/License","license_info":"https://stock.adobe.io/Rest/Libraries/1/Content/Info","user_profile":"https://stock.adobe.io/Rest/Libraries/1/Member/Profile","abandon":"https://stock.adobe.io/Rest/Libraries/1/Member/Abandon"}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"search":"https://stock-stage.adobe.io/Rest/Media/1/Search/Files","license_history":"https://stock-stage.adobe.io/Rest/Libraries/1/Member/LicenseHistory","category":"https://stock-stage.adobe.io/Rest/Media/1/Search/Category","category_tree":"https://stock-stage.adobe.io/Rest/Media/1/Search/CategoryTree","license":"https://stock-stage.adobe.io/Rest/Libraries/1/Content/License","license_info":"https://stock-stage.adobe.io/Rest/Libraries/1/Content/Info","user_profile":"https://stock-stage.adobe.io/Rest/Libraries/1/Member/Profile","abandon":"https://stock-stage.adobe.io/Rest/Libraries/1/Member/Abandon"}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Adobe Systems Incorporated. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file is licensed to you under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License. You may obtain a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of the License at http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _stockApis = __webpack_require__(6);

var _stockApis2 = _interopRequireDefault(_stockApis);

var _searchFilesIterator = __webpack_require__(9);

var _searchFilesIterator2 = _interopRequireDefault(_searchFilesIterator);

var _licenseHistoryIterator = __webpack_require__(8);

var _licenseHistoryIterator2 = _interopRequireDefault(_licenseHistoryIterator);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

var _queryParamsUtils = __webpack_require__(11);

var _queryParamsUtils2 = _interopRequireDefault(_queryParamsUtils);

var _licenseParamsUtils = __webpack_require__(10);

var _licenseParamsUtils2 = _interopRequireDefault(_licenseParamsUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * function to check if AdobeStock initialized properly
 * @returns {boolean} return true if AdobeStock initialized, false otherwise
 */
function isAdobeStockInitialized() {
  if (this.config.isConfigInitialized() && this.stockApis) {
    return true;
  }

  return false;
}

/**
 * The Adobe Stock library class
 */

var AdobeStock = function () {

  /**
   * Constructor for AdobeStock class
   * @param {string} apiKey api key of the client used for the header for the api calls
   * @param {string} product header for the api calls
   * @param {Environment} targetEnv defines the set environment for the library
   */
  function AdobeStock(apiKey, product, targetEnv) {
    _classCallCheck(this, AdobeStock);

    this.config = new _config2.default(apiKey, product, targetEnv);
    this.stockApis = new _stockApis2.default(this.config);
  }

  /**
   * Enum for stack environment
   */


  _createClass(AdobeStock, [{
    key: 'searchFilesByCategory',


    /**
     * function to search stock files by category id
     * @param {string} accessToken (required) access token to be used for Authorization header
     * @param {integer} categoryId (required) the identifier of category to be searched for files
     * @param {string} locale (optional) location language code
     * @param {object} filters (optional) of search_parameters
     * @param {object} resultColumns (optional) desired result columns in the response
     * @returns {SearchFilesIterator} object of SearchFilesIterator type
     */
    value: function searchFilesByCategory(accessToken, categoryId, locale, filters, resultColumns) {
      var queryParams = {
        locale: locale,
        search_parameters: {
          category: categoryId
        }
      };

      if (filters && _utils2.default.isObject(filters)) {
        _extends(queryParams.search_parameters, filters);
      } else if (filters && !_utils2.default.isObject(filters)) {
        throw new Error('filters expects Object!');
      }

      return this.searchFiles(accessToken, queryParams, resultColumns);
    }

    /**
     * function to search similar stock files by media id
     * @param {string} accessToken (required) access token to be used for Authorization header
     * @param {integer} mediaId (required) the identifier of media to be searched for similar files
     * @param {string} locale (optional) location language code
     * @param {object} filters (optional) of search_parameters
     * @param {object} resultColumns (optional) desired result columns in the response
     * @returns {SearchFilesIterator} object of SearchFilesIterator type
     */

  }, {
    key: 'searchSimilarFilesById',
    value: function searchSimilarFilesById(accessToken, mediaId, locale, filters, resultColumns) {
      var queryParams = {
        locale: locale,
        search_parameters: {
          similar: mediaId
        }
      };

      if (filters && _utils2.default.isObject(filters)) {
        _extends(queryParams.search_parameters, filters);
      } else if (filters && !_utils2.default.isObject(filters)) {
        throw new Error('filters expects Object!');
      }

      return this.searchFiles(accessToken, queryParams, resultColumns);
    }

    /**
     * function to search stock files by keywords
     * @param {string} accessToken (required) access token to be used for Authorization header
     * @param {string} keywords (required) the keywords to be searched for files
     * @param {string} locale (optional) location language code
     * @param {object} filters (optional) of search_parameters
     * @param {object} resultColumns (optional) desired result columns in the response
     * @returns {SearchFilesIterator} object of SearchFilesIterator type
     */

  }, {
    key: 'searchFilesByKeywords',
    value: function searchFilesByKeywords(accessToken, keywords, locale, filters, resultColumns) {
      var queryParams = {
        locale: locale,
        search_parameters: {
          words: keywords
        }
      };

      if (filters && _utils2.default.isObject(filters)) {
        _extends(queryParams.search_parameters, filters);
      } else if (filters && !_utils2.default.isObject(filters)) {
        throw new Error('filters expects Object!');
      }

      return this.searchFiles(accessToken, queryParams, resultColumns);
    }

    /**
     * function to search stock files by search params
     * @param {string} accessToken (required) access token to be used for Authorization header
     * @param {object} queryParams (optional) the params to be used for image search & filter
     * @param {object} resultColumns (optional) desired result columns in the response
     * @returns {SearchFilesIterator} object of SearchFilesIterator type
     */

  }, {
    key: 'searchFiles',
    value: function searchFiles(accessToken, queryParams, resultColumns) {
      var localQueryParams = {};
      var nbResultsPresent = false;

      if (!isAdobeStockInitialized.call(this)) {
        throw new Error('Library not initialized! Please initialize the library first.');
      }

      if (queryParams && _utils2.default.isObject(queryParams)) {
        localQueryParams = queryParams;
      } else if (queryParams && !_utils2.default.isObject(queryParams)) {
        throw new Error('queryParams expects Object!');
      }

      if (resultColumns && _utils2.default.isArray(resultColumns)) {
        localQueryParams.result_columns = resultColumns;
      } else if (resultColumns && !_utils2.default.isArray(resultColumns)) {
        throw new Error('resultColumns expects Array!');
      }

      _queryParamsUtils2.default.validateSearchFileQueryParams(localQueryParams, accessToken);

      // we need result column for hasMoreFiles & nextSearchFiles to work properly
      nbResultsPresent = _queryParamsUtils2.default.isNBResultsColumnPresent(localQueryParams);

      if (!nbResultsPresent) {
        localQueryParams = _queryParamsUtils2.default.addResultColumnNBResults(localQueryParams);
      }

      return new _searchFilesIterator2.default(this.stockApis, accessToken, localQueryParams, nbResultsPresent);
    }

    /**
     * function to get license history for a memeber
     * @param {string} accessToken (required) access token to be used for Authorization header
     * @param {object} queryParams (optional) the params to be used for getting license history
     * @param {object} resultColumns (optional) desired result columns in the response
     * @returns {LicenseHistoryIterator} object of LicenseHistoryIterator type
     */

  }, {
    key: 'licenseHistory',
    value: function licenseHistory(accessToken, queryParams, resultColumns) {
      var localQueryParams = {};
      var nbResultsPresent = true;

      if (!isAdobeStockInitialized.call(this)) {
        throw new Error('Library not initialized! Please initialize the library first.');
      }

      if (queryParams && _utils2.default.isObject(queryParams)) {
        localQueryParams = queryParams;
      } else if (queryParams && !_utils2.default.isObject(queryParams)) {
        throw new Error('queryParams expects Object!');
      }

      if (resultColumns && _utils2.default.isArray(resultColumns)) {
        localQueryParams.result_columns = resultColumns;
      } else if (resultColumns && !_utils2.default.isArray(resultColumns)) {
        throw new Error('resultColumns expects Array!');
      }

      _queryParamsUtils2.default.validateLicenseHistoryQueryParams(localQueryParams);

      return new _licenseHistoryIterator2.default(this.stockApis, accessToken, localQueryParams, nbResultsPresent);
    }

    /**
     * function to search stock files by search params
     * @param {object} queryParams (optional) the params to be used for image search & filter
     * @returns {promise} returns Promise object for category search call
     */

  }, {
    key: 'searchCategory',
    value: function searchCategory(queryParams) {
      if (!isAdobeStockInitialized.call(this)) {
        throw new Error('Library not initialized! Please initialize the library first.');
      }

      _queryParamsUtils2.default.validateSearchCategoryQueryParams(queryParams);

      return this.stockApis.searchCategory(queryParams);
    }

    /**
     * function to search stock files by search params
     * @param {object} queryParams (optional) the params to be used for image search & filter
     * @returns {promise} returns Promise object for category tree search call
     */

  }, {
    key: 'searchCategoryTree',
    value: function searchCategoryTree(queryParams) {
      if (!isAdobeStockInitialized.call(this)) {
        throw new Error('Library not initialized! Please initialize the library first.');
      }

      _queryParamsUtils2.default.validateSearchCategoryTreeQueryParams(queryParams);

      return this.stockApis.searchCategoryTree(queryParams);
    }

    /**
     * function to acsess licensing capabilities for a specific user
     * @param {string} accessToken (required) access token to be used for Authorization header
     * @param {integer} contentId (optional) asset's unique identifer
     * @param {string} license (optional) licensing state for the asset
     * @param {string} locale (optional) location language code
     * @returns {promise} promise which will give json data for member profile if found
     */

  }, {
    key: 'accessMemberProfile',
    value: function accessMemberProfile(accessToken, contentId, license, locale) {
      if (!isAdobeStockInitialized.call(this)) {
        throw new Error('Library not initialized! Please initialize the library first.');
      }

      _licenseParamsUtils2.default.validateMemberProfileLicenseParams(accessToken, contentId, license);

      if (locale && typeof locale !== 'string') {
        throw new Error('locale expects string only. For e.g. en-US, fr-FR etc.!');
      }

      return this.stockApis.accessMemberProfile(accessToken, contentId, license, locale);
    }

    /**
     * Notifies the system when a user abandons a licensing operation
     * @param {string} accessToken to be sent with Authorization header
     * @param {integer} contentId (required) asset's unique identifer
     * @param {string} state (required) user's purchase relationship to an asset
     * @returns {promise} returns promise
     */

  }, {
    key: 'memberAbandonLicensing',
    value: function memberAbandonLicensing(accessToken, contentId, state) {
      if (!isAdobeStockInitialized.call(this)) {
        throw new Error('Library not initialized! Please initialize the library first.');
      }

      _licenseParamsUtils2.default.validateMemberAbandonLicenseParams(accessToken, contentId, state);

      return this.stockApis.memberAbandon(accessToken, contentId, state);
    }

    /**
     * Get licensing information about a specific asset for a specific user
     * @param {string} accessToken (required) access token to be used for Authorization header
     * @param {integer} contentId (required) asset's unique identifer
     * @param {string} license (optional) licensing state for the asset.
     * @returns {promise} promise which will give json data for licensing information
     */

  }, {
    key: 'getLicenseInfoForContent',
    value: function getLicenseInfoForContent(accessToken, contentId, license) {
      if (!isAdobeStockInitialized.call(this)) {
        throw new Error('Library not initialized! Please initialize the library first.');
      }

      _licenseParamsUtils2.default.validateContentLicenseParams(accessToken, contentId, license);

      return this.stockApis.licenseInfo(accessToken, contentId, license);
    }

    /**
     * Requests a license for an asset for a specific user
     * @param {string} accessToken (required) access token to be used for Authorization header
     * @param {integer} contentId (required) asset's unique identifer
     * @param {string} license (optional) licensing state for the asset.
     * @param {array} cceAgency (optional) Specifies license references.
     * @returns {promise} promise which will give json data with license info
     * containing a download URL
     */

  }, {
    key: 'requestLicenseForContent',
    value: function requestLicenseForContent(accessToken, contentId, license, cceAgency) {
      if (!isAdobeStockInitialized.call(this)) {
        throw new Error('Library not initialized! Please initialize the library first.');
      }

      _licenseParamsUtils2.default.validateContentLicenseParams(accessToken, contentId, license);

      if (cceAgency) {
        _licenseParamsUtils2.default.validateReferenceData(cceAgency);
      }

      return this.stockApis.requestLicense(accessToken, contentId, license, cceAgency);
    }

    /**
     * Download the asset if user has the asset already licensed
     * @param {string} accessToken (required) access token to be used for Authorization header
     * @param {integer} contentId (required) asset's unique identifer
     * @param {string} license (optional) licensing state for the asset.
     * @returns {promise} promise having url of asset as a response
     */

  }, {
    key: 'downloadAsset',
    value: function downloadAsset(accessToken, contentId, license) {
      if (!isAdobeStockInitialized.call(this)) {
        throw new Error('Library not initialized! Please initialize the library first.');
      }

      _licenseParamsUtils2.default.validateContentLicenseParams(accessToken, contentId, license);

      return this.stockApis.downloadAsset(accessToken, contentId, license);
    }
  }], [{
    key: 'ENVIRONMENT',
    get: function get() {
      return _constants2.default.ENVIRONMENT;
    }

    /**
     * Enum for query params props
     */

  }, {
    key: 'QUERY_PARAMS_PROPS',
    get: function get() {
      return _constants2.default.QUERY_PARAMS_PROPS;
    }

    /**
     * Enums for search parameters and results columns
     */

  }, {
    key: 'SEARCH_PARAMS',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS;
    }
  }, {
    key: 'LICENSE_HISTORY_SEARCH_PARAMS',
    get: function get() {
      return _constants2.default.LICENSE_HISTORY_SEARCH_PARAMS;
    }
  }, {
    key: 'SEARCH_PARAMS_TYPE',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS_TYPE;
    }
  }, {
    key: 'SEARCH_PARAMS_ORDER',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS_ORDER;
    }
  }, {
    key: 'SEARCH_PARAMS_ORIENTATION',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS_ORIENTATION;
    }
  }, {
    key: 'SEARCH_PARAMS_HAS_RELEASES',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS_HAS_RELEASES;
    }
  }, {
    key: 'SEARCH_PARAMS_3D_TYPES',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS_3D_TYPES;
    }
  }, {
    key: 'SEARCH_PARAMS_TEMPLATE_CATEGORIES',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS_TEMPLATE_CATEGORIES;
    }
  }, {
    key: 'SEARCH_PARAMS_TEMPLATE_TYPES',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS_TEMPLATE_TYPES;
    }
  }, {
    key: 'SEARCH_PARAMS_THUMB_SIZES',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS_THUMB_SIZES;
    }
  }, {
    key: 'SEARCH_PARAMS_AGE',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS_AGE;
    }
  }, {
    key: 'SEARCH_PARAMS_VIDEO_DURATION',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS_VIDEO_DURATION;
    }
  }, {
    key: 'SEARCH_PARAMS_PREMIUM',
    get: function get() {
      return _constants2.default.SEARCH_PARAMS_PREMIUM;
    }
  }, {
    key: 'RESULT_COLUMNS',
    get: function get() {
      return _constants2.default.RESULT_COLUMNS;
    }
  }, {
    key: 'LICENSE_HISTORY_RESULT_COLUMNS',
    get: function get() {
      return _constants2.default.LICENSE_HISTORY_RESULT_COLUMNS;
    }
  }, {
    key: 'LICENSE_STATE_PARAMS',
    get: function get() {
      return _constants2.default.LICENSE_STATE_PARAMS;
    }
  }, {
    key: 'PURCHASE_STATE_PARAMS',
    get: function get() {
      return _constants2.default.PURCHASE_STATE_PARAMS;
    }
  }]);

  return AdobeStock;
}();

module.exports = AdobeStock;

/***/ })
/******/ ]);
//# sourceMappingURL=adobestocklib.js.map