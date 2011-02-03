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
* For any page, click on the `WWHNS` button in your bookmark toolbar.

Hard

* Check out this git repository
* Type `make`
* Open `wwhns.html` in a browser
* Copy the `WWHNS` link to your bookmark toolbar
* For any page, click on the `WWHNS` button in your bookmark toolbar

# To edit the bookmarklet
* Fork this git repository
* Edit `wwhns.js`
* Type `make`
* Open `wwhns.html` in a browser
* Copy the `WWHNS` link to your bookmark toolbar
* For any page, click on the `WWHNS` button in your bookmark toolbar
* Push the changes back to me.  I'd love to see what you do with it!

# Shoutouts
[Ronnie Roller](http://twitter.com/ronnieroller)--For an awesome [HN API](http://api.ihackernews.com/)  
[YUI Compressor](https://developer.yahoo.com/yui/compressor/)--Makes JavaScript small  
[Hacker News](http://news.ycombinator.com/)--For having comment threads worth reading  
