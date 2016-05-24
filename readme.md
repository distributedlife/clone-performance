# Clone Performance

~~~shell
Empty Object Test
lodash.cloneDeep x 345,466 ops/sec ±2.78% (80 runs sampled)
stringify x 1,593,270 ops/sec ±2.21% (81 runs sampled)
Immutable.clone x 74,498,842 ops/sec ±3.44% (75 runs sampled)
Fastest is Immutable.clone


Small ~25K Object Test
lodash.cloneDeep x 309 ops/sec ±1.94% (77 runs sampled)
stringify x 1,499 ops/sec ±1.63% (80 runs sampled)
Immutable.clone x 79,360,345 ops/sec ±1.31% (83 runs sampled)
Fastest is Immutable.clone


Medium ~100K Object Test
lodash.cloneDeep x 149 ops/sec ±1.87% (73 runs sampled)
stringify x 264 ops/sec ±4.98% (68 runs sampled)
Immutable.clone x 73,657,061 ops/sec ±3.36% (79 runs sampled)
Fastest is Immutable.clone


Large ~1000K Object Test
lodash.cloneDeep x 21.95 ops/sec ±7.02% (40 runs sampled)
stringify x 43.64 ops/sec ±4.66% (56 runs sampled)
Immutable.clone x 77,332,006 ops/sec ±1.94% (78 runs sampled)
Fastest is Immutable.clone
~~~