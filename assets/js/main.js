function ready() {

  var url = window.location.pathname;
  // Will only work if string in href matches with location
  $('ul.nav-items li a[href="../'+ url +'"]').parent().addClass('active');

  $('div.sidebar-nav-items ul a[href="../'+ url +'"] li' ).addClass('active');
}

$(document).ready(ready);
$(document).on('page:load', ready);