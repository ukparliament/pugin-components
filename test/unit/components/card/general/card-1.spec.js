const testHelper = require('../../../../helpers/test-helper');

describe('card-1 dust component', function() {
  testHelper.setupBefore()

  it('a Card-1 component', function(done) {
    testHelper.shunterTest('card-1', 'components__card__general__card-1', 'components/card/general', done)
  });

  it('when it is inline', function(done) {
    testHelper.shunterTest('card-1-inline', 'components__card__general__card-1', 'components/card/general', done)
  });

  it('when there are multiple paragraphs', function(done) {
    testHelper.shunterTest('card-1-multiple-paragraphs', 'components__card__general__card-1', 'components/card/general', done)
  });
});
