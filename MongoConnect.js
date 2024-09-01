//MongoConnect.js
//By: Sam Schmitz

const {MongoClient, GridFSBucket} = require('mongodb');

const ClothesDBManager = {
	url: 'mongodb://localhost:27017',
	dbName: 'test-database',
	collectionName: 'clothes',

	//method to connect to the db
	async connect() {
		this.client = new MongoClient(this.url);
		await this.client.connect();
		console.log('Connected successfully to MongoDB');
		this.db = this.client.db(this.dbName);
		this.collection = this.db.collection(this.collectionName);
	},

	//method to add a document
	async addClothing(garment) {
		try {
			//ensure the client is connected
			if (!this.client) {
				await this.connect();
			}

			//Use insertOne to add a document
			let insertResult = await this.collection.insertOne(garment)
			return insertResult;
		} catch (error) {
			console.error('Error ocurred when finding a document:', error);
			throw error;
        }
    },

	//method to find a single document
	async findClothing(query = {}) {
		try {
			//ensure the client is connected
			if (!this.client) {
				await this.connect();
			}

			//Use findOne to get a single document
			const findResult = await this.collection.findOne(query);
			return findResult;
		} catch (error) {
			console.error('Error ocurred when finding a document:', error);
			throw error;
        }
    },

	//method to find mutiple documents
	async findClothes(query = {}) {
		try {
			//ensure the client is connected
			if (!this.client) {
				await this.connect();
			}

			//Use find to retrieve multiple clothes documents
			const cursor = this.collection.find(query);
			const results = await cursor.toArray();
			return results;
		} catch (error) {
			console.error('Error ocurred when finding documents:', error);
			throw error;
        }
	},

	//method to close the db
	async closeConnection() {
		if (this.client) {
			await this.client.close();
			console.log('MongoDB connection closed');
        }
    }
}

const sweatShirtUniqlo = {
	name: 'Sweat Pullover Hoodie',
	description: 'Fine fabric with a smooth, premium feel. ',
	imageIDs: [
		'https://image.uniqlo.com/UQ/ST3/us/imagesgoods/444967/item/usgoods_09_444967_3x4.jpg?width=600',
		'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/444967/sub/goods_444967_sub1_3x4.jpg?width=600',
		'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/444967/sub/goods_444967_sub13_3x4.jpg?width=600',
		'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/444967/sub/goods_444967_sub14_3x4.jpg?width=600'
	],
	price: 49.90,
	fit: 'standard',
	materials: 'Body: 100% Cotton/ Rib: 82% Cotton, 18% Polyester/ Hood Lining: 61% Cotton, 39% Polyester',
	color: 'black',
	categories: {
		retailer: 'Uniqlo',
		season: ['fall', 'winter', 'spring'],
		type: ['shirt', 'sweatshirt'],
		dress: ['casual', 'loungewear']
	},
	link: 'https://www.uniqlo.com/us/en/products/E444967-000/00?colorDisplayCode=09&sizeDisplayCode=003',
	dateAdded: 20240831
}
const halfzipUniqlo = {
	name: 'Souffle Half-Zip Sweater',
	description: "Soft and non-itchy 'Souffle Yarn'",
	imageIDs: [
		'https://image.uniqlo.com/UQ/ST3/us/imagesgoods/469473/item/usgoods_32_469473_3x4.jpg?width=600',
		'https://image.uniqlo.com/UQ/ST3/us/imagesgoods/469473/sub/usgoods_469473_sub2_3x4.jpg?width=600',
		'https://image.uniqlo.com/UQ/ST3/us/imagesgoods/469473/sub/usgoods_469473_sub7_3x4.jpg?width=600',
		'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/469473/sub/goods_469473_sub14_3x4.jpg?width=600'
	],
	price: 49.90,
	fit: 'standard',
	materials: '57% Acrylic, 32% Polyester, 8% Wool, 3% Spandex ( 32% Uses Recycled Polyester Fiber )',
	color: 'beige',
	categories: {
		retialer: 'Uniqlo',
		season: ['fall', 'winter'],
		type: ['shirt', 'sweater', 'half-zip'],
		dress: ['casual', 'semi-casual']
	},
	link: 'https://www.uniqlo.com/us/en/products/E469473-000/00?colorDisplayCode=32&sizeDisplayCode=003',
	dateAdded: 20240901
}

const sweatshirt = {

}

let filter = {
	"categories.type": "shirt"
};

(async () => {
	try {
		await ClothesDBManager.connect();
		const documents = await ClothesDBManager.findClothes(filter);
		console.log('Found documents:', documents);
	} finally {
		await ClothesDBManager.closeConnection();
	}
})();
