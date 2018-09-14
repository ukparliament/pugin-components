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

  context('with a simple title attribute', function() {
      it('should return html from the dust component including the title given', function(done) {
          testHelper.shunterTest('meta-with-simple-title', 'components__head__meta', 'components/head', done)
      });
  });

  context('with a translation title attribute', function() {
      it('should return html from the dust component including the translated title', function(done) {
          testHelper.shunterTest('meta-with-translation-title', 'components__head__meta', 'components/head', done)
      });
  });

    context('with no title attribute given', function() {
        it('should return html from the dust component including the shared title', function(done) {
            testHelper.shunterTest('meta-with-no-title', 'components__head__meta', 'components/head', done)
        });
    });
});
