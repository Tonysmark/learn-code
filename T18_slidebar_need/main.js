;$(function()
{
  'use strick';

  var sidebar = $('#sidebar'),
  mask = $('.mask'),
  sidebar_trigger = $('#sidebar_trigger');
// 让汉堡标签在点击的时候隐藏，之后在显示

  function showSideBar(){
    mask.fadeIn();
    sidebar.css('right', 0);

  }
  function hideSideBar(){
    mask.fadeOut();
    sidebar.css('right', -sidebar.width());
  }

  sidebar_trigger.on('click',showSideBar)
  mask.on('click',hideSideBar)


})
