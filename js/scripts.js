/*
 * JQuery URL Parser plugin, v2.2.1
 * Developed and maintanined by Mark Perkins, mark@allmarkedup.com
 * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser
 * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.
 * Altered by Holt Wilkins for use in A Year In OZ
 */ 
(function(a){"function"==typeof define&&define.amd?"undefined"!=typeof jQuery?define(["jquery"],a):define([],a):"undefined"!=typeof jQuery?a(jQuery):a()})(function(a,b){function i(a,b){for(var c=decodeURI(a),e=f[b?"strict":"loose"].exec(c),g={attr:{},param:{},seg:{}},h=14;h--;)g.attr[d[h]]=e[h]||"";return g.param.query=n(g.attr.query),g.param.fragment=n(g.attr.fragment),g.seg.path=g.attr.path.replace(/^\/+|\/+$/g,"").split("/"),g.seg.fragment=g.attr.fragment.replace(/^\/+|\/+$/g,"").split("/"),g.attr.base=g.attr.host?(g.attr.protocol?g.attr.protocol+"://"+g.attr.host:g.attr.host)+(g.attr.port?":"+g.attr.port:""):"",g}function j(a){var d=a.tagName;return d!==b?c[d.toLowerCase()]:d}function k(a,b){if(0==a[b].length)return a[b]={};var c={};for(var d in a[b])c[d]=a[b][d];return a[b]=c,c}function l(a,c,d,e){var f=a.shift();if(f){var g=c[d]=c[d]||[];"]"==f?r(g)?""!=e&&g.push(e):"object"==typeof g?g[s(g).length]=e:g=c[d]=[c[d],e]:~f.indexOf("]")?(f=f.substr(0,f.length-1),!h.test(f)&&r(g)&&(g=k(c,d)),l(a,g,f,e)):(!h.test(f)&&r(g)&&(g=k(c,d)),l(a,g,f,e))}else r(c[d])?c[d].push(e):c[d]="object"==typeof c[d]?e:c[d]===b?e:[c[d],e]}function m(a,b,c){if(~b.indexOf("]")){var d=b.split("[");d.length,l(d,a,"base",c)}else{if(!h.test(b)&&r(a.base)){var g={};for(var i in a.base)g[i]=a.base[i];a.base=g}o(a.base,b,c)}return a}function n(a){return q((a+"").split(/&|;/),function(a,b){try{b=decodeURIComponent(b.replace(/\+/g," "))}catch(c){}var d=b.indexOf("="),e=p(b),f=b.substr(0,e||d),g=b.substr(e||d,b.length),g=g.substr(g.indexOf("=")+1,g.length);return""==f&&(f=b,g=""),m(a,f,g)},{base:{}}).base}function o(a,c,d){var e=a[c];b===e?a[c]=d:r(e)?e.push(d):a[c]=[e,d]}function p(a){for(var c,d,b=a.length,e=0;b>e;++e)if(d=a[e],"]"==d&&(c=!1),"["==d&&(c=!0),"="==d&&!c)return e}function q(a,c){for(var d=0,e=a.length>>0,f=arguments[2];e>d;)d in a&&(f=c.call(b,f,a[d],d,a)),++d;return f}function r(a){return"[object Array]"===Object.prototype.toString.call(a)}function s(a){var b=[];for(prop in a)a.hasOwnProperty(prop)&&b.push(prop);return b}function t(a,c){return 1===arguments.length&&a===!0&&(c=!0,a=b),c=c||!1,a=a||""+window.location,{data:i(a,c),attr:function(a){return a=e[a]||a,a!==b?this.data.attr[a]:this.data.attr},param:function(a){return a!==b?this.data.param.query[a]:this.data.param.query},fparam:function(a){return a!==b?this.data.param.fragment[a]:this.data.param.fragment},segment:function(a){return a===b?this.data.seg.path:(a=0>a?this.data.seg.path.length+a:a-1,this.data.seg.path[a])},fsegment:function(a){return a===b?this.data.seg.fragment:(a=0>a?this.data.seg.fragment.length+a:a-1,this.data.seg.fragment[a])}}}var c={a:"href",img:"src",form:"action",base:"href",script:"src",iframe:"src",link:"href"},d=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"],e={anchor:"fragment"},f={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},h=(Object.prototype.toString,/^[0-9]+$/);a!==b?(a.fn.url=function(b){var c="";return this.length&&(c=a(this).attr(j(this[0]))||""),t(c,b)},a.url=t):window.purl=t});

/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
Altered by Holt Wilkins for use in A Year In OZ
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);

$(document).ready(function() {
    
  /* "animated JPEG" */
  
    var sag_y = 0;
    var sagg_y = 0;
    var saggg_y = 0;
    var sagggg_y = 0;
    var sag_height = $('#cell_1950').height();
    setInterval(function() {

      sag_y -= sag_height;
      if(sag_y <= (sag_height * -8) ) sag_y = 0;
      $('#cell_1950').css('background-position', 'center ' + sag_y + 'px');

      sagg_y -= sag_height;
      if(sagg_y <= (sag_height * -2) ) sagg_y = 0;
      $('#cell_2566').css('background-position', 'center ' + sagg_y + 'px');

      saggg_y -= sag_height;
      if(saggg_y <= (sag_height * -8) ) saggg_y = 0;
      $('#cell_4670').css('background-position', 'center ' + saggg_y + 'px');

      sagggg_y -= sag_height;
      if(sagggg_y <= (sag_height * -8) ) g = 0;
      $('#cell_5347').css('background-position', 'center ' + sagggg_y + 'px');

    }, 250);
    var timer = null;
    $('window').on('resize', function() {
      clearTimeout('timer');
      timer = setTimeout(function() {
        sag_height = $('#cell_1950').height();
      }, 50);
    });


  /* lightbox code */
  
    $('body').on('click', '.content a', function(e) {
      if( $(this).find('img').length > 0 ) {
        e.preventDefault();
        var $lightbox = $(document.createElement('div'));
        $lightbox.attr('id', 'onionskin');
        var $image = $(this).find('img').clone();
        var img = new Image;
        img.onload = function() {
          $image.attr('src', img.src);
          if(img.height > $(window).height() ) {
            img.width = ( img.width * ($(window).height() - 40) ) / img.height;
            img.height = $(window).height() - 40;
          }
          $image.css({
            'margin-left' : (-1 * ( img.width / 2  ) ) + 'px',
            'margin-top'  : (-1 * ( img.height / 2 ) ) + 'px',
            'width'  : img.width,
            'height' : img.height
          });
          $lightbox.html($image);
          $('body').append($lightbox);
          setTimeout(function() {
            $('#onionskin').addClass('on');
          }, 5);
        }
        img.src = $(this).attr('href');
      }
    });
    
    $('body').on('click', '#onionskin', function() {
      $('#onionskin').removeClass('on');
      setTimeout(function() {
        $('#onionskin').remove();
      }, 210);
    });
  
  /* end lightbox code */
  
  /* gallery */
  $('.gallery-wrap').each(function(i,n) {
    $(this).find('.gallery-item:first-of-type').addClass('on');
  });
  $('body').on('click', '.gallery-wrap', function() {
    var index = $(this).find('.gallery-item.on').index();
    index = index + 2;
    if(index > $(this).find('.gallery-item').length) index = 1;
    $(this).find('.gallery-item.on').removeClass('on');
    $(this).find('.gallery-item:nth-child('+index+')').addClass('on');
  });
  $('body').on('click', '.btn_gallery', function() {
    var $gallery = $(this).parent('.gallery-wrap');
    var index = $gallery.find('.gallery-item.on').index();
    index = ($(this).hasClass('next')) ? index + 1 : index - 1;
    if(index < 1) index = $gallery.find('.gallery-item').length - 1;
    if(index >= $gallery.find('.gallery-item').length) index = 0;
    $gallery.find('.gallery-item.on').removeClass('on');
    $gallery.find('.gallery-item:nth-child('+index+')').addClass('on');
  });
  
  
  // lazy load images
/*
  $('.image').waypoint(function(direction) {
    var $img = $(this);
    $img.waypoint('destroy');
    var img = new Image();
    img.onload = function() {
      $img.css('background-image', 'url("'+img.src+'")').addClass('loaded');
      $img.find('img').attr('src', img.src );
    }
    img.src = $img.data('src');
  }, {offset: $(window).height()});
*/
  
  // initialize smooth scroll locations
  $('.permalink').each(function() {
    var href = '#post-' + $(this).attr('href').replace('/', '');
    var y = $(href).offset().top - $('#masthead').height();
    $(this).data('scroll_destination', y );
  }).on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    if(!$this.data('loaded')) {
      // load page via ajax
      $.ajax({
        url:'/dynamic_load/' + $this.data('id'),
        success:function(r) {
          $this.closest('article').find('.content').html(r);
          open_post($this);
        }
      });
    } else {
      // open cell
      open_post($this);
    }
  });
  
  function open_post($this) {
    if(history.pushState) {
      document.title = $this.find('h1').html() + ' : A Year in OZ';
      history.pushState({}, document.title, $this.attr('href'));
    }
    $('.open').removeClass('open');
    $this.parents('article').toggleClass('open');
    $('.content').not($this.parents('article').find('.content')).slideUp(200);
    $this.parents('article').find('.content').slideDown(500);
    setTimeout(function() {
      $('html, body').animate({
          scrollTop: $this.data('scroll_destination')
      }, 500);
    }, 201);
  }
  
  
  
  
  
    // Responsive Projects, iPhone/iPad URL bar hides itself on pageload
    if (navigator.userAgent.indexOf('iPhone') != -1) {
        addEventListener("load", function () {
            setTimeout(hideURLbar, 0);
        }, false);
    }
    function hideURLbar() {
        window.scrollTo(0, 0);
    }
    
    $('#btn_overlay').on('click', function() {
      $('#overlay').addClass('visible');
    });
    $('#overlay').on('click', function() {
      $('#overlay').removeClass('visible');
    });

});




function ajax_load(url) {
  jQuery('#other_content_wrap').slideUp(1000, function() {
    jQuery().wvgg_ajax_load({
      url: url,
      dataType: 'html',
      success:function(r) {
      }
    });
  });
}
