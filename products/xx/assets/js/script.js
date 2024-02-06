var ua = navigator.userAgent;
$(document).ready(function(){
var agent = window.navigator.userAgent.toLowerCase();
var ipad = agent.indexOf('ipad') > -1 || agent.indexOf('macintosh') > -1 && 'ontouchend' in document;
if( ipad == true ){$('html,body').addClass('ipados');}
$('body').append('<div id="baseVW"></div>');
$('html,body').addClass('pageloaded');
var loadeditems = '#imageloaded img,#imageloaded i,main img';
$(loadeditems).imagesLoaded({background: true}).always(function(){
}).done(function () {imagescomp();}).fail(function () {imagescomp();});
function imagescomp() {$('html,body').addClass('imgloaded');$('html,body').addClass('windowloaded');}
$(window).on('load', function () {$('html,body').addClass('webloaded');});
$('a.anchorLink').on('click',function(e){e.preventDefault();
var $to = $($(this).attr('href')).offset().top; var off = 0;
gsap.to(window, 1, {scrollTo:{ease: Power4.easeOut,y:$to-off,autoKill:false}});
$('html,body').addClass('scrollto');
setTimeout(function(){$('html,body').removeClass('scrollto');},1100);
});
let offsetpar = 0.22;if($('#baseVW').width()>1024){let offsetpar = 0.5;}
const headings = document.querySelectorAll('.-ani');
const options = {threshold: offsetpar};
const observer = new IntersectionObserver(showElements,options);headings.forEach(heading => {observer.observe(heading);});
function showElements(entries){entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('animated');}});
};
});