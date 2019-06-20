const { repair, succeed } = require('./enhancer.js');
// test away!
describe('the repair function', () => {
	it('should', () => {
		expect(repair(5)).toBe(100);
		expect(repair()).toBe(100);
	});
});

const sword = {
	name: 'Excaliber',
	enhancement: 20,
	durability: 80
};

const axe = {
	name: 'The Great Axe',
	enhancement: 17,
	durability: 32
};

describe('the succeed function', () => {
	it('should', () => {
		expect(succeed(sword)).toBe(20);
		expect(succeed(axe)).toBe(18);
	});
});
