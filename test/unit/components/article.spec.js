const testHelper = require('../../helpers/test-helper');

describe('Article dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('article', 'components__article', 'components', done);
  });
});
