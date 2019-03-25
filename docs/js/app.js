/*************************************************
* client:  客戶
* project: 專案
* date:    Thu Mar 21 2019 15:46:39 
* copyright (c) 2019  | jerjer.
 *************************************************/
'use strict';

var _$$slick;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log("%cJERJER%c(\u2032\u309C\u03C9\u3002\u2035)...", 'color: rgba(5,137,62,1); font-size: 32px; vertical-align: baseline;' + 'font-family: "Luxia-Medium", Arial, "Noto Sans TC", "Microsoft JhengHei";' + 'margin: 10px 0px 5px 0; padding: 0px 5px;', 'font-size: 30px; color: rgba(5,137,62,1);');
console.log('%cjerjer-project   ❙   2019-01   ❙   Copyright \xA9 2019 ', 'color: rgba(5,137,62,1); font-size: 12px; margin: 5px 0; font-family:Arial; font-weight: 600;');
var PI = Math.PI,
    rad = Math.PI / 180,
    cos = Math.cos,
    sin = Math.sin,
    atan2 = Math.atan2,
    abs = Math.abs,
    sqrt = Math.sqrt,
    round = Math.round,
    ceil = Math.ceil,
    floor = Math.floor,
    max = Math.max,
    min = Math.min,
    random = Math.random;
var SCRIPTS = {
  first: document.getElementsByTagName('script')[0]
},
    API_KEYS = {};

window.requestAnimateFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  }; // shoot for 60 fps
}();

window.cancelAnimateFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();

function getUrlData() {
  var loca = window.location,
      UrlData = {
    localhost: /localhost/.test(loca),
    href: loca.href,
    host: loca.protocol + '//' + loca.hostname,
    // 完整網域
    path: loca.pathname.replace(/\/[^/]*$/, ''),
    // 完整資料夾
    page: loca.href.split('/').pop().replace(/[\?\#\.]+.*/, ''),
    // 頁面名稱
    port: loca.port ? ':' + loca.port : '',
    api: 'API/',
    prev: document.referrer,
    // 前一頁
    hash: loca.hash,
    // # 後面
    query: loca.search,
    querys: new Object() // 問號後面

  };
  var str = loca.href.replace(/.+[\?]/, '').split('&');

  for (var s = 0; s < str.length; s++) {
    var item = str[s].split('=');
    UrlData.querys[item[0]] = item[1];
  }

  return UrlData;
}
/* 判斷瀏覽器大大與是否行動裝置 */


function parseUserAgent() {
  var ua = new Object(),
      u1 = navigator.userAgent,
      u2 = navigator.userAgent.toLowerCase(),
      u3 = navigator.appName,
      // Return value assumes failure.
  // http://useragentstring.com/pages/useragentstring.php
  // https://developers.whatismybrowser.com/useragents/explore/
  // https://github.com/f2etw/detect-inapp
  rv = -1,
      regex = {
    Browser: {
      edge: /Edge\/\d+/,
      IE: /MSIE\s\d/,
      IE8: /MSIE 8/,
      IE9: /MSIE 9/,
      IE10: /MSIE 10/,
      IE11: /MSIE 11|rv\:11/,
      Firefox: /Firefox\W\d/,
      Chrome: /Chrom(e|ium)\W\d|CriOS\W\d/,
      Safari: /\bSafari\W\d/,
      Oprea: /\bOpera\W\d|\bOPR\W\d/i
    },
    Render: {
      trident: /Trident/,
      // IE 核心
      presto: /Presto/,
      // Opera 核心
      webKit: /AppleWebKit/,
      // Apple Google 核心 + Android Google 核心
      gecko: /Gecko,KHTML/,
      // Firefox 核心 *
      firefox: /Firefox/
    },
    Device: {
      iPhone: /iPhone/,
      // iPhone 與否
      iPad: /iPad/,
      // iPad 與否
      Mac: /Mac/,
      mobile: /(iPad|iPhone|Android|Mobile)/,
      tablet: /Tablet|iPad/i,
      // tablet true false
      touch: 'ontouchstart' in document.documentElement // touch true false

    },
    OS: {
      Android: /Android/,
      windows: /IEMobile|Windows Phone|Lumia/i,
      Blackberry: /BlackBerry|PlayBook|BB10/,
      iOS: /iPhone|iP[oa]d/,
      MacOS: /Mac OS X(?!.+Mobile)/,
      // MacOS 系統
      win10: /Windows NT 10/,
      winvista: /Windows NT 6\.0/,
      win7: /Windows NT 6\.1/,
      win8: /Windows NT 6\.\d/,
      winxp: /Windows NT 5\.1/,
      winnt: /Windows NT [1-5]\./,
      Linux: /Linux/,
      nix: /X11/
    },
    APP: {
      messenger: /\bFB[\w_]+\/(Messenger|MESSENGER)/,
      facebook: /\bFB[\w_]+\//,
      twitter: /\bTwitter/i,
      line: /\bLine\//i,
      wechat: /\bMicroMessenger\//i,
      puffin: /\bPuffin/i,
      miui: /\bMiuiBrowser\//i,
      instagram: /\bInstagram/i,
      // chromeiOS: /CriOS/, // iOS chrome 
      chromeMobile: /\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,
      safariMobile: /Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,
      firefoxMobile: /fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/,
      IEMobile: /IEMobile|MSIEMobile/
    }
  };
  ua.User = {};
  ua.text = u1;

  for (var item in regex) {
    ua[item] = {};

    for (var key in regex[item]) {
      var _text = regex[item][key];
      console.log();
      ua[item][key] = typeof _text != 'boolean' ? _text.test(u1) : _text;

      if (ua[item][key]) {
        ua.User[item] = key;
      }
    }

    if (typeof text == 'boolean') {
      ua.User[item] = false;
    }
  }

  ua.Device.PC = ua.Device.mobile || ua.Device.tablet ? false : true;
  return ua;
}

;
/* localStorage */

function loadFormStorage(id) {
  var get_storage = window.localStorage[id];

  if (get_storage) {
    return JSON.parse(get_storage);
  } else {
    return {};
  }
}

function saveToStorage(id, data) {
  window.localStorage[id] = JSON.stringify(data);
}

var _body = document.body;
var $body = $('body'),
    $html = $('html'),
    $htmlbody = $('html, body'),
    $wrapper = $('.wrapper'),
    $header = $('.header'),
    $footer = $('.footer'),
    $loading_data = $('.loading-data'),
    $loading_page = $('.loading-page'),
    $loading_percent = $('.loading_percent');
var W = window.innerWidth,
    H = window.innerHeight,
    loop = true,
    scroll = _body.scrollTop; // 載入進度條 

function LoadingProgress(options) {
  var _ = this;

  _.canvas = options.$dom;
  _.ctx = _.canvas.getContext('2d');
  _.textColor = options.textColor;
  _.fontSize = options.fontSize || 1;
  _.percent = 0;
  _.progress = 0;

  _.build();
}

LoadingProgress.prototype.build = function () {
  var _ = this; // _.canvas.height = Number(getComputedStyle(document.querySelector('html')).fontSize.replace( 'px', '' )) * _.fontSize + 10;

};

LoadingProgress.prototype.update = function (percent) {
  var _ = this;

  _.ctx.clearRect(0, 0, _.canvas.width, _.canvas.height);

  _.percent = Number(percent) > 1 ? 1 : Number(percent) < 0 ? 0 : Number(percent);
  _.progress = round(_.percent * 100); // + '%';

  _.ctx.font = "".concat(_.fontSize, "rem Fira Sans Condensed"); // _.canvas.width = _.ctx.measureText( _.progress ).width; 

  _.ctx.font = "".concat(_.fontSize, "rem Fira Sans Condensed");
  _.ctx.fillStyle = _.textColor;
  _.ctx.textAlign = 'center';
  _.ctx.textBaseline = 'middle';

  _.ctx.fillText(_.progress, _.canvas.width / 2, _.canvas.height / 2);
}; // 載入進度條 End


function openLoading() {
  $loading_page.addClass('on-visible');
}

function closeLoading() {
  $loading_page.removeClass('on-visible');
}

function inlineToJSON(str) {
  // return 
  // JSON.stringify( 
  //     str.replace( /[']*/g, '' )
  //         .replace( /[\s]*/g, '' )
  //         .replace( /([^{}\[\]:,\s]+[^{}\[\]:,\s]*)/g , "'" + '$&' + "'" )
  // );
  return JSON.parse(JSON.stringify(eval('(' + str + ')')));
}

function getRandomColor() {
  var letters = '0123456789ABCDEF',
      color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[floor(random() * 16)];
  }

  return color;
}

var ua = parseUserAgent(),
    url = getUrlData();

if (ua.Device.PC) {
  console.log('是電腦');
  $body.addClass('pc');

  if (ua.IE8 || ua.IE9) {
    loop = false;
    console.log('請使用高級瀏覽器'); // alert( '建議使用Chrome，Firefox，以及IE10以上版本的瀏覽器進入網站，以便達成最佳瀏覽效果，謝謝' );
  }

  if (url.localhost) {}
} else {
  console.log('是行動裝置');

  if (ua.Device.tablet) {
    console.log('tablet'); // $body.addClass( 'tablet' );
  }

  if (ua.Device.mobile) {
    console.log('mobile'); // $body.addClass( 'mobile' );
  }

  if (url.localhost) {// $( '.broswer-popup-active' ).prop( 'checked', currentBroswer ).change();
  }
}

var loadend = {
  img: false,
  vue: false,
  youtube: false,
  ready: false
},
    str = {
  animationEnd: 'webkitAnimationEnd oanimationend msAnimationEnd animationend'
};

function intro() {
  closeLoading();
}

var introProgress = new LoadingProgress({
  $dom: $('.loading_percent')[0],
  textColor: '#fff',
  fontSize: 1
});
$body.imagesLoaded().then(function (instance, image) {
  console.log('then');
}).done(function () {
  console.log('done');
}).always(function () {
  loadend.img = true;
  loadend.ready = true;
  introProgress.update(1);
  intro();
}).progress(function (instance, image, progressedData) {
  introProgress.update(progressedData.loadedPercent);
}); // 尺寸

function resizing() {
  W = window.innerWidth;
  H = window.innerHeight;
}

window.onresize = function () {
  resizing();
};

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
/* slick */


$('#banner').slick((_$$slick = {
  centerMode: true,
  slidesToShow: 3,
  centerPadding: '0px',
  respondTo: "slider"
}, _defineProperty(_$$slick, "slidesToShow", 1), _defineProperty(_$$slick, "infinite", true), _defineProperty(_$$slick, "dots", true), _defineProperty(_$$slick, "autoplay", true), _defineProperty(_$$slick, "prevArrow", $('#ar_l')), _defineProperty(_$$slick, "nextArrow", $('#ar_r')), _defineProperty(_$$slick, "responsive", [{
  breakpoint: 960,
  settings: {
    centerPadding: '0px'
  }
}, {
  breakpoint: 480,
  settings: {
    centerPadding: '0px'
  }
}]), _$$slick)).on('beforeChange', function (event, slick, currentSlide, nextSlide) {}).on('afterChange', function (event, slick, currentSlide) {});
$('#banner_preview').css({
  'display': 'none'
});
$('#banner').css({
  'display': 'block'
}).addClass('show');
/* viewportChecker */

var viewpageApp = {
  $scroll: $htmlbody,
  page: '.viewpage',
  el: '.view',
  btn: '.btn-anchor',
  hash: false,
  anchor: false,
  menu: $('.menu').height(),
  $mainNav: $('.main-nav-active')
};
$body.on('click', viewpageApp.btn, function () {
  console.log('click');
  var v = viewpageApp,
      target = $(this).data('target'),
      position = $(v.page + '[data-page="' + target + '"]').offset().top;
  v.$scroll.stop().animate({
    scrollTop: position - $('.header').height()
  }, 400);
  v.$mainNav.prop('checked', false);
});
$(viewpageApp.page).viewportChecker({
  classToAdd: 'on-visible',
  classToAddForFullView: 'full-visible',
  classToRemove: 'invisible',
  removeClassAfterAnimation: false,
  offset: '50%',
  invertBottomOffset: true,
  repeat: true,
  scrollHorizontal: false,
  callbackFunction: function callbackFunction(elem, action) {
    var v = viewpageApp;

    if (!v.anchor) {
      v.anchor = $(elem).data('page');
      $(v.btn + '[data-target="' + v.anchor + '"]').addClass('on-active');
      v.action = action;
    }

    if (v.action !== action) {
      v.action = action;

      if (v.action == 'remove') {
        $(v.btn + '.on-active').removeClass('on-active');
      } else {
        v.anchor = $(elem).data('page');
        $(v.btn + '[data-target="' + v.anchor + '"]').addClass('on-active');
      }
    }

    if (v.hash) {
      console.log(v.anchor);
      window.location.hash = v.anchor;
    }
  }
});
$(viewpageApp.el).viewportChecker({
  classToAdd: 'on-visible',
  classToAddForFullView: 'full-visible',
  classToRemove: 'invisible',
  removeClassAfterAnimation: false,
  offset: '18%',
  invertBottomOffset: false,
  repeat: true,
  scrollHorizontal: false,
  callbackFunction: function callbackFunction(elem, action) {}
});
/* vue */

Vue.config.devtools = true;
var eventBus = new Vue();
Vue.component('productdetails', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: "\n\t\t<div class=\"productdetails\">\n\t\t\t<ul>\n\t\t\t\t<li v-for=\"detail in details\">{{ detail }}</li>\n\t\t\t</ul>\n\t\t</div>\n\t"
});
Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: "\n\t\t<div class=\"product\">\n\t\t\t<div>\n\t\t\t\t<span \n\t\t\t\tv-for=\"(stab,index) in stabs\" \n\t\t\t\t:key=\"index\"\n\t\t\t\tv-on:click=\"selectedTab = stab\"\n\t\t\t\tv-bind:class=\"{ activeTab : selectedTab == stab}\"\n\t\t\t\t>{{ stab }}</span>\n\t\t\t</div>\n\t\t\t<div \n\t\t\t\tclass=\"cart\"\n\t\t\t\tv-show=\"selectedTab === 'shipping'\"\n\t\t\t>\n\t\t\t\t<p>Cart({{ cart.length }})</p>\n\t\t\t</div>\n\t\t\t<div v-show=\"selectedTab === 'details'\">\n\t\t\t<div class=\"product-image\">\n\t\t\t\t\t<img v-bind:src=\"image\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"product-info\">\n\t\t\t\t\t<div v-if=\"onSaleValue\">on sale {{ onSale }}</div>\n\t\t\t\t\t<h1>{{ title }}</h1>\n\t\t\t\t\t<p v-if=\"inStock\">in stock</p>\n\t\t\t\t\t<p \n\t\t\t\t\t\tv-else\n\t\t\t\t\t\tv-bind:class=\"[!inStock?notInStockClass:'']\"\n\t\t\t\t\t\tv-bind:style=\"[!inStock?{'text-decoration': 'line-through'}:'']\">out of stock</p>\n\t\t\t\t\t\t<p>shipping : {{ shipping }}</p>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li v-for=\"detail in details\">{{ detail }}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<productdetails :details=\"details\"></productdetails>\n\t\t\t\t\t<div\n\t\t\t\t\t\tv-for=\"(variant,index) in variants\" \n\t\t\t\t\t\tv-bind:data-key=\"variant.variantId\"\n\t\t\t\t\t\tclass=\"color-box\"\n\t\t\t\t\t\t:class=\"{activedColor : selectedVariant === index}\"\n\t\t\t\t\t\tv-bind:style=\"{'background-color': variant.variantColor}\"\n\t\t\t\t\t\t@click=\"updateProduct(index)\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<button \n\t\t\t\t\t\tv-on:click=\"addToCart\" \n\t\t\t\t\t\t:disabled=\"!inStock\"\n\t\t\t\t\t\tclass=\"button\"\n\t\t\t\t\t\t:class=\"{ disabledButton : !inStock }\">Add to Cart</button>\n\t\t\t\t\t<button v-on:click=\"removeFromCart\">remove</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<product-tabs :reviews=\"reviews\"></product-tabs>\n\t\t</div>\n\t",
  data: function data() {
    return {
      brand: "Vue mastery",
      product: "Socks",
      selectedVariant: 0,
      notInStockClass: ['lineThrough-0', 'lineThrough-1'],
      details: ["80% cotton", "20% polyester", "Gender neutral"],
      onSaleValue: true,
      variants: [{
        variantId: 2234,
        variantColor: "green",
        variantImage: "img/vmSocks-green-onWhite.jpg",
        variantquanty: 10
      }, {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "img/vmSocks-blue-onWhite.jpg",
        variantquanty: 5
      }],
      reviews: [],
      stabs: ['details', 'shipping'],
      selectedTab: 'details'
    };
  },
  methods: {
    addToCart: function addToCart() {
      // this.cart += 1
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    updateProduct: function updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
    removeFromCart: function removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId);
    },
    addReview: function addReview(productPreview) {
      this.reviews.push(productPreview);
    }
  },
  computed: {
    title: function title() {
      return this.brand + ' ' + this.product;
    },
    image: function image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock: function inStock() {
      return this.variants[this.selectedVariant].variantquanty > 0;
    },
    onSale: function onSale() {
      return this.brand + this.product;
    },
    shipping: function shipping() {
      if (this.premium) {
        return "free";
      }

      return "2.99";
    }
  },
  mounted: function mounted() {
    var _this = this;

    eventBus.$on('review-submited', function (productPreview) {
      _this.reviews.push(productPreview);
    });
  }
});
Vue.component("product-review", {
  template: "\n\t\t<form class=\"review-form\" v-on:submit.prevent=\"onSubmit\">\n\t\t\t<p v-if=\"errors.length\">\n\t\t\t\t<b>please correct the folling error(s):</b>\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"error in errors\">{{ error }}</li>\n\t\t\t\t<ul>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t<input id=\"name\" v-model=\"name\">\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label for=\"review\">Review:</label>\n\t\t\t\t<textarea id=\"review\" v-model=\"review\"></textarea>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t<label for=\"rating\">Raiting:</label>\n\t\t\t\t<select id=\"rating\" v-model.number=\"rating\">\n\t\t\t\t\t<option>5</option>\n\t\t\t\t\t<option>4</option>\n\t\t\t\t\t<option>3</option>\n\t\t\t\t\t<option>2</option>\n\t\t\t\t\t<option>1</option>\n\t\t\t\t</select>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label for=\"recommend\">Would you recommend this product?</label>\n\t\t\t\t<input type=\"radio\" name=\"recommend\" value=\"yes\" v-model=\"recommend\">\n\t\t\t\t<input type=\"radio\" name=\"recommend\" value=\"no\" v-model=\"recommend\">\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<input type=\"submit\" value=\"Submit\">\n\t\t\t</p>\n\t\t</form>\n\t",
  data: function data() {
    return {
      name: null,
      review: null,
      rating: null,
      recommend: null,
      errors: []
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.errors = [];

      if (this.name && this.review && this.rating && this.recommend) {
        var productPreview = {
          name: this.name,
          rating: this.rating,
          review: this.review,
          recommend: this.recommend
        };
        eventBus.$emit('review-submited', productPreview);
        this.name = null;
        this.rating = null;
        this.review = null;
        this.recommend = null;
      } else {
        if (!this.name) this.errors.push("name is required!");
        if (!this.review) this.errors.push("review is required!");
        if (!this.rating) this.errors.push("rating is required!");
        if (!this.recommend) this.errors.push("recommend is required!");
      }
    }
  }
});
Vue.component("product-tabs", {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: "\n\t\t<div>\n\t\t\t<div class=\"tab-box\">\n\t\t\t\t<span \n\t\t\t\t\tclass=\"tab\"\n\t\t\t\t\tv-for=\"(tab,index) in tabs\"\n\t\t\t\t\t:key=\"index\"\n\t\t\t\t\tv-on:click=\"selectedTab = tab\"\n\t\t\t\t\tv-bind:class=\"{ activeTab : selectedTab == tab}\"\n\t\t\t\t>\n\t\t\t\t\t{{ tab }}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div v-show=\"selectedTab === 'Reviews'\">\n\t\t\t\t<h2>Reviews</h2>\n\t\t\t\t<p v-if=\"!reviews.length\">there are no reviews yet</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"review in reviews\">\n\t\t\t\t\t\t<p>name : {{ review.name }}</p>\n\t\t\t\t\t\t<p>rating : {{ review.rating }}</p>\n\t\t\t\t\t\t<p>review : {{ review.review }}</p>\n\t\t\t\t\t\t<p>recommend : {{ review.recommend }}</p>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<product-review \n\t\t\t\tv-show=\"selectedTab == 'Make a review'\"\n\t\t\t></product-review>\n\t\t</div>\n\t",
  data: function data() {
    return {
      tabs: ["Reviews", "Make a review"],
      selectedTab: "Reviews"
    };
  }
});
Vue.component('detail-shipping', {
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  template: "\n\t\t<div>\n\n\n\t\t</div>\n\t",
  data: function data() {
    return {};
  }
});
var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart: function updateCart(id) {
      this.cart.push(id);
    },
    decressCart: function decressCart(id) {
      console.log(id, this.cart.length);

      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] == id) {
          this.cart.splice(i, 1);
          break;
        }
      }
    }
  }
});