// Remove class
describe('The "arrow(node).removeClass(classname)" function', function(){
	beforeEach(function() {
		loadFixtures('removeClass.html');
	});

	it('should be able to select an element by a string ID and remove a class', function(){
		var spec = arrow('#spec-remove-container').removeClass('spec-id-remove');

		expect($('#spec-remove-container')).not.toHaveClass('spec-id-remove');
	});

	it('should be able to select multiple elements with classes and remove all matched classes', function(){
		var spec = arrow('.spec-text').removeClass('spec-remove');

		expect($('.spec-text')[0]).not.toHaveClass('spec-remove');
		expect($('.spec-text')[1]).not.toHaveClass('spec-remove');
	});

	it('should be able to select multiple tags and remove classes', function(){
		var spec = arrow('p').removeClass('spec-p-remove');

		expect($('p')).not.toHaveClass('spec-p-remove');
	});
});