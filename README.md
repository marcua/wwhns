# What Would Hacker News Say?

What Would Hacker News Say (WWHNS) is a bookmarklet which allows you to see
if there is a [Hacker News](http://news.ycombinator.com/) (HN) discussion about
a page you are currently viewing.

I used to visit HN through its website, but have moved over to following
[@newsyc20](http://twitter.com/#!/newsyc20) on Twitter more and more.
While a comment thread link is provided in each Tweet, I often batch up a
bunch of stories to read at once, and lose context of the HN comment thread
link after some time.

The WWHNS bookmarklet, when clicked, looks the current page up in [Ronnie
Roller's wonderful Unofficial HN API](http://api.ihackernews.com/), and
adds a link to the top right of the current page to any existing HN comment
threads.

I tested it in Chrome and Firefox.  Let me know if it works in other browsers.

# To use WWHNS
Easy  
* Follow the instructions [On my blog]() (not linkbait: github is escaping my link because it contains javascript)
<a href="javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement(&quot;script&quot;);c.type=&quot;text/javascript&quot;;c.src=&quot;http://ajax.googleapis.com/ajax/libs/jquery/&quot;+g+&quot;/jquery.min.js&quot;;c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d==&quot;loaded&quot;||d==&quot;complete&quot;)){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,&quot;1.4.2&quot;,function($,L){$.get(&quot;http://api.ihackernews.com/getid&quot;,{format:&quot;jsonp&quot;,url:window.location.href},function(b){var c=&quot;<div id='__wwhns__' style='margin: 5px; padding: 5px; text-align:left; font: 14px Helvetica;display:block; position:absolute; height:300px; top:0; right:0; width:350px; background:#FFFFFF; border:1px solid #ddd;'>&quot;;c=c+&quot;<a href='#' id='__wwhns_close__'>Close</a>&quot;;if(b.length>0){c=c+&quot;<ul>&quot;;for(var a=0;a<b.length;a++){c=c+&quot;<li><a href='http://news.ycombinator.com/item?id=&quot;;c=c+b[a]+&quot;'>Thread &quot;+(a+1);c=c+&quot;</a></li>&quot;}c=c+&quot;</ul>&quot;}else{c=c+&quot;<br>No threads found&quot;}c=c+&quot;</div>&quot;;$(&quot;body&quot;).append(c);$(&quot;#__wwhns_close__&quot;).click(function(){$(&quot;#__wwhns__&quot;).remove();return false})},&quot;jsonp&quot;);});">WWHNS</a>
to your bookmark toolbar.

* For any page, click on the `WWHNS` button in your bookmark toolbar.

Hard  
* Check out this git repository
* Write type `make`
* Open `wwhns.html` in a browser
* Copy the `WWHNS` link to your bookmark toolbar
* For any page, click on the `WWHNS` button in your bookmark toolbar

# To edit the bookmarklet

# Shoutouts
[Ronnie Roller](http://twitter.com/ronnieroller)--For an awesome [HN API](http://api.ihackernews.com/)  
[YUI Compressor](https://developer.yahoo.com/yui/compressor/)--Makes JavaScript small  
[Hacker News](http://news.ycombinator.com/)--For having comment threads worth reading  
