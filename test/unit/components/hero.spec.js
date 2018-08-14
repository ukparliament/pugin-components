const testHelper = require('../../helpers/test-helper');

describe('Hero dust component', function() {
  testHelper.setupBefore()

  it('when there is a content flag', function(done) {
    testHelper.shunterTest('hero-content-flag', 'components__hero', 'components', done)
  });

  it('when there is no content flag', function(done) {
    testHelper.shunterTest('hero-no-content-flag', 'components__hero', 'components', done)
  });
});
