!function(e,o,t,n,a){"use strict";t(o).ready(function(){n.Helper.exist(".js-goto")&&t(".js-goto").on("click",function(e){e.preventDefault();var o=t(this).attr("href");n.Helper.goToTarget(o)}),n.Helper.viewport(["areas","clients","homeslider","map"]),n.Nav.init(),n.Helper.exist(".anim")&&n.Helper.showOnScroll(),n.Helper.exist(".b-lazy")&&n.Helper.blazy(),n.Helper.exist(".js-popular")&&n.Slider.popular(),n.Helper.exist(".js-search")&&n.Search.init()})}(window,document,jQuery,window.polentex=window.polentex||{}),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",easeOutCubic:function(e,o,t,n,a){return n*((o=o/a-1)*o*o+1)+t}}),function(e,o,t,n,a){"use strict";function i(e,o,t){e.addEventListener?e.addEventListener(o,t,!1):e.attachEvent&&e.attachEvent("on"+o,t)}function s(e,o){var t;"string"==typeof o?t=o.split(" "):o instanceof Array&&(t=o);for(var n=0,a=t.length;n<a;n++)e.classList.add(t[n])}function l(){var o=t(e).scrollTop()+t(e).height();t(".anim").each(function(){t(this).offset().top<o&&t(this).addClass("anim--loaded")})}function r(){new Blazy({breakpoints:!1,success:function(e){setTimeout(function(){var o=e.parentNode.parentNode;o.className=o.className.replace(/\bis-hidden\b/,""),o.parentNode.className=o.parentNode.className.replace(/\bis-loading\b/,"")},200)}})}function c(e){return t(e).length>0}function p(){return[]}function d(e,n){var i=t("body, html"),s=t(e).offset().top,l=t(o).scrollTop(),r=500*Math.abs(s-l)/1e3;n===a&&(n=0),t(o).scrollTop(l),i.animate({scrollTop:s+n+2},{easing:"easeOutCubic",duration:r}),t("body.nav-full.is-visible").length>0&&story.Nav.menuHide()}function m(){/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))?t("html").addClass("mobile"):t("html").addClass("desktop")}function u(o){return e.innerWidth<parseInt(o,10)}function g(){var n=e,i=o.querySelectorAll(".anim");l(),t(n).on("scroll",function(){t(i).each(function(){var e=t(this);if(e.data("visible")===a){var o=e.offset().top+100;t(n).scrollTop()+t(n).height()>o&&e.addClass("anim--loaded").data("visible",!0)}})})}function w(o){function a(){s=t(e).scrollTop()+e.innerHeight,t.each(l,function(e,o){if(t("#"+o).offset().top<s&&!1===t("#"+o).data("visible"))switch(t("#"+o).data("visible",!0),o){case"areas":console.log("play areas"),n.Slider.interactive(o);break;case"clients":n.Slider.clients();break;case"homeslider":console.log("play home"),n.Slider.interactive(o);break;case"map":console.log("show map"),n.googleMap.init()}})}var s,l=[];t.each(o,function(e,o){n.Helper.exist("#"+o)&&(l.push(o),t("#"+o).data("visible",!1))}),i(e,"load",function(){a()}),i(e,"scroll",function(){a()})}n.Helper=new function(){return{addClassF:s,exist:c,blazy:r,goToTarget:d,isInView:l,isMobile:m,isWindowSmallerThan:u,mapstyle:p,showOnScroll:g,viewport:w}}}(window,document,jQuery,window.polentex=window.polentex||{}),function(e,o,t,n,a){"use strict";n.googleMap=function(){};Map.prototype.init=function(){this.init()},Map.prototype.init=function(a,i){var s=t("#map");a=a||s.data("lat"),i=i||s.data("lng"),t.getScript("https://www.google.com/jsapi",function(){google.load("maps","3",{other_params:"key=AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY",callback:function(){function l(){}function r(){m.setCenter(new google.maps.LatLng(a,i)),l()}var c=new google.maps.LatLng(a,i),p=(n.Helper.mapstyle(),{center:new google.maps.LatLng(a,i),disableDefaultUI:!0,draggable:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,streetViewControl:!1,zoom:17}),d={path:"M53.6,0L36.1,17.1l17.4,17.1L71,17.1L53.6,0z M17.4,0L0,17.1l17.4,17.1l17.4-17.1L17.4,0z M18.1,34.9 L35.5,52l17.4-17.1L35.5,17.8L18.1,34.9z",fillColor:"#e83c30",fillOpacity:1,anchor:new google.maps.Point(32,50),strokeWeight:0,scale:1},m=new google.maps.Map(o.getElementById("map"),p);l();new google.maps.Marker({position:c,map:m,zIndex:999,animation:google.maps.Animation.DROP,icon:d});var u=function(){t.data(m,"center",m.getCenter())};google.maps.event.addListener(m,"dragend",u),google.maps.event.addListener(m,"zoom_changed",u),google.maps.event.addListenerOnce(m,"idle",function(){s.addClass("is-loaded")}),google.maps.event.addDomListener(e,"resize",function(){setTimeout(r,1)})}})})},n.googleMap=new Map}(window,document,jQuery,window.polentex=window.polentex||{}),function(e,o,t,n,a){"use strict";var i=n.Navs=function(){};i.prototype.init=function(){this.menu()},i.prototype.menu=function(){var e=o.querySelectorAll(".submenu"),a=o.getElementById("container");o.getElementById("top"),o.getElementsByTagName("body");t(e).on("mouseenter",function(){n.Helper.addClassF(a,"is-dimmed")}),t(e).on("mouseleave",function(){t(a).removeClass("is-dimmed")})},n.Nav=new i}(window,document,jQuery,window.polentex=window.polentex||{}),function(e,o,t,n,a){"use strict";var i,s,l=n.Searchs=function(){},r=o.getElementsByTagName("body"),c=o.getElementById("container"),p=o.querySelectorAll(".js-search"),d=o.getElementById("search"),m=o.getElementById("s"),u=o.getElementById("searchForm"),g=o.getElementById("top");l.prototype.init=function(){t(p).on("click",function(e){e.preventDefault(),l.prototype.start()})},l.prototype.start=function(){var a=t(g).detach();t(c).prepend(a),n.Helper.addClassF(c,"is-dimmed"),n.Helper.addClassF(d,"is-visible"),s=function(e){u.contains(e.target)?console.log("You clicked inside"):l.prototype.destroy()},setTimeout(function(){m.focus()},600),i=function(o){27==(o=o||e.event).keyCode&&l.prototype.destroy()},d.addEventListener("click",s,!1),o.addEventListener("keydown",i,!1)},l.prototype.destroy=function(){var e=t(g).detach();t(r).prepend(e),t(c).removeClass("is-dimmed"),o.removeEventListener("keydown",i),d.removeEventListener("click",s),t(d).removeClass("is-visible")},n.Search=new l}(window,document,jQuery,window.polentex=window.polentex||{}),function(e,o,t,n,a){"use strict";var i=n.Sliders=function(){};i.prototype.clients=function(){var e=o.querySelectorAll(".js-clients");t(e).owlCarousel({autoplay:!0,dotsContainer:".c-clients__dots",items:1,lazyLoad:!0,loop:!0})},i.prototype.interactive=function(e){var n=o.getElementById(e),a=n.querySelectorAll(".owl-carousel"),i=n.querySelectorAll(".js-tab"),s=t(a).owlCarousel({animateOut:"fadeOut",autoplay:!0,items:1,lazyLoad:!1,loop:!0});s.on("translate.owl.carousel",function(e){t(i).removeClass("is-active").eq(e.page.index).addClass("is-active")}),t(i).on("click",function(e){e.preventDefault();var o=t(this).index();s.trigger("to.owl.carousel",o)})},i.prototype.popular=function(){t(".js-popularNav");var e=t(".js-popularNav .current"),n=t(".js-popularNav .all"),a=o.querySelectorAll(".js-popular");t(a).on("initialized.owl.carousel",function(e){n.text(e.item.count)}).owlCarousel({animateOut:"fadeOut",autoplay:!1,items:1,lazyLoad:!0,loop:!0,nav:!0,navContainer:".c-popular__nav",navText:""}).on("translate.owl.carousel",function(o){e.html(o.page.index+1)})},n.Slider=new i}(window,document,jQuery,window.polentex=window.polentex||{}),WebFontConfig={google:{families:["Open+Sans:300,400,600,700:latin-ext","Droid+Serif:400:latin-ext"]},active:function(){}},function(){var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",e.type="text/javascript",e.async="true";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)}(),Parsley.addMessages("pl",{defaultMessage:"Wartość wygląda na nieprawidłową",type:{email:"Wpisz poprawny adres e-mail.",url:"Wpisz poprawny adres URL.",number:"Wpisz poprawną liczbę.",integer:"Dozwolone są jedynie liczby całkowite.",digits:"Dozwolone są jedynie cyfry.",alphanum:"Dozwolone są jedynie znaki alfanumeryczne."},notblank:"Pole nie może być puste.",required:"Pole jest wymagane.",pattern:"Pole zawiera nieprawidłową wartość.",min:"Wartość nie może być mniejsza od %s.",max:"Wartość nie może być większa od %s.",range:"Wartość powinna zaweriać się pomiędzy %s a %s.",minlength:"Minimalna ilość znaków wynosi %s.",maxlength:"Maksymalna ilość znaków wynosi %s.",length:"Ilość znaków wynosi od %s do %s.",mincheck:"Wybierz minimalnie %s opcji.",maxcheck:"Wybierz maksymalnie %s opcji.",check:"Wybierz od %s do %s opcji.",equalto:"Wartości nie są identyczne."}),Parsley.setLocale("pl");