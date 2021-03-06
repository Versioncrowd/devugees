console.log('homework3');

function validateEmailAddress(email) {
	
	var emailArray = email.split('@');

	if(emailArray.length !== 2) {
		console.log('Email does not have an @-sign');
		return false;
	}

	var leftPart = emailArray[0];
	if(leftPart.length > 32 || leftPart.length < 8) {
		console.log('The left part has more than 32 characters or less than 8 characters.');
		return false;
	}

	var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
	var counter = 0;
	for(var i=0; i<leftPart.length; i++) {
		for(var j=0; j<alphabet.length; j++) {
			if(leftPart.charAt(i) === alphabet[j]) {
				counter++;			
				break;
			}
		}

		if(counter > 0) {
			break;
		}		
	}

	if(counter === 0) {
		console.log('The left part needs at least one character');
		return false;
	}		

	// indexOf > 0 => found something 
	if( leftPart.indexOf('$') > 0 || leftPart.indexOf('%') > 0 ) {
		console.log('No $ or % allowed in the left part.');
		return false;
	}

	var rightPart = emailArray[1];
	var rightPartArray = rightPart.split('.');

	// foobar.com
	// foobar.foo.com
	/*
		[0] -> foobar
		[1] -> foo
		[2] -> com

		length = 3
		index of last element = length - 1
	*/

	var domain = rightPartArray[ rightPartArray.length - 1 ];
	if(domain !== 'com' && domain !== 'de' && domain !== 'org') {
		console.log('Domain ending must be com, de or org');
		return false;
	}

	if(		(rightPart.length - domain.length - 1) > 16 
		 || (rightPart.length - domain.length - 1) < 6) {
		console.log(  'Space between @ and domain is bigger than 16 or '
			         +'less than 6');
		return false;
	}

	return true;
}


function listGenerator( numItems ) {
	var items = '';

	for(var i=1; i<=numItems; i++) {
		items = items + '\t<li> Index ' + i + '</li>\n';
	}

	var result = '\n<ul>\n' + items + '</ul>';
	return result;
}

var websiteTemplate =
	"<html>\n"
	+"\t<head>\n"
	+"\t\t<title>%TITLE</title>\n"
	+"\t</head>\n"
	+"\t<body>\n"
	+"\t<div>%MYLIST</div>"
	+"\t</body>\n"
	+"</html>\n";

function createTemplate( title, numItems ) {
	return websiteTemplate.replace('%TITLE', title)
						  .replace('%MYLIST', listGenerator(numItems));
}

function randomNumber(max) {
	return Math.round(Math.random() * max, 0);
}

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function generateCode1( codeLength ) {
	var randomArray = [];
	for (var i = 0 ; i < codeLength;i++){
		randomArray.push(alphabet[randomNumber(alphabet.length - 1)]);
	}
	var str = randomArray.join('');
	return str;
}

/*
for(var j=0; j< 100; j++) {
	console.log(generateCode1(10));
}
*/

var digits = '0123456789'.split('');

function generateCode2( codeLength ) {
	var randomArray = [];
	for (var i = 0 ; i < codeLength;i++){
		randomArray.push(alphabet[randomNumber(alphabet.length - 1)]);
		randomArray.push(digits[randomNumber(digits.length - 1)]);
	}
	for(let i=0;i<codeLength;i++){
		randomArray.shift();
	}
	var str = randomArray.join('');
	return str;
}
console.log(generateCode2(3));

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var digits = '0123456789'.split('');

var concatenatedArray = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
function generateCode3( codeLength ) {
	var randomArray = [];
	for (var i = 0 ; i < codeLength;i++){
		randomArray.push(alphabet.concat(digits)[randomNumber(alphabet.concat(digits).length - 1)]);
	}
	var str = randomArray.join('');
	return str;
}
