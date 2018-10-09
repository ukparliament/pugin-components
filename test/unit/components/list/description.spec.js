const testHelper = require('../../../helpers/test-helper');

describe('Description list dust component', function() {
    testHelper.setupBefore()

    it('when given one-to-one pairs of items, should return html from the dust component', function(done) {
        testHelper.shunterTest('description-one-to-one', 'components__list__description', 'components/list', done)
    });

    it('when given one-to-many pairs of items, should return html from the dust component', function(done) {
        testHelper.shunterTest('description-one-to-many', 'components__list__description', 'components/list', done)
    });

    it('when given multiples of one-to-one pairs of items, should return html from the dust component', function(done) {
        testHelper.shunterTest('description-multiple-one-to-one', 'components__list__description', 'components/list', done)
    });

    it('when given multiples of one-to-many pairs of items, should return html from the dust component', function(done) {
        testHelper.shunterTest('description-multiple-one-to-many', 'components__list__description', 'components/list', done)
    });

    it('when given an item with a translation key, should return html from the dust component', function(done) {
        testHelper.shunterTest('description-translation-key', 'components__list__description', 'components/list', done)
    });

    it('when given an item with a translation key with data, should return html from the dust component', function(done) {
        testHelper.shunterTest('description-translation-key-data', 'components__list__description', 'components/list', done)
    });

    it('when given an item is not given a term, should return html from the dust component', function(done) {
        testHelper.shunterTest('description-no-term', 'components__list__description', 'components/list', done)
    });
    it('when given a meta tag, should return a class of meta', function(done) {
        testHelper.shunterTest('description-with-meta', 'components__list__description', 'components/list', done)
    });
});
