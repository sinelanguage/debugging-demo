const hypocritical = str => console.log(str);
let justWatchMe = "Just watch me";

// no lexical this
const introLog = () =>
	hypocritical(
		'I am going to use console.log a lot to demonstrate how to debug without using console log',
	);

// lexical this
function setBreakpointsOnThisFunction() {
	const someValue = 4;
	hypocritical(
		'You are setting a breakpoint to stop the execution of this file at this particular line',
	);
	return "hello world"
};

function iHaveThisContext() {
	const someLetter = "x";
	justWatchMe = "I\'m watching you"
	return function returnedFromIHaveContext() {
		console.log(someLetter)
	}
}

const partiallyExecuted = iHaveThisContext();

const simplePromiseExample = num =>
  new Promise((res, rej) => {
    if (num !== 5) {
      rej(new Error('Rejected: ! Not equal to 5'));
    }
    setTimeout(() => res(10), 2000);
  });

const storeResultsAsGlobalVariable = () => 10;

const storeAsGlobalVariableAndEagerlyEvaluateResults = () => {
	const myArray = [1,2,3,4,5,6];
	justWatchMe = "I\'m still watching you"
	return myArray
}

const showMeACallStackBecauseOfError = () => {
	console.log("Error is coming");
	debuggerClassInstance.heresAnError();
}

class debuggerClass {
	constructor(){
		this.someValue = 4;
		this.someString = "debugger demo"
	}

	hypocritical(){
		console.log(this.someValue, this.someString);
	}

	setBreakpointsOnThisFunction() {
		const someArray = [1,2,3,4,5,6,7];
		this.hypocritical();
		someArray.map(
			num => num + 1
		)
		return "hello world"
	};
	heresAnError(){
		throw new Error("oh oh")
	}
	shouldError(){
		console.log(IdontExist)
	}
}

const debuggerClassInstance = new debuggerClass();
	
introLog();
setBreakpointsOnThisFunction();
partiallyExecuted();

debuggerClassInstance.hypocritical();
// debuggerClassInstance.heresAnError();
// debuggerClassInstance.shouldError();
debuggerClassInstance.setBreakpointsOnThisFunction();

storeResultsAsGlobalVariable();
storeAsGlobalVariableAndEagerlyEvaluateResults();
// showMeACallStackBecauseOfError();

simplePromiseExample(5)
  .then(val => console.log('Value: ', val))
  .catch(err => console.error('Error: ', err.message));
