const testHelper = require('../../../helpers/test-helper');

describe('Count dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('count', 'components__partials__count', 'components/partials', done)
  });
});
