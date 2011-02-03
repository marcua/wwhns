all:
	java -jar yuicompressor-2.4.2.jar wwhns.js > wwhns-min.js
	python generate-bookmarklet.py > wwhns.html

