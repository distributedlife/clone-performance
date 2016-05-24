const lodash = require('lodash');
const Benchmark = require('benchmark');
const Immutable = require('immutable');

function newSuite (name) {
  return new Benchmark.Suite(name, {
    onStart: () => console.log(`\n\n${name}`),
    onCycle: event => console.log(String(event.target)),
    onComplete: function () {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    }
  });
}

const empty = newSuite('Empty Object Test');
const emptyData = new require('./data/empty');
const iEmptyData = Immutable.Map(require('./data/empty'));

empty.add('lodash.cloneDeep', () => lodash.cloneDeep(emptyData));
empty.add('stringify', () => JSON.parse(JSON.stringify(emptyData)));
empty.add('Immutable.clone', () => iEmptyData);
empty.add('Immutable.toJS', () => iEmptyData.toJS());
empty.run({ async: false });


const small = newSuite('Small ~25K Object Test');
const smallData = new require('./data/small');
const iSmallData = Immutable.Map(require('./data/small'));

small.add('lodash.cloneDeep', () => lodash.cloneDeep(smallData));
small.add('stringify', () => JSON.parse(JSON.stringify(smallData)));
small.add('Immutable.clone', () => iSmallData);
small.add('Immutable.toJS', () => iSmallData.toJS());
small.run({ async: false });


const medium = newSuite('Medium ~100K Object Test');
const mediumData = new require('./data/medium');
const iMediumData = Immutable.Map(require('./data/medium'));

medium.add('lodash.cloneDeep', () => lodash.cloneDeep(mediumData));
medium.add('stringify', () => JSON.parse(JSON.stringify(mediumData)));
medium.add('Immutable.clone', () => iMediumData);
medium.add('Immutable.toJS', () => iMediumData.toJS());
medium.run({ async: false });


const large = newSuite('Large ~1000K Object Test');
const largeData = new require('./data/large');
const iLargeData = Immutable.Map(require('./data/large'));

large.add('lodash.cloneDeep', () => lodash.cloneDeep(largeData));
large.add('stringify', () => JSON.parse(JSON.stringify(largeData)));
large.add('Immutable.clone', () => iLargeData);
large.add('Immutable.toJS', () => iLargeData.toJS());
large.run({ async: false });
