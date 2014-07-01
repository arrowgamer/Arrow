jasmine.getFixtures().fixturesPath = 'base/test/fixtures/';

// Add class
describe('The "arrow(node).addClass(classname)" function', function(){
	beforeEach(function() {
		loadFixtures('addClass.html');
	});

	it('should be able to select an element by a string ID and add a class', function(){
		var spec = arrow('#spec-add-container').addClass('added-spec-class');

		expect($('#spec-add-container')).toHaveClass('added-spec-class');
	});

	it('should be able to select multiple elements with classes and add additional classes', function(){
		var spec = arrow('.spec-text').addClass('added-spec-text-class');

		expect($('.spec-text')[0]).toHaveClass('added-spec-text-class');
		expect($('.spec-text')[1]).toHaveClass('added-spec-text-class');
	});

	it('should be able to select multiple tags and add classes', function(){
		var spec = arrow('p').addClass('added-spec-p-class');

		expect($('p')).toHaveClass('added-spec-p-class');
	});
});