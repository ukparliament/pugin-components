const testHelper = require('../../../helpers/test-helper');

describe('Link-button dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('link-button', 'components__partials__link-button', 'components/partials', done)
  });

  it('when given a download flag should return html from the dust component', function(done) {
    testHelper.shunterTest('link-button-download', 'components__partials__link-button', 'components/partials', done)
  });
});
