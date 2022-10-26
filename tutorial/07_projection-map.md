# Projection in d3
Determine projection in d3. 

#### general types 
There are lot of types in projection.
  * d3.geoAzimuthalEqualArea
  * d3.geoOrthographic
  * d3.geoStereographic
  * d3.geoConicEqualArea
  * d3.geoMercator
  * d3.geoNaturalEarth1

#### Map
GeoJson used as data for decribing maps. We wil convert geoJson into d3 understandable data by other methods (d3.geoPath).

geoJson format ex:

```json
{
  "feature": {
    "type": "Feature",
    "geometry": {
      "type": "MultiPoligon",
      "coordinates": [],
    },
    "properties": {
      "name": "India",
    },
  },
}
```

ex:
```js
let projection = d3.geoMercator()

let geoPath = d3.geoPath()
  .projection(projection)

chart
  .selectAll("path")
  .data(geojsonData.feature)
  .enter()
  .append("path")
  .attr("d", geoPath)
```
