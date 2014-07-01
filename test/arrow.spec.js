jasmine.getFixtures().fixturesPath = 'base/test/fixtures/';

// Selector
describe('The "arrow(node)" function', function(){
	beforeEach(function() {
		loadFixtures('arrow.html');
	});

	it('should be able to select a single element by ID', function(){
		var spec = arrow('#spec-div-container');

		expect(spec.node.nodeName.toLowerCase()).toBe('div');
		expect(spec.node.id).toBe('spec-div-container');
	});

	it('should be able to return a single element by native "getElementById" method', function(){
		var spec = arrow(document.getElementById('spec-div-container'));

		expect(spec.node.nodeName.toLowerCase()).toBe('div');
		expect(spec.node.id).toBe('spec-div-container');
	});

	it('should be able to select a single element by className', function(){
		var spec = arrow('.spec-text').node[0];

		expect(spec.node).toBeUndefined();
		expect(spec.nodeName.toLowerCase()).toBe('span');
		expect(spec.className).toBe('spec-text');
	});

	it('should be able to return a single element by native "getElementsByClassName" method', function(){
		var spec = arrow(document.getElementsByClassName('spec-text')[0]);

		expect(spec.node.nodeName.toLowerCase()).toBe('span');
		expect(spec.node.className).toBe('spec-text');
	});

	it('should be able to return a single element by native "querySelectorAll" method', function(){
		var spec = arrow(document.querySelectorAll('.spec-text')[0]);

		expect(spec.node.nodeName.toLowerCase()).toBe('span');
		expect(spec.node.className).toBe('spec-text');
	});

	it('should be able to select multiple elements by className', function(){
		var spec = arrow('.spec-text')
			,count = 0;

		expect(spec.node.length).toBeGreaterThan(0);
		expect(spec.node.length).toEqual(2);

		var length = spec.node.length;

		for(var i=0;i<length;i++){
			expect(spec.node[i].nodeName.toLowerCase()).toBe('span');
			expect(spec.node[i].className).toBe('spec-text');

			count++;
		}

		expect(count).toEqual(2);
	});
});