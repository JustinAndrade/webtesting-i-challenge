module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	item = {
		name: '',
		enhancement: item.enhancement,
		durabilty: ''
	};
	if (item.enhancement >= 20) {
		return 20;
	}
	return item.enhancement + 1;
}

function fail(item) {
	return item * 0 + 100;
}

function repair(item = 0) {
	return item * 0 + 100;
}

function get(item) {
	return { ...item };
}
