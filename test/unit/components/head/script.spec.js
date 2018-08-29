const testHelper = require('../../../helpers/test-helper');

describe('Head script dust component', function() {
  testHelper.setupBefore();

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('script', 'components__head__script', 'components/head', done)
  });
});
