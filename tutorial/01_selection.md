# selections in d3
  * select - Selects only first DOM element by matching the given CSS selector.
  * selectAll - Selects all DOM elements by matching the given CSS selector.

ex: d3.select("p") will select first p tag only, d3.selectAll("p") will select all p tags in the document.

### D3 api pattern
  * Get -> something.method() (without params)
  * Set -> something.method(value) (with params)

### Changing content 
  * selection.text
  * selection.html

### Adding and Removing
  * selection.append
  * selection.remove

### Changing properties
  * selection.attr(property, value)
  * selection.style(property, value)
(if only one param passed then it will act as get)