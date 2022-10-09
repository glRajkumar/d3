# Loading data
It is Asynchronous, requires a server and automatically parsed.
  * d3.csv(dataUrl).then(callback).catch(errorHandler)
  * d3.json(dataUrl).then(callback).catch(errorHandler)

### Helper methods
  * d3.ascending
  * d3.descending
  * d3.min(data, ?accessor)
  * d3.max(data, ?accessor)
  * d3.extent(data, ?accessor) => [minimum, maximum]
  * d3.sum(data, ?accessor)
  * d3.mean(data, ?accessor)

accessor is a function which returns the data we want to look.
ex: d3.sum(data, v => v.cost)


### Binding data
  * selection.data(data, ?key) - for multiple data
  * selection.datam(data) - for single data