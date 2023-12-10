# AJAX
 - [ ] HTTP Protocol & HTML
 - [ ] Why Ajax?
 - [ ] Brief History
 - [ ] iFrame & XMLHttpRequest

### HTTP Protocol & HTML
 - request - response
 - HTML is a static page
 - HTML 'live' elements (clickable):
  - Download Elements (Fetch)
  - Upload Elements (Send)
   - `<a>`
   - `<input type=submit>` (only in a form)
   -  `<button type=submit>` (only in a form)
 - replaces the entire browser page   (docuement)
 - That was all there was for years.  Boring!

### iFrame
 - 1996 Microsoft introduced the `<iframe>` tag
 - mini page within a page
 - the beginning of a new concept in web pages
 - mini-requests

###  XMLHttpRequest (XHR)
 - Originally developed for Microsoft Outlook
 - Included in IE in 2000
 - uses the `XMLHttpRequest` object
 - not the easiest code to write

 ### Ajax
 - the term "AJAX" was coined in 2006
 - "Asynchronous JavaScript and XML"
 - Its not a technology, but rather a programming concept
 - combines existing technologies in a new way
  - html + CSS for presentation
  - XHR for communication
  - XML (later JSON) for data
  - DOM for dynamic display of data
  - JavaScript brings it all together

### XML
 - Why XML in the name?
 - in the 2000's XML was the hot thing. There was X-Everything!
 - XML: markup language for packaging, transmitting data
 ```xml
 <person>
  <name>Alice</name>
  <age>32</age>
 </person>
 ```
 - XML has the concept of "XML Schema's" (template)
 - Library of tags you are allowed to use
 - HTML is a variant of XML (browser will allow broken tags)
 - today we use JSON because it can be read natively by JavaScript
 - XML needs to be parsed (eg: `about.xml`)

### jQuery Ajax - the really old way
- jQuery makes things easier.
- import the jQuery library with a 'CDN'
- https://cdnjs.com
- `$.ajax()` function: the old (harder) way (don't forget `.ready()`)
- fetch `about.json`. Can see the "GET" network tab
- use `.success` function to return a successful response
- other ajax options: `error`, `method`/`type` (default is "GET")
- `success` and `error` are deprecated.  Do not use!
