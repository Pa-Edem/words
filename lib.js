Array.prototype.shuffle = function () {
	if (this.length == 1) {
		return this;
	}
	for (let j, x, i = this.length; i; j = Math.floor(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
	return this;
}

export const wordList = ["АНТИЛОПА",
	"БЕГЕМОТ",
	"АВТОМОБИЛЬ",
	"ФУТБОЛ",
	"ПАРОВОЗ",
	"КОРОБКА",
	"ПИАНИНО",
	"ТЕЛЕВИЗОР",
	"РЕСТОРАН",
	"ОЛИМПИАДА"
];