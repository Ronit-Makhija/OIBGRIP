var timelineNav = $(".timeline-nav");
var reelNav = $(".reel-nav");
var dadNav = $(".dad-nav");
var talesNav = $(".tales-nav");
var fanNav = $(".fan-nav");
var tributeNav = $(".tribute-nav");
var homeNav = $(".home-nav");
var homeContent = $(".homepage-content");
var timelineContent = $(".timeline");
var highlightContent = $(".highlight-reel");
var girlDadContent = $(".girl-dad");
var talesContent = $(".tales");
var tributesContent = $(".tribute");
var content1 = $(".content-1");
var content2 = $(".content-2");
var content3 = $(".content-3");
var content4 = $(".content-4");
var content5 = $(".content-5");
var content6 = $(".content-6");

timelineNav.click(function(){
  timelineNav.css("color", "#eebc3f");
  reelNav.css("color", "white");
  dadNav.css("color", "white");
  talesNav.css("color", "white");
  tributeNav.css("color", "white");
  homeContent.css("visibility", "hidden");
  highlightContent.css("visibility", "hidden");
  timelineContent.css("visibility", "visible");
  girlDadContent.css("visibility","hidden");
  talesContent.css("visibility","hidden");
  tributesContent.css("visibility","hidden");
});

homeNav.click(function(){
  timelineNav.css("color", "white");
  reelNav.css("color", "white");
  dadNav.css("color", "white");
  talesNav.css("color", "white");
  tributeNav.css("color", "white");
  homeContent.css("visibility", "visible");
  highlightContent.css("visibility", "hidden");
  timelineContent.css("visibility", "hidden");
  girlDadContent.css("visibility","hidden");
  talesContent.css("visibility","hidden");
  tributesContent.css("visibility","hidden");
});

reelNav.click(function(){
  timelineNav.css("color", "white");
  reelNav.css("color", "#eebc3f");
  dadNav.css("color", "white");
  talesNav.css("color", "white");
  tributeNav.css("color", "white");
  homeContent.css("visibility", "hidden");
  highlightContent.css("visibility", "visible");
  timelineContent.css("visibility", "hidden");
  girlDadContent.css("visibility","hidden");
  talesContent.css("visibility","hidden");
  tributesContent.css("visibility","hidden");
});
dadNav.click(function(){
  timelineNav.css("color", "white");
  reelNav.css("color", "white");
  dadNav.css("color", "#eebc3f");
  talesNav.css("color", "white");
  tributeNav.css("color", "white");
  homeContent.css("visibility", "hidden");
  highlightContent.css("visibility", "hidden");
  timelineContent.css("visibility", "hidden");
  girlDadContent.css("visibility","visible");
  talesContent.css("visibility","hidden");
  tributesContent.css("visibility","hidden");
});
talesNav.click(function(){
  timelineNav.css("color", "white");
  reelNav.css("color", "white");
  dadNav.css("color", "white");
  talesNav.css("color", "#eebc3f");
  tributeNav.css("color", "white");
  homeContent.css("visibility", "hidden");
  highlightContent.css("visibility", "hidden");
  timelineContent.css("visibility", "hidden");
  girlDadContent.css("visibility","hidden");
  talesContent.css("visibility","hidden");
  talesContent.css("visibility","visible");
  tributesContent.css("visibility","hidden");
});
 tributeNav.click(function(){
   timelineNav.css("color", "white");
   reelNav.css("color", "white");
   dadNav.css("color", "white");
   talesNav.css("color", "white");
   tributeNav.css("color", "#eebc3f");
  homeContent.css("visibility", "hidden");
  highlightContent.css("visibility", "hidden");
  timelineContent.css("visibility", "hidden");
  girlDadContent.css("visibility","hidden");
  talesContent.css("visibility","hidden");
  talesContent.css("visibility","hidden");
  tributesContent.css("visibility","visible");
});
content1.click(function(){
  content1.css("opacity", "1");
  content2.css("opacity", "0.2");
  content3.css("opacity", "0.2");
  content4.css("opacity", "0.2");
  content5.css("opacity", "0.2");
  content6.css("opacity", "0.2");
  $(".time-img").css("content","url('https://static01.nyt.com/images/2020/02/23/sports/21kobe-stein-1/21kobe-stein-1-mobileMasterAt3x.jpg')");
});

content2.click(function(){
  content2.css("opacity", "1");
  content1.css("opacity", "0.2");
  content3.css("opacity", "0.2");
  content4.css("opacity", "0.2");
  content5.css("opacity", "0.2");
  content6.css("opacity", "0.2");
  $(".time-img").css("content","url('https://basketballforever.com/wp-content/uploads/2022/02/Kobe-bryant-all-star-game-MVP-Feb-2020.jpg')");
  $(".time-img").css("height","70%");
});
content3.click(function(){
  content3.css("opacity", "1");
  content1.css("opacity", "0.2");
  content2.css("opacity", "0.2");
  content4.css("opacity", "0.2");
  content5.css("opacity", "0.2");
  content6.css("opacity", "0.2");
  $(".time-img").css("content","url('https://cdn.dmcl.biz/media/image/168453/o/ReaGEXTGQ0YhIUyT')");
  $(".time-img").css("height","70%");
});
content4.click(function(){
  content4.css("opacity", "1");
  content1.css("opacity", "0.2");
  content3.css("opacity", "0.2");
  content2.css("opacity", "0.2");
  content5.css("opacity", "0.2");
  content6.css("opacity", "0.2");
  $(".time-img").css("content","url('https://i.pinimg.com/736x/08/f8/e2/08f8e2b16131cc16fee0ffb368985f9c--la-lakers-kobe-bryant.jpg')");
});
content5.click(function(){
  content5.css("opacity", "1");
  content1.css("opacity", "0.2");
  content3.css("opacity", "0.2");
  content4.css("opacity", "0.2");
  content2.css("opacity", "0.2");
  content6.css("opacity", "0.2");
  $(".time-img").css("content","url('https://library.sportingnews.com/2021-08/kobe-bryant-getty-012620-ftrjpg_15jtpymmiitkj1egit2frrzyhs.jpg')");
  $(".time-img").css("height","70%");
});
content6.click(function(){
  content6.css("opacity", "1");
  content1.css("opacity", "0.2");
  content3.css("opacity", "0.2");
  content4.css("opacity", "0.2");
  content5.css("opacity", "0.2");
  content2.css("opacity", "0.2");
  $(".time-img").css("content","url('https://cdn.vox-cdn.com/thumbor/2tPisLesIs2g88KwVscANTDfj3M=/0x0:5184x3456/1400x933/filters:focal(1888x596:2716x1424):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66172114/IMG_0866.0.jpg')");
});
