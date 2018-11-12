const testHelper = require('../../helpers/test-helper');

describe('Aside dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('aside', 'components__aside', 'components', done)
  });
});
