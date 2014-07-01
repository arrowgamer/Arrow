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