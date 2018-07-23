const testHelper = require('../../../helpers/test-helper');

describe('Foot script dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('script', 'components__foot__script', 'components/foot', done)
  });
});
