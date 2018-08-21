const testHelper = require('../../../helpers/test-helper');

describe('Hint dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('hint', 'components__partials__hint', 'components/partials', done)
  });
});
