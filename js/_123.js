	var result;
	var mark = 0;
	var output = '';
	var userAnswers = {
		};

	function getRandomSymbol(){
		return (Math.round(Math.random())) ? '+' : '-' ;
	}

	function getRandomNumber(){
		return Math.floor(Math.random() * (10)) + 1;
	}

	function mathExample(firstNumber, secondNumber, sign){
		var machineAnswer;
		if (sign == '+') {
		 return	machineAnswer = firstNumber + secondNumber;
		}
		return machineAnswer = firstNumber - secondNumber;
	}
	

	for (var i = 0; i < 3; i++){
		var firstNumber = getRandomNumber();
		var secondNumber = getRandomNumber();
		var sign = getRandomSymbol();
		var userResult = prompt('Решите выражение:' + firstNumber + sign + secondNumber, '');
		var compResult = mathExample(firstNumber, secondNumber, sign);
		if (compResult == userResult) {
			mark++;
		} else {
			userAnswers[i+1] = 'Правильный ответ "' + compResult + '", а вы ввели "' + userResult +'"';

		}

	}

	for (var property in userAnswers) {
  		output += 'Пример № ' + property + ': ' + userAnswers[property]+'; \n';
	}

	alert('Ваша оценка: ' + mark + '.\nВаши ошибки:\n' + output);
