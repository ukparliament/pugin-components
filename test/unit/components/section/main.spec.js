const testHelper = require('../../../helpers/test-helper');

describe('Main dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('main', 'components__section__main', 'components/section', done)
  });
});
