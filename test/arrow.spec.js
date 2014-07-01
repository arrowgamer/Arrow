/*-----------------------
Utility method tests
-------------------------*/
describe('The "merge(receiver, supplier)" function', function(){
	beforeEach(function() {
		var objOne = {
			name: 'Joe'
			,age: 31
			,friends: [
				{
					name: 'James'
					,age: 35
				}
				,{
					name: 'Alex'
					,age: 32
				}
				,{
					name: 'Rene'
					,age: 54
				}
			]
		};

		var objTwo = {
			name: 'Fred'
			,age: 31
			,friends: [
				{
					name: 'LaToya'
					,age: 31
				}
				,{
					name: 'Carlos'
					,age: 30
				}
			]
		};

		this.objSpec = arrow.merge(objOne, objTwo);
	});

	afterEach(function(){
		this.objSpec = null;

		delete this.objSpec;
	});

	it("can do a simple merge of two or more objects together into the first object", function() {
		expect(this.objSpec.name).toBe('Fred');
	});

	it("can do a complex merge of two or more objects together into the first object", function() {
		expect(this.objSpec.friends.length).toEqual(3);
		expect(this.objSpec.friends[1].name).toBe('Carlos');
	});
});

describe('the "percent(current, total)" method', function(){
	it('will return a percent of 2 numbers', function(){
		var percentSpec = arrow.percent(25, 200);

		expect(percentSpec).toEqual(0.125);
	});
});

describe('the "convertToSeconds(timecode)" should', function(){
	it('will convert a formatted time into seconds from seconds', function(){
		var secondsSpec = arrow.convertToSeconds('00:00:20');

		expect(secondsSpec).toEqual(20);
	});

	it('will convert a formatted time into seconds from minutes', function(){
		var minutesSpec = arrow.convertToSeconds('00:03:00');

		expect(minutesSpec).toEqual(180);
	});

	it('will convert a formatted time into seconds from hours', function(){
		var minutesSpec = arrow.convertToSeconds('03:00:00');

		expect(minutesSpec).toEqual(10800);
	});
});


/*-----------------------
DOM manipulation tests
-------------------------*/
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