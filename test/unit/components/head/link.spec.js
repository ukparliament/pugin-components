const testHelper = require('../../../helpers/test-helper');

describe('Head link dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('link', 'components__head__link', 'components/head', done)
  });
});
