const testHelper = require('../../../helpers/test-helper');

describe('Generic card dust component', function() {
  testHelper.setupBefore()

  it('when given all possible components and partials it should return html from the dust component', function(done) {
    testHelper.shunterTest('generic-all', 'components__card__generic', 'components/card', done)
  });

  it('when given a heading it should return html from the dust component', function(done) {
    testHelper.shunterTest('generic-heading', 'components__card__generic', 'components/card', done)
  });

  it('when given a heading and a paragraph it should return html from the dust component', function(done) {
    testHelper.shunterTest('generic-heading-paragraph', 'components__card__generic', 'components/card', done)
  });

  it('when given a heading, a paragraph and an image it should return html from the dust component', function(done) {
    testHelper.shunterTest('generic-heading-paragraph-img', 'components__card__generic', 'components/card', done)
  });

  it('when given a heading, a paragraph, an image and a button it should return html from the dust component', function(done) {
    testHelper.shunterTest('generic-heading-paragraph-img-button', 'components__card__generic', 'components/card', done)
  });

  it('when given a heading and a count it should return html from the dust component', function(done) {
    testHelper.shunterTest('generic-heading-count', 'components__card__generic', 'components/card', done)
  });

  it('when given a heading and a description list it should return html from the dust component', function(done) {
    testHelper.shunterTest('generic-heading-description-list', 'components__card__generic', 'components/card', done)
  });

  it('when given a heading and a generic list it should return html from the dust component', function(done) {
    testHelper.shunterTest('generic-heading-generic-list', 'components__card__generic', 'components/card', done)
  });

});
