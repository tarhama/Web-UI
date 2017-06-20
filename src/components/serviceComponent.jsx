import Axios from 'axios';

export function fetchJson() {

	return Axios.get('https://test-741bd.firebaseio.com/data.json')
}

export function SelectedSection(section) {
	return Axios.get('https://test-741bd.firebaseio.com/data/' + section + '.json')
}


// // import React from 'react';
// //
// // export default class ServiceComponet extends React.Component {
// //
// // 	constructor() {
// // 		super();
// //
// // 		this.loadJSON = this.loadJSON.bind(this);
// //
// // 		this.loadJSON( (response) => {
// // 			let objectJSON = JSON.parse(response);
// // 			console.log(objectJSON)
// // 		},'https://test-741bd.firebaseio.com/data.json');
// //
// // 	}
// //
// // 	loadJSON(callback, JSONpath){
// // 		var xobj = new XMLHttpRequest();
// // 		xobj.overrideMimeType("application/json");
// // 		xobj.open('GET', JSONpath, true);
// //
// // 		xobj.onreadystatechange = () => {
// // 			if (xobj.readyState == 4 && xobj.status == '200') callback(xobj.responseText)
// // 		};
// // 		xobj.send(null);
// // 	}
// //
// // 	render() {
// // 		return (null)
// // 	}
// // }
// //
// //
// // // import React from 'react';
// //
// // //
// // // export let ServiceJSON = {
// // //
// // 	function loadJSON (callback, JSONpath) {
// // 	var xobj = new XMLHttpRequest();
// // 	xobj.overrideMimeType("application/json");
// // 	xobj.open('GET', JSONpath, true);
// //
// // 	xobj.onreadystatechange = () => {
// // 		if (xobj.readyState == 4 && xobj.status == '200') callback(xobj.responseText)
// // 	};
// // 	return xobj.send(null);
// // }
// // //
// // //
// // // }
// // // ;
//
//
// // export const loadJSON2 = () => {
// // 	var xobj = new XMLHttpRequest();
// // 	xobj.overrideMimeType("application/json");
// // 	xobj.open('GET', 'https://test-741bd.firebaseio.com/data.json', true);
// //
// // 	xobj.onreadystatechange = () => {
// // 		if (xobj.readyState == 4 && xobj.status == '200') callback(xobj.responseText);
// // 	};
// // 	debugger
// // 	return xobj.send(null);
// // };
//
//
// //
// // export function loadJSON () {
// // 	debugger
// // 	var xobj = new XMLHttpRequest();
// // 	xobj.open('GET', 'https://test-741bd.firebaseio.com/data.json', true);
// // 	// xobj.onreadystatechange = function () {
// // 	// 	if (xobj.readyState == 4 & xobj.status == 200) {
// // 	// 		var callback1 = JSON.parse(xobj.responseText);
// // 	// 		debugger
// // 	// 	}
// // 	// };
// //
// // 	xobj.onreadystatechange = (callback)=> {
// // 		if (xobj.readyState == 4 & xobj.status == 200) {
// // 			callback = JSON.parse(xobj.responseText);
// // 			debugger
// // 		}
// // 	};
// //
// // 	xobj.send(null);
// // };
//
//
// // export function getJson() {
//
// 	// loadJSON((response) => {
// 	// 	let objectJSON = response;
// 	// });
//
// 	// function loadJSON (callback)
// 	// {
// 	// 	var xobj = new XMLHttpRequest();
// 	// 	xobj.overrideMimeType("application/json");
// 	// 	xobj.open('GET', 'https://test-741bd.firebaseio.com/data.json', true);
//     //
// 	// 	xobj.onreadystatechange = () => {
// 	// 		if (xobj.readyState == 4 && xobj.status == '200') {
// 	// 			callback = JSON.parse(xobj.responseText);
// 	// 			console.log(callback)
// 	// 		}
// 	// 	};
// 	// 	xobj.send(null);
// 	// }
//     //
// 	// export function getJson() {
// 	// 	loadJSON(function(response) {
// 	// 	var actual_JSON = response;
// 	// 	console.log('ss ' + actual_JSON)
// 	// });
// 	// }
//
//
//
//
// 	function loadJSON(callback) {
// 		var xobj = new XMLHttpRequest();
// 		xobj.open('GET', "https://test-741bd.firebaseio.com/data.json", true);
// 		xobj.onload = function () {
// 			if (xobj.readyState == 4 && xobj.status == "200") {
// 				// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
// 				var callback = (xobj.response);
// 				console.log(callback)
// 			}
// 		};
// 		xobj.send();
// 	}
// debugger
// var test = loadJSON(function(response) {
// 	var actual_JSON = response;
// 	console.log(actual_JSON)
// 	return actual_JSON
// });
// debugger
// export function getJson() {
// debugger
// 	console.log(test)
//
// }
//
//
