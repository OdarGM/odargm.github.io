//MOBILE NAVBAR DROPDOWN

function dropDown(){
	var navid = document.getElementById("navBar");
	if(navid.className === "nav"){
		navid.className += " mobile";
	} else {
		navid.className = "nav"
	}
}

// HEADER TEXT 

var i = 0
var twriterheadertext = 'Odar';

function typeWritr(){

	if(i < twriterheadertext.length){
		document.getElementById("twriter").innerHTML += twriterheadertext.charAt(i);
		i++;
		setTimeout(typeWritr, 77)
	}
};

//BACK TO TOP BUTTON

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$("#toTop").fadeIn()
		} else {
			$("#toTop").fadeOut()
		}
	});

	$("#toTop").click(function(){
		$("html", "body").animate({
			scrollTop: 0
		}, 600)
	})

});

//WORK FADEIN ON CLICK

$(document).ready(function(){
	$("#btnie").click(function(){
		$("#work").fadeIn(2000)
	})
});

//WORK FADEIN ON SCROLL

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 20){
			$("#work").fadeIn(2000)
		}
	})
})

function serverLoad(){

//TYPE WRISTER FOR SERVER PAGE

var i = 0
var twriterheadertext = "Server";

function serverWriter(){

	if(i < twriterheadertext.length){
		document.getElementById("serverwriter").innerHTML += twriterheadertext.charAt(i);
		i++;
		setTimeout(serverWriter, 77)
	}
};

serverWriter()


}

//TYPE WIRTE FOR DONATE PAGE

var i = 0
var dntwtre = "Donate"

function donateWriter(){

	if(i < dntwtre.length){
		document.getElementById("donatewriter").innerHTML += dntwtre.charAt(i);
		i++;
		setTimeout(donateWriter, 77)
	}

}

//DONATE FADE IN

$(document).ready(function(){
	$(".donate").fadeIn(2000)
})

//DONATE TABS SWITCH

function DntSwitch(tabName, elmnt){
	var i, dntpage;
	dntpage = document.getElementsByClassName("dntpgcnt");
	for(i = 0; i < dntpage.length; i++) {
		dntpage[i].style.display = "none"
	}
	document.getElementById(tabName).style.display = "block"
}

//document.getElementById("openTabie").click()




/*--------OTHER CODES---------*/

/*

//SHOW WORK TITLE ON SCROLL

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 20){
			$(".worieTitl").css ({ left: "50%" })
		}
	})
}) 

//SOME SHIT

$(document).ready(function(){
    $("body").scrollspy({ target: ".wrkBtn", offset: 50 });
  $("#workBtn a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

//BACK TO TOP PURE JS

window.onscroll = function() {scrolFunc()};
function scrolFunc() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	

*/




		//breakpoints({
		//	xlarge:  [ '1281px',  '1680px' ],
		//	large:   [ '981px',   '1280px' ],
		//	medium:  [ '737px',   '980px'  ],
		//	small:   [ null,      '736px'  ]
		//});

//810
//932


/*

SHIT I MAY NEED LATER

// browser.js v1.0 | @ajlkn | MIT licensed 
var browser=function(){"use strict";var e={name:null,version:null,os:null,osVersion:null,touch:null,mobile:null,_canUse:null,canUse:function(n){e._canUse||(e._canUse=document.createElement("div"));var o=e._canUse.style,r=n.charAt(0).toUpperCase()+n.slice(1);return n in o||"Moz"+r in o||"Webkit"+r in o||"O"+r in o||"ms"+r in o},init:function(){var n,o,r,i,t=navigator.userAgent;for(n="other",o=0,r=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],i=0;i<r.length;i++)if(t.match(r[i][1])){n=r[i][0],o=parseFloat(RegExp.$1);break}for(e.name=n,e.version=o,n="other",o=0,r=[["ios",/([0-9_]+) like Mac OS X/,function(e){return e.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(e){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(e){return e.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null],["linux",/Linux/,null],["bsd",/BSD/,null],["unix",/X11/,null]],i=0;i<r.length;i++)if(t.match(r[i][1])){n=r[i][0],o=parseFloat(r[i][2]?r[i][2](RegExp.$1):RegExp.$1);break}e.os=n,e.osVersion=o,e.touch="wp"==e.os?navigator.msMaxTouchPoints>0:!!("ontouchstart"in window),e.mobile="wp"==e.os||"android"==e.os||"ios"==e.os||"bb"==e.os}};return e.init(),e}();!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():e.browser=n()}(this,function(){return browser});

// jquery.dropotron.js v1.4.3 | (c) @ajlkn | github.com/ajlkn/jquery.dropotron | MIT licensed 
!function(e){e.fn.disableSelection_dropotron=function(){return e(this).css("user-select","none").css("-khtml-user-select","none").css("-moz-user-select","none").css("-o-user-select","none").css("-webkit-user-select","none")},e.fn.dropotron=function(t){if(0==this.length)return e(this);if(this.length>1)for(var o=0;o<this.length;o++)e(this[o]).dropotron(t);return e.dropotron(e.extend({selectorParent:e(this)},t))},e.dropotron=function(t){var o=e.extend({selectorParent:null,baseZIndex:1e3,menuClass:"dropotron",expandMode:"hover",hoverDelay:150,hideDelay:250,openerClass:"opener",openerActiveClass:"active",submenuClassPrefix:"level-",mode:"fade",speed:"fast",easing:"swing",alignment:"left",offsetX:0,offsetY:0,globalOffsetY:0,IEOffsetX:0,IEOffsetY:0,noOpenerFade:!0,detach:!0,cloneOnDetach:!0},t),n=o.selectorParent,s=n.find("ul"),i=e("body"),a=e("body,html"),l=e(window),r=!1,d=null,c=null;n.on("doCollapseAll",function(){s.trigger("doCollapse")}),s.each(function(){var t=e(this),n=t.parent();o.hideDelay>0&&t.add(n).on("mouseleave",function(e){window.clearTimeout(c),c=window.setTimeout(function(){t.trigger("doCollapse")},o.hideDelay)}),t.disableSelection_dropotron().hide().addClass(o.menuClass).css("position","absolute").on("mouseenter",function(e){window.clearTimeout(c)}).on("doExpand",function(){if(t.is(":visible"))return!1;window.clearTimeout(c),s.each(function(){var t=e(this);e.contains(t.get(0),n.get(0))||t.trigger("doCollapse")});var i,a,d,f,u=n.offset(),p=n.position(),h=(n.parent().position(),n.outerWidth()),g=t.outerWidth(),v=t.css("z-index")==o.baseZIndex;if(v){switch(i=o.detach?u:p,f=i.top+n.outerHeight()+o.globalOffsetY,a=o.alignment,t.removeClass("left").removeClass("right").removeClass("center"),o.alignment){case"right":d=i.left-g+h,0>d&&(d=i.left,a="left");break;case"center":d=i.left-Math.floor((g-h)/2),0>d?(d=i.left,a="left"):d+g>l.width()&&(d=i.left-g+h,a="right");break;case"left":default:d=i.left,d+g>l.width()&&(d=i.left-g+h,a="right")}t.addClass(a)}else switch("relative"==n.css("position")||"absolute"==n.css("position")?(f=o.offsetY,d=-1*p.left):(f=p.top+o.offsetY,d=0),o.alignment){case"right":d+=-1*n.parent().outerWidth()+o.offsetX;break;case"center":case"left":default:d+=n.parent().outerWidth()+o.offsetX}navigator.userAgent.match(/MSIE ([0-9]+)\./)&&RegExp.$1<8&&(d+=o.IEOffsetX,f+=o.IEOffsetY),t.css("left",d+"px").css("top",f+"px").css("opacity","0.01").show();var C=!1;switch(d="relative"==n.css("position")||"absolute"==n.css("position")?-1*p.left:0,t.offset().left<0?(d+=n.parent().outerWidth()-o.offsetX,C=!0):t.offset().left+g>l.width()&&(d+=-1*n.parent().outerWidth()-o.offsetX,C=!0),C&&t.css("left",d+"px"),t.hide().css("opacity","1"),o.mode){case"zoom":r=!0,n.addClass(o.openerActiveClass),t.animate({width:"toggle",height:"toggle"},o.speed,o.easing,function(){r=!1});break;case"slide":r=!0,n.addClass(o.openerActiveClass),t.animate({height:"toggle"},o.speed,o.easing,function(){r=!1});break;case"fade":if(r=!0,v&&!o.noOpenerFade){var C;C="slow"==o.speed?80:"fast"==o.speed?40:Math.floor(o.speed/2),n.fadeTo(C,.01,function(){n.addClass(o.openerActiveClass),n.fadeTo(o.speed,1),t.fadeIn(o.speed,function(){r=!1})})}else n.addClass(o.openerActiveClass),n.fadeTo(o.speed,1),t.fadeIn(o.speed,function(){r=!1});break;case"instant":default:n.addClass(o.openerActiveClass),t.show()}return!1}).on("doCollapse",function(){return t.is(":visible")?(t.hide(),n.removeClass(o.openerActiveClass),t.find("."+o.openerActiveClass).removeClass(o.openerActiveClass),t.find("ul").hide(),!1):!1}).on("doToggle",function(e){return t.is(":visible")?t.trigger("doCollapse"):t.trigger("doExpand"),!1}),n.disableSelection_dropotron().addClass("opener").css("cursor","pointer").on("click touchend",function(e){r||(e.preventDefault(),e.stopPropagation(),t.trigger("doToggle"))}),"hover"==o.expandMode&&n.hover(function(e){r||(d=window.setTimeout(function(){t.trigger("doExpand")},o.hoverDelay))},function(e){window.clearTimeout(d)})}),s.find("a").css("display","block").on("click touchend",function(t){r||e(this).attr("href").length<1&&t.preventDefault()}),n.find("li").css("white-space","nowrap").each(function(){var t=e(this),o=t.children("a"),s=t.children("ul"),i=o.attr("href");o.on("click touchend",function(e){0==i.length||"#"==i?e.preventDefault():e.stopPropagation()}),o.length>0&&0==s.length&&t.on("click touchend",function(e){r||(n.trigger("doCollapseAll"),e.stopPropagation())})}),n.children("li").each(function(){var t,n=e(this),s=n.children("ul");if(s.length>0){o.detach&&(o.cloneOnDetach&&(t=s.clone(),t.attr("class","").hide().appendTo(s.parent())),s.detach().appendTo(i));for(var a=o.baseZIndex,l=1,r=s;r.length>0;l++)r.css("z-index",a++),o.submenuClassPrefix&&r.addClass(o.submenuClassPrefix+(a-1-o.baseZIndex)),r=r.find("> li > ul")}}),l.on("scroll",function(){n.trigger("doCollapseAll")}).on("keypress",function(e){r||27!=e.keyCode||(e.preventDefault(),n.trigger("doCollapseAll"))}),a.on("click touchend",function(){r||n.trigger("doCollapseAll")})}}(jQuery);



*/

