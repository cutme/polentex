!function(e,t,o,n,a){"use strict";o(t).ready(function(){Pace.on("done",function(){n.Helper.viewport(["areas","clients","homeslider","map"]),n.Helper.exist(".anim")&&n.Helper.showOnScroll()}),n.Helper.exist(".js-goto")&&o(".js-goto").on("click",function(e){e.preventDefault();var t=o(this).attr("href");n.Helper.goToTarget(t)}),n.Nav.init(),n.Helper.isMobile(),n.Helper.relocations(),!1===n.Helper.isWindowSmallerThan(1025)&&n.Helper.parallax(),n.Helper.exist(".b-lazy")&&n.Helper.blazy(),n.Helper.exist(".mfp")&&n.Magnific.init(),n.Helper.exist(".js-popular")&&n.Slider.popular(),n.Helper.exist(".js-search")&&n.Search.init(),n.Helper.exist(".js-tabs")&&n.Tabs.init()})}(window,document,jQuery,window.polentex=window.polentex||{}),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",easeOutCubic:function(e,t,o,n,a){return n*((t=t/a-1)*t*t+1)+o}}),function(e,t,o,n,a){"use strict";function i(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent&&e.attachEvent("on"+t,o)}function s(e,t){var o;"string"==typeof t?o=t.split(" "):t instanceof Array&&(o=t);for(var n=0,a=o.length;n<a;n++)e.classList.add(o[n])}function l(){var t=o(e).scrollTop()+o(e).height();o(".anim").each(function(){o(this).offset().top<t&&o(this).addClass("anim--loaded")})}function r(){new Blazy({breakpoints:!1,success:function(e){setTimeout(function(){var t=e.parentNode.parentNode;t.className=t.className.replace(/\bis-hidden\b/,""),t.parentNode.className=t.parentNode.className.replace(/\bis-loading\b/,"")},200)}})}function c(e){return o(e).length>0}function p(){return[]}function d(e,n){var i=o("body, html"),s=o(e).offset().top,l=o(t).scrollTop(),r=500*Math.abs(s-l)/1e3;n===a&&(n=0),o(t).scrollTop(l),i.animate({scrollTop:s+n+2},{easing:"easeOutCubic",duration:r}),o("body.nav-full.is-visible").length>0&&story.Nav.menuHide()}function u(){/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))?o("html").addClass("mobile"):o("html").addClass("desktop")}function m(t){return e.innerWidth<parseInt(t,10)}function g(){function t(){n=o(e).scrollTop(),o(".c-slider__content .item").css("background-position","center "+.8*n+"px")}var n=o(e).scrollTop();o(e).on("scroll",function(){t()}),o(e).on("resize",function(){t()})}function w(){function a(){!0===n.Helper.isWindowSmallerThan(769)?!1===r&&(i=t.getElementById("navProducts"),s=t.getElementById("product"),l=o(i).detach(),o(s).prepend(l),r=!0):!0===r&&(i=t.getElementById("navProducts"),s=t.getElementById("tabs"),l=o(i).detach(),o(s).prepend(l),r=!1)}var i,s,l,r=!1;o(e).on("resize",function(){a()}),a()}function f(){function n(){o(i).scrollTop()+o(i).height()>1600?o(r).siblings().not("is-visible")&&o(r).addClass("is-visible"):o(r).siblings("is-visible")&&o(r).removeClass("is-visible")}var i=e,s=t.querySelectorAll(".anim"),r=t.querySelectorAll(".js-gotop");l(),o(i).on("scroll",function(){o(s).each(function(){var e=o(this);if(e.data("visible")===a){var t=e.offset().top+100;o(i).scrollTop()+o(i).height()>t&&e.addClass("anim--loaded").data("visible",!0)}}),n()})}function v(t){function a(){s=o(e).scrollTop()+e.innerHeight,o.each(l,function(e,t){o("#"+t).offset().top<s&&!1===o("#"+t).data("visible")&&(o("#"+t).data("visible",!0),setTimeout(function(){switch(t){case"areas":console.log("play areas"),n.Slider.interactive(t);break;case"clients":n.Slider.clients();break;case"homeslider":console.log("play home"),n.Slider.interactive(t);break;case"map":console.log("show map"),n.googleMap.init()}},100))})}var s,l=[];o.each(t,function(e,t){n.Helper.exist("#"+t)&&(l.push(t),o("#"+t).data("visible",!1))}),a(),i(e,"scroll",function(){a()})}n.Helper=new function(){return{addClassF:s,exist:c,blazy:r,goToTarget:d,isInView:l,isMobile:u,isWindowSmallerThan:m,mapstyle:p,parallax:g,relocations:w,showOnScroll:f,viewport:v}}}(window,document,jQuery,window.polentex=window.polentex||{}),function(e,t,o,n,a){"use strict";var i=n.Magnific=function(){};i.prototype.init=function(){this.images()},i.prototype.images=function(){o(".mfp.image").magnificPopup({gallery:{enabled:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"",arrowMarkup:'<span class="mfp-arrow mfp-arrow-%dir%"></span>'},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.find(".c-Magnific__title").text()},markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div></div>'},closeBtnInside:!1,closeMarkup:'<button title="%title%" type="button" class="mfp-close icon-close"></button>',delegate:"",type:"image",fixedContentPos:!0,mainClass:"mfp-with-zoom mfp-img-mobile",zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}})},n.Magnific=new i}(window,document,jQuery,window.polentex=window.polentex||{}),function(e,t,o,n,a){"use strict";n.googleMap=function(){};Map.prototype.init=function(){this.init()},Map.prototype.init=function(a,i){var s=o("#map");a=a||s.data("lat"),i=i||s.data("lng"),o.getScript("https://www.google.com/jsapi",function(){google.load("maps","3",{other_params:"key=AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY",callback:function(){function l(){}function r(){u.setCenter(new google.maps.LatLng(a,i)),l()}var c=new google.maps.LatLng(a,i),p=(n.Helper.mapstyle(),{center:new google.maps.LatLng(a,i),disableDefaultUI:!0,draggable:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,streetViewControl:!1,zoom:17}),d={path:"M53.6,0L36.1,17.1l17.4,17.1L71,17.1L53.6,0z M17.4,0L0,17.1l17.4,17.1l17.4-17.1L17.4,0z M18.1,34.9 L35.5,52l17.4-17.1L35.5,17.8L18.1,34.9z",fillColor:"#e83c30",fillOpacity:1,anchor:new google.maps.Point(32,50),strokeWeight:0,scale:1},u=new google.maps.Map(t.getElementById("map"),p);l();new google.maps.Marker({position:c,map:u,zIndex:999,animation:google.maps.Animation.DROP,icon:d});var m=function(){o.data(u,"center",u.getCenter())};google.maps.event.addListener(u,"dragend",m),google.maps.event.addListener(u,"zoom_changed",m),google.maps.event.addListenerOnce(u,"idle",function(){s.addClass("is-loaded")}),google.maps.event.addDomListener(e,"resize",function(){setTimeout(r,1)})}})})},n.googleMap=new Map}(window,document,jQuery,window.polentex=window.polentex||{}),function(e,t,o,n,a){"use strict";var i=n.Navs=function(){};i.prototype.init=function(){this.menu(),this.mobile(),n.Helper.exist("#navProducts")&&this.products()},i.prototype.menu=function(){var a=t.querySelectorAll(".submenu"),i=t.getElementById("container"),s=(t.getElementById("top"),t.getElementsByTagName("body"));o(a).on("mouseenter",function(){o(e).width()>1024&&(o(s).addClass("is-black"),n.Helper.addClassF(i,"is-dimmed"))}),o(a).on("mouseleave",function(){o(e).width()>1024&&(o(s).removeClass("is-black"),o(i).removeClass("is-dimmed"))})},i.prototype.mobile=function(){var e=t.getElementById("nav"),n=(t.getElementsByTagName("body"),t.querySelectorAll(".js-hamburger"));o(n).on("click",function(t){t.preventDefault(),o(e).toggleClass("is-visible"),o(this).toggleClass("icon-hamburger icon-close")}),o(".submenu",e).on("click",function(e){})},i.prototype.products=function(){var e,n=t.getElementById("navProducts");o("a",n).on("click",function(n){n.preventDefault();var a=o(this);a.next("ul").length>0?(a.parents(".parent").addClass("is-active"),a.next("ul").slideToggle(400,function(){e=a.parents(".parent"),"none"===o("> ul",e).css("display")&&(e.removeClass("is-active"),o("ul > li ul",e).attr("style",""))})):t.location=o(this).attr("href")})},n.Nav=new i}(window,document,jQuery,window.polentex=window.polentex||{}),function(e,t,o,n,a){"use strict";var i,s,l=n.Searchs=function(){},r=t.getElementsByTagName("body"),c=t.getElementById("container"),p=t.getElementById("footer"),d=t.querySelectorAll(".js-search"),u=t.getElementById("search"),m=t.getElementById("s"),g=t.getElementById("searchForm"),w=t.getElementById("top");l.prototype.init=function(){o(d).on("click",function(e){e.preventDefault(),l.prototype.start()})},l.prototype.start=function(){var a=o(w).detach();o(c).prepend(a);var d=o(p).detach();o(c).append(d),o(r).addClass("is-black"),n.Helper.addClassF(c,"is-dimmed"),n.Helper.addClassF(u,"is-visible"),s=function(e){g.contains(e.target)||l.prototype.destroy()},setTimeout(function(){m.focus()},600),i=function(t){27==(t=t||e.event).keyCode&&l.prototype.destroy()},u.addEventListener("click",s,!1),t.addEventListener("keydown",i,!1)},l.prototype.destroy=function(){var e=o(w).detach();o(r).prepend(e);var n=o(p).detach();o(r).append(n),o(r).removeClass("is-black"),o(c).removeClass("is-dimmed"),t.removeEventListener("keydown",i),u.removeEventListener("click",s),o(u).removeClass("is-visible")},n.Search=new l}(window,document,jQuery,window.polentex=window.polentex||{}),function(e,t,o,n,a){"use strict";var i=n.Sliders=function(){};i.prototype.clients=function(){var e=t.querySelectorAll(".js-clients");o(e).owlCarousel({autoplay:!0,dotsContainer:".c-clients__dots",lazyLoad:!0,loop:!0,responsive:{0:{items:2},480:{items:3},768:{items:4},1170:{items:5}}})},i.prototype.interactive=function(e){var n=t.getElementById(e),a=n.querySelectorAll(".owl-carousel"),i=n.querySelectorAll(".js-tab"),s=o(a).owlCarousel({animateOut:"fadeOut",autoplay:!1,items:1,lazyLoad:!1,loop:!0});s.on("translate.owl.carousel",function(e){o(i).removeClass("is-active").eq(e.page.index).addClass("is-active")}),o(i).on("click",function(e){e.preventDefault();var t=o(this).index();s.trigger("to.owl.carousel",t)})},i.prototype.popular=function(){function n(){l=o(e).width()>1024?d:u,o(".c-popular").append(r),a=o(".js-popularNav"),i=o(".js-popularNav .current"),s=o(".js-popularNav .all"),o(p).on("initialized.owl.carousel",function(e){s.text(e.item.count)}).owlCarousel(l).on("translate.owl.carousel",function(t){o(e).width()<1025?i.html(t.item.index+1):i.html(t.page.index+1)})}var a,i,s,l,r='<div class="c-popular__nav js-popularNav"><span class="pages"><span class="current">1</span>/<span class="all"></span></span></div>',c=!1,p=t.querySelectorAll(".js-popular"),d={animateOut:"fadeOut",autoplay:!1,items:1,lazyLoad:!0,loop:!0,nav:!0,navContainer:".c-popular__nav",navText:""},u={autoplay:!1,lazyLoad:!0,loop:!1,nav:!0,navContainer:".c-popular__nav",navText:"",responsive:{0:{items:2},640:{items:3},840:{items:4}}};o(e).width()<1025?(o(".c-popular__item").unwrap(),o(".row").remove(),n(),c=!0):n(),o(e).on("resize",function(){if(o(e).width()<1025)!1===c&&(o(p).trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded"),o(p).find(".owl-stage-outer").children().unwrap(),o(".c-popular__item").unwrap(),o(".row").remove(),o(p).addClass("owl-carousel"),n(),c=!0,console.log("1"));else if(!0===c){console.log("2"),o(p).trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded"),o(p).find(".owl-stage-outer").children().unwrap();for(var t=o(".c-popular__item"),a=0;a<t.length;a+=5)t.slice(a,a+5).wrapAll("<div class='row'></div>");o(p).addClass("owl-carousel"),n(),c=!1}})},n.Slider=new i}(window,document,jQuery,window.polentex=window.polentex||{}),function(e,t,o,n,a){"use strict";var i=n.Tabss=function(){};i.prototype.init=function(){var e=t.getElementById("tabsNav").getElementsByTagName("li"),n=t.getElementById("tabsContent").querySelectorAll(".js-tab");o(e).on("click",function(t){t.preventDefault();var a=o(this).index();0!==a&&(o(e).removeClass("is-active").eq(a).addClass("is-active"),o(n).hide().eq(a-1).fadeIn())})},n.Tabs=new i}(window,document,jQuery,window.polentex=window.polentex||{}),WebFontConfig={google:{families:["Open+Sans:300,400,600,700:latin-ext","Droid+Serif:400:latin-ext"]},active:function(){}},function(){var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",e.type="text/javascript",e.async="true";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),Parsley.addMessages("pl",{defaultMessage:"Wartość wygląda na nieprawidłową",type:{email:"Wpisz poprawny adres e-mail.",url:"Wpisz poprawny adres URL.",number:"Wpisz poprawną liczbę.",integer:"Dozwolone są jedynie liczby całkowite.",digits:"Dozwolone są jedynie cyfry.",alphanum:"Dozwolone są jedynie znaki alfanumeryczne."},notblank:"Pole nie może być puste.",required:"Pole jest wymagane.",pattern:"Pole zawiera nieprawidłową wartość.",min:"Wartość nie może być mniejsza od %s.",max:"Wartość nie może być większa od %s.",range:"Wartość powinna zaweriać się pomiędzy %s a %s.",minlength:"Minimalna ilość znaków wynosi %s.",maxlength:"Maksymalna ilość znaków wynosi %s.",length:"Ilość znaków wynosi od %s do %s.",mincheck:"Wybierz minimalnie %s opcji.",maxcheck:"Wybierz maksymalnie %s opcji.",check:"Wybierz od %s do %s opcji.",equalto:"Wartości nie są identyczne."}),Parsley.setLocale("pl");