// Remove
describe('The "arrow(node).remove()" function', function(){
	beforeEach(function() {
		loadFixtures('arrow.html');
	});

	it('should remove a single element and it\'s children from the DOM', function(){
		arrow('#spec-div-container').remove();

		expect($('#spec-div-container').length).toEqual(0);
	});

	it('should remove multiple elements and it\'s children from the DOM', function(){
		arrow('.spec-text').remove();

		expect($('.spec-text').length).toEqual(0);
	});
});