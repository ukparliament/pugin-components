const testHelper = require('../../../helpers/test-helper');

describe('Head meta dust component', function() {
  testHelper.setupBefore();

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('meta', 'components__head__meta', 'components/head', done)
  });

  context('with a request-id attribute', function() {
    it('should return html from the dust component including the Appinsights meta tag', function(done) {
        testHelper.shunterTest('meta-with-request-id', 'components__head__meta', 'components/head', done)
    });
  });
});
