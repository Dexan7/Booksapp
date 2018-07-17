// es5
//function book(name, author, year, seria, price, image) {
	//return {
		//name, author, year, seria, price, image
	//}
//}
//function log(tex, type, date = new Date()) {
	//return {
		//text, type, date
	//}
//}

const book = (name, author, year, seria, price, image) => ({name, author, year, seria, price, image})
const log = (text, type, date = new Date()) => ({text, type, date})
// Должно работать, но нет, es6 - разобраться потом, - работает, перепутал буквы "с" рус-анг, омг

const books = [
	book('Giperion', 'Dan Simmons','1989','Giperion songs', '50$', 'images/Giperion.jpg'),
	book('Three Comrades', 'Erich Maria Remarque','1936','None', '70$', 'images/Friends.jpg'),
	book('Ender’s Game,', 'Orson Scott Card','1985','Ender Viggin', '40$', 'images/Ender.jpg')
]

new Vue ({
	el: '#app',
	data: {
		books: books,
		book: books[0],
		logs: [],
		selectedCarIndex: 0,
		priceVisibility: false,
		search: '',
		modalVisability: false
	},
	methods: {
		selectCar: function(index) {
			this.book = books[index]
			this.selectedCarIndex = index
		},
		newOrder() {
			this.modalVisability = false
			this.logs.push(
				log(`Success order: ${this.book.name} - ${this.book.seria}`, 'ok')
				) // обратные кавычки? - интерполяция
		},
		cancelOrder() {
			this.modalVisability = false
			this.logs.push(
				log(`Cancelled order: ${this.book.name} - ${this.book.author}`, 'cnl')
				)
		}
	},
	computed: {
		priceBtnText: function () {
			return this.priceVisibility ? 'Hide price' : 'Show price'
			// priceBtnText() {
			//return this.priceVisibility ? 'Hide price' : 'Show price'
			// 
		},
		filteredBooks() {
			var self = this
			const filtered = this.books.filter(function(book) {
				return book.name.indexOf(self.search) > -1 // ||return book.author.indexOf(this.search) > -1

			})
			return filtered
		}
		//filteredBooks() {
			//return this.books.filter(book => {
				//return book.name.indexOf(this.search) > -1 || return book.author.indexOf(this.search) > -1
			//})
		//} работать не начала
	},
	filters: {
		date: function(value) {
			return value.toLocaleString()
		}
	}
})