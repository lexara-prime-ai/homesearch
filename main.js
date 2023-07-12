const back = require('androidjs').back;
const fs = require('fs');
const path = require('path');

back.on("hello from front", function(){
	back.send("hello from back", "New Rentals...");
});

fetch("https://dummyjson.com/products").then(response => {
	console.log(response.json());
});