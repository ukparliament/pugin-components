const testHelper = require('../../../helpers/test-helper');

describe('Portcullis ACSII art dust component', function() {
  testHelper.setupBefore();

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('portcullis', 'components__head__portcullis', 'components/head', done);
  });
});
