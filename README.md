styled-select
=============

A fork of the Styled Select jQuery plugin made by Petr Stanicek: http://wellstyled.com/en/javascript-styleselect-jquery-plugin/

The original plugin had some issues in WordPress, because:

1. It used the "$.browser" object, which is deprecated in the latest versions of jQuery
2. It triggered the "change" event of the select items which were styled. This made a bug with some WordPress default widgets, because it also triggered their "change" event (which changed the location of the page), thus reloading it indefinitely.

I've removed the use of "$.browser" and changed the way of initialization (without triggering the "change" event).
