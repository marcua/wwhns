// 1) Go to http://benalman.com/code/test/jquery-run-code-bookmarklet/
// 2) Use jQuery >= 1.4.2
// 3) Copy and paste the following code
$.get("http://api.ihackernews.com/getid",
      {
          format: "jsonp", 
          url:window.location.href
      },
      function(data) {
        var div = "<div id='__wwhns__' style='margin: 5px; padding: 5px; text-align:left; font: 14px Helvetica;display:block; position:absolute; height:300px; top:0; right:0; width:350px; background:#FFFFFF; border:1px solid #ddd;'>";
        div = div + "<a href='#' id='__wwhns_close__'>Close</a>"
        if (data.length > 0) {
            div = div + "<ul>"
            for (var i = 0; i < data.length; i++) {
                div = div + "<li><a href='http://news.ycombinator.com/item?id=";
                div = div + data[i] + "'>Thread " + (i+1);
                div = div + "</a></li>";
            }
            div = div + "</ul>"
        } else {
            div = div + "<br>No threads found";
        }
        div = div + "</div>";
        $("body").append(div);
        $("#__wwhns_close__").click(function() {
            $("#__wwhns__").remove();
            return false;
        });
      },
      "jsonp");
