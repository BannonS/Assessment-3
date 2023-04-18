console.log("hello world");

const FatCatLOL = document.querySelector('img');
	FatCatLOL.addEventListener( 'mouseover', function() {
		complimentGenerator();
});
function complimentGenerator() {
	const compliments = ['You rock, random website visitor!' , '"insert 90s compliment here"' , 'Your Welcome!', 'Fat rhymes with cat?!?']
	const randomIndex = Math.floor(Math.random() * compliments.length);
	alert(compliments[randomIndex]);
}

function handleSubmit(evt) {
	evt.preventDefault();
	
alert("Your form has been successfully submitted, thank you.");
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit); 

