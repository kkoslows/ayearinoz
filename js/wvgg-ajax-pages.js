(function($) {
  $.fn.wvgg_ajax_load = function(arguments) {
    // store success callback
      var success_callback = arguments.success;
      var url = arguments.url;
      var source_path = $.url(document.location).attr('path');
      var new_path = $.url(url).attr('path');
    // make out own callback
      arguments.success = function(r) {
        // replace each .ajax_replaceable element
          $(r).filter('.ajax_replaceable').each(function(i,n) {
            var id = $(n).attr('id');
            if(id) {
              $('#'+id).replaceWith($(n));
            }
          });
        // update the title?
          var title = $(r).filter('#wp-ajax-title').html();
          if(!title) title = $(r).filter('title').html();
          if(history.pushState && title && new_path != source_path) {
            history.pushState({}, title, url);
            document.title = title;
          }
        // run stored callback
          success_callback(r);
      }
    // run the ajax request
      $.ajax(arguments);
  };
})(jQuery);
