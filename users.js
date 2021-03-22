var users = [
	{
		"id": 1,
		"username": "japstyle",
		"name": "kuple sang penakluk",
		"position": "mid lane"
	},
	{
		"id": 2,
		"username": "haikalkodok",
		"name": "haikal yahudi",
		"position": "sidelane"
	},
	{
		"id": 3,
		"username": "yuttaanjay",
		"name": "arva",
		"position": "support"
	},
	{
		"id": 4,
		"username": "jambul",
		"name": "rajib",
		"position": "tanker"
	},
	{
		"id": 5,
		"username": "tomo",
		"name": "'eko sutomo",
		"position": "core"
	}
];

exports.findAll = function() {
	return users;
};

exports.findById = function (id) {
	for (var i = 0; i < users.length; i++) {
		if (users[i].id == id) return users[i];
	}
};