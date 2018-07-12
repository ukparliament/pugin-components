const testHelper = require('../../../helpers/test-helper');

describe('Head meta dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('meta', 'components__head__meta', 'components/head', done)
  });
});
