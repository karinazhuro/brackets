module.exports = function check(str, bracketsConfig) {
	if (str.length % 2 !== 0) return false;

	const split = str.split('');

	for (let i = split.length; i !== 0; i--) {
		bracketsConfig.forEach(item => {
			const index = split.join('').indexOf(item.join(''));

			if (index >= 0) {
				split.splice(index, 2);
			}
		});
	}

	return !split.length;
}