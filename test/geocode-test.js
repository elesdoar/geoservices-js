var vows   = require('vows');
var assert = require('assert');

var geocode = require('../src/geocode');

vows.describe('Geocode').addBatch({
  'When requesting a valid geocode': {
    topic: function () {
      geocode.geocode({ text: "920 SW 3rd Ave, Portland, OR 97204" }, this.callback);
    },
    'It should return the correct latitude and longitude': function (err, data) {
      assert.equal(err, null);
      assert.equal(data.locations.length, 1);
      assert.equal(data.locations[0].feature.geometry.x, -122.67633658436517);
      assert.equal(data.locations[0].feature.geometry.y, 45.5167324388521);
    }
  }
}).export(module);