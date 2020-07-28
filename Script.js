function getArrayOfObjets(arrayPersonInstance){
	let arrayOfObjets = {Nome: arrayPersonInstance[0], Sobrenome: arrayPersonInstance[1], idade: arrayPersonInstance[2], Altura: arrayPersonInstance[3], Peso: arrayPersonInstance[4]};
	return arrayOfObjets
}

function messageOnPrompt(numProperty){
	switch (numProperty){
		case 0:
			return "Por favor, digite o seu nome:"
			break;
		case 1:
			return "Por favor, digite o seu sobrenome:"
			break;
		case 2:
			return "Por favor, digite a sua idade:"
			break;
		case 3:
			return "Por favor, digite a sua altura en metros [m]:"
			break;
		case 4:
			return "Por favor, digite o seu peso en kilogramos [kg]:"
	}
}

function messageOnAlert(numProperty){
	switch (numProperty){
		case 0:
		case 1:
			return "Você deve digitar uma sequência de texto ou cancelar!"
			break;
		case 2:
		case 3:
		case 4:
			return "Você deve digitar um valor numérico ou cancelar!"
			break;
		default:
			return "Você deve digitar um valor ou cancelar!"
	}
}

function getValueComparison(numProperty,obtainedValue,obtainedType,initialValue,expectedType){
	let arrayReturnedValues = [initialValue, false, false];
	if (obtainedType != expectedType){
		alert(messageOnAlert(numProperty));
	}else{
		arrayReturnedValues[2] = true; //exit getPropertyValue
		switch (numProperty){
			case 0:
			case 1:
				arrayReturnedValues[0] = obtainedValue.toLowerCase();
				break;
			case 2:
				arrayReturnedValues[0] = Math.round(Math.abs(obtainedValue));
				break;
			case 3:
			case 4:
				arrayReturnedValues[0] = Math.abs(obtainedValue);
		}
	}
	return arrayReturnedValues
}

function getValueInterpretation(numProperty,enteredValue,initialValue){
	let arrayReturnedValues = [];
	let interpretatedValue = Number(enteredValue);
	if (isNaN(interpretatedValue)){
		arrayReturnedValues = getValueComparison(numProperty,enteredValue,typeof(enteredValue),initialValue,typeof(initialValue));
	}else{
		arrayReturnedValues = getValueComparison(numProperty,interpretatedValue,typeof(interpretatedValue),initialValue,typeof(initialValue));
	}
	return arrayReturnedValues
}

function getValueDiscrimination(numProperty,propertyValue,inicialPropertyValue){
	let arrayReturnedValues = [inicialPropertyValue, false, false];
	switch (propertyValue){
		case null:
			arrayReturnedValues[1] = true; //exit getPersonInstance
			arrayReturnedValues[2] = true; //exit getPropertyValue
			break;
		case "":
			alert(messageOnAlert(""));
			break;
		default:
			arrayReturnedValues = getValueInterpretation(numProperty,propertyValue,inicialPropertyValue);
	}
	return arrayReturnedValues
}

function getPropertyValue(numProperty,inicialPropertyValue){
	let exitFunction = false;
	let arrayReturnedValues = [];
	while (!exitFunction){
		propertyValue = window.prompt(messageOnPrompt(numProperty),inicialPropertyValue);
		arrayReturnedValues = getValueDiscrimination(numProperty,propertyValue,inicialPropertyValue);
		exitFunction = arrayReturnedValues[2];
	}
	return arrayReturnedValues
}

function sendInstanceToConsole(arrayPersonInstance){
	if (confirm("Você deseja imprimir os dados no console?")){
		console.log(`Olá! ${arrayPersonInstance[0]} ${arrayPersonInstance[1]}, você tem ${arrayPersonInstance[2]} anos de idade, mede ${arrayPersonInstance[3]} m de altura e pesa ${arrayPersonInstance[4]} kg`);
	}
}

function buildInstanceTable(arrayPersonInstance){
	if (confirm("Você deseja tabular os dados?")){
		console.table(getArrayOfObjets(arrayPersonInstance));
	}
}

function getPersonInstance(){
	let numProperty = 0;
	let exitFunction = false;
	let arrayReturnedValues = [];
	let arrayPersonInstance = ["alessandro", "centeio", 100, 1.80, 90];
	let numProperties = arrayPersonInstance.length;
	while (numProperty < numProperties && !exitFunction){
		arrayReturnedValues = getPropertyValue(numProperty,arrayPersonInstance[numProperty]);
		arrayPersonInstance[numProperty] = arrayReturnedValues[0];
		exitFunction = arrayReturnedValues[1];
		numProperty++;
	}
	sendInstanceToConsole(arrayPersonInstance);
	buildInstanceTable(arrayPersonInstance);
	return arrayPersonInstance
}

let arrayPersonInstance = getPersonInstance();