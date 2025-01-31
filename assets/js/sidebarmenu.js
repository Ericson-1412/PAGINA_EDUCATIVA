$(function () {
  "use strict";
  
  // Auto select left navbar
  var url = window.location + "";
  var path = url.replace(
    window.location.protocol + "//" + window.location.host + "/",
    ""
  );
  var element = $("ul#sidebarnav a").filter(function () {
    return this.href === url || this.href === path; 
  });

  element.parentsUntil(".sidebar-nav").each(function (index) {
    if ($(this).is("li") && $(this).children("a").length !== 0) {
      $(this).children("a").addClass("active");
      $(this).parent("ul#sidebarnav").length === 0
        ? $(this).addClass("active")
        : $(this).addClass("selected");
    } else if (!$(this).is("ul") && $(this).children("a").length === 0) {
      $(this).addClass("selected");
    } else if ($(this).is("ul")) {
      $(this).addClass("in");
    }
  });

  element.addClass("active");

  $("#sidebarnav a").on("click", function (e) {
    if (!$(this).hasClass("active")) {
      // hide any open menus and remove all other classes
      $("ul", $(this).parents("ul:first")).removeClass("in");
      $("a", $(this).parents("ul:first")).removeClass("active");

      // open our new menu and add the open class
      $(this).next("ul").addClass("in");
      $(this).addClass("active");
    } else if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parents("ul:first").removeClass("active");
      $(this).next("ul").removeClass("in");
    }
  });

  $("#sidebarnav >li >a.has-arrow").on("click", function (e) {
    e.preventDefault();
  });
});

$(document).ready(function() {
  // Reset submenus
  $('.styled-submenu').hide(); // Oculta todos los submenús inicialmente
  $('.sidebar-item .has-arrow').attr('aria-expanded', 'false');

  $('.sidebar-item .has-arrow').on('click', function() {
    // Verifica si el submenú está visible
    var isVisible = $(this).next('.styled-submenu').is(':visible');

    // Cierra todos los submenús y resetea atributos
    $('.styled-submenu').slideUp(200);
    $('.sidebar-item .has-arrow').attr('aria-expanded', 'false');

    if (!isVisible) {
      // Si el submenú estaba cerrado, lo abre
      $(this).next('.styled-submenu').slideDown(200);
      $(this).attr('aria-expanded', 'true');
    }
  });
});