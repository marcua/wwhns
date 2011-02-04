# What Would Hacker News Say?

What Would Hacker News Say (WWHNS) is a bookmarklet that allows you to see
if there is a [Hacker News](http://news.ycombinator.com/) (HN) discussion about
a page you are currently viewing.

I often find a link through a feed reader or Twitter and want to know if there is an HN thread discussing the link.  This happens more often now that I have moved over to following
[@newsyc20](http://twitter.com/#!/newsyc20) on Twitter rather than visiting the HN website directly.  I batch up a bunch of stories to read at once, and lose context of which HN thread pointed to that page.

The WWHNS bookmarklet, when clicked, looks the current page up in [Ronnie
Roller's wonderful HN API](http://api.ihackernews.com/), and
adds a link to the top right of the current page to any existing HN comment
threads.

I tested it in Chrome and Firefox.  Let me know if it works in other browsers.

Caveat: This bookmarklet will work for links you followed by way of HN or
another source which replicates it.  It may not work if you arrived at a
page from a source outside of HN, since that link might be slightly
different from the one posted to HN.

# To use WWHNS
Easy

* Follow the instructions [On my blog]() (not linkbait: github escapes my bookmarklet link because it contains javascript)
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

# License
BSD

# Shoutouts
[Ben Alman](http://benalman.com/projects/run-jquery-code-bookmarklet/)--For the jQuery bookmarklet HOWTO
[Ronnie Roller](http://twitter.com/#!/ronnieroller)--For an awesome [HN API](http://api.ihackernews.com/)  
[YUI Compressor](https://developer.yahoo.com/yui/compressor/)--Makes JavaScript small  
[Hacker News](http://news.ycombinator.com/)--For having comment threads worth reading  
