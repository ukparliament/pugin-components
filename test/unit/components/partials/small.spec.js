const testHelper = require('../../../helpers/test-helper');

describe('Small dust partial', function() {
  testHelper.setupBefore()

  it('When given a link it should return html from the dust component', function(done) {
    testHelper.shunterTest('small', 'components__partials__small', 'components/partials', done)
  });

  it('Without a link it should return html from the dust component', function(done) {
    testHelper.shunterTest('small_no_link', 'components__partials__small', 'components/partials', done)
  });
});
