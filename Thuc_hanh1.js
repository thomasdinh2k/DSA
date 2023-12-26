// Bai 1
const greeting = () => {
	console.log("Hello World");
};

greeting();

// Bai 2
const greeting2 = (message) => {
	console.log(message);
};
greeting2("Hello World");

// Bai 3
const greeting3 = (word1, word2) => {
	return word1 + " " + word2;
};

// Bai 4
const renderGreeting = () => {
	console.log(greeting3("Hello", "world"));
};

renderGreeting();
