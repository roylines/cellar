$(document).ready(function() {
  jQuery.each(ads, function() {
  $("#ads").append(
    '\
    <li class="span3">\
    <div class="thumbnail">\
    <h5>' + this.title + '</h5>\
    <img width="115" height="140" src="' + this.img + '" alt="">\
    <p>Price: £' + this.price + ' <a href="' + this.url + '">Bid Now</a></p>\
    </div>\
    </li>');
  });
 });

