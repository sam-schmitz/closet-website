//MongoConnect.js
//By: Sam Schmitz

const {MongoClient, GridFSBucket} = require('mongodb');
//const fs = require('fs');
//const path = require('path');

const url = 'mongodb://localhost:27017';
const dbName = 'test-database';

async function main() {
	const client = new MongoClient(url);

	try {
		//connect to the MongoDB Server
		await client.connect();
		console.log('Connected successfully to MongoDB container');

		const db = client.db(dbName);

		//Get a collection
		const collection = db.collection('myCollection');

		//display the contents of myCollection
		//const documents = await collection.find({}).toArray();
		//console.log('Documents in the collection:', documents);

		//insert a document
		const insertResult = await collection.insertOne({name: 'Alice', age:25});
		console.log("Inserted document:", insertResult)

		//find a document 
		const findResult = await collection.findOne({name: 'Alice'});
		console.log("Found document: ", findResult);

		//remove a document
		const filter = {name: 'Alice'};
		const deleteResult = await collection.deleteOne(filter);
		console.log('Deleted document count:', deleteResult.deletedCount);
	} catch (error) {
		console.error('Error occurred while deleting document:', error);
	} finally {
		//Close the connection
		await client.close()
	}
}

async function addClothes(garment) {
	const client = new MongoClient(url);

	try {
		//connect to the MongoDB Server
		await client.connect();
		console.log('Connected successfully to MongoDB container');

		const db = client.db(dbName);
		/*
		//create a GridFS Bucket
		const bucket = new GridFSBucket(db);

		//array to store the IDs of the images
		cosnt imageIDs = [];

		//List of image file paths
		const imagePaths = [
			path.join(__dirname, 'path-to-your-image.jpg'),
			path.join(__dirname, 'path-to-your-image2.jpg')
		];
		for (const imagePath of imagePaths) {
			//open an upload stream for each Image
			let uploadStream = bucket.openUploadStram(path.basename(imagePath));

			//upload the image and store its ID
			await new Promise((resolve, reject) => {
				fs.createReadStream(imagePath).pipe(uploadStream).on('finish', () => {
					console.log(`Image ${path.basename(imagePath)} uploaded with ID:`,uploadStream.id);
					imageIDs.push(uploadStream.id);
					resolve();
				}).on('error', reject);
			});
		};
		*/

		//Get a collection
		const collection = db.collection('clothes');

		//insert a document
		let insertResult = await collection.insertOne(garment)
		console.log("Inserted document:", insertResult)
	} catch (error) {
		console.error('Error occured while inserting document:', error);
	} finally {
		await client.close()
	}
}

async function grabClothing(filter) {
	const client = new MongoClient(url);

	try {
		//connect to the MongoDB Server
		await client.connect();
		console.log('Connected successfully to MongoDB container');

		const db = client.db(dbName);

		//Get a collection
		const collection = db.collection('clothes');

		//find a document 
		const findResult = await collection.findOne(filter);
		console.log("Found document: ", findResult);
	} finally {
		await client.close()
	}
}

async function grabClothes(filter) {
	const client = new MongoClient(url);

	try {
		//connect to the MongoDB Server
		await client.connect();
		console.log('Connected successfully to MongoDB container');

		const db = client.db(dbName);

		//Get a collection
		const collection = db.collection('clothes');

		//find matching documents
		const cursor = await collection.find(filter);
		const results = await cursor.toArray();
		console.log('Found Documents:', results);
	} finally {
		await client.close();
	}
}

//main().catch(console.error);
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

//addClothes(halfzipUniqlo).catch(console.error);
//grabClothing(filter).catch(console.error);
grabClothes(filter).catch(console.error);
