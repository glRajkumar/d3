# Scales in d3
1. Number -> Number.
  * Linear
  * Square root
  * Logarithmic

2. Ordinal or Categarical -> Number. 
  * Ordinal (one to one mapped)
  * ranged (band)

### Helper methods
  * d3.scaleLinear().domain(domainExtent).range(rangeExtent)
  * d3.scaleSqrt().domain(domainExtent).range(rangeExtent)
  * d3.scaleOrdinal().domain(domain).range(range)
  * d3.scaleBand().domain(domain).range(rangeExtent)

extent = [min, max]