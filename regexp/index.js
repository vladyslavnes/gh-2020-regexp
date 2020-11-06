document.querySelector('#user-form').addEventListener('submit', function (e) {
	e.preventDefault();


	// П.І.Б. - прізвище, імʼя та по батькові. 
	// Обязательно три слова
	//  которые состоят только из букв украинского алфавита

	const ukrainianLetters = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';

	const name = document.getElementsByName('full_name')[0].value;
	// let restring = `^[${ukrainianLetters}]+\s+[${ukrainianLetters}]+\s+[${ukrainianLetters}]+$`;


	const nameValidation = /^[абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ]+\s+[абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ]+\s+[абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ]+$/;
	let isNameCorrect = nameValidation.test(name);

	// Email - электронный почтовый адрес.
	// Адрес должен содержать только один символ "собачки" - @.
	// До символа "собачки" разрешены только символы английского алфавита, числа, тире и точки.
	// После символа "собачки" разрешены все те же символы, но точка обязательно должна быть.
	// Запрещено начинать или заканчивать email символом точки и запрещено чтобы точки находились рядом с символом @

	const email = document.getElementsByName('email')[0].value;
	
	const emailValidation = /^(?:[a-zA-Z0-9\-][a-zA-Z0-9\.\-]*|[a-zA-Z0-9\-])@{1}[a-zA-Z0-9\-][a-zA-Z0-9\.\-]*\.{1}[a-zA-Z0-9\-]+$/;
	let isEmailCorrect = emailValidation.test(email);


	// Пароль - должен быть не менее 8 символов.
	// Состоять должен обязательно из больших и маленьких символов английского алфавита и чисел.

	const password = document.getElementsByName('password')[0].value;
	
	let isPasswordCorrect = (password.length >= 8) && (/[a-z]/).test(password) && (/[A-Z]/).test(password) && (/[0-9]/).test(password) && !(/[^a-zA-Z0-9\s]/g).test(password);
	// Поля которые прошли проверку должны поменять свой background-color на #C2E0C6, если не прошли то на #F9D0C4

	if (isNameCorrect) {
		document.getElementsByName('full_name')[0].style.backgroundColor = '#C2E0C6';
	} else {
		document.getElementsByName('full_name')[0].style.backgroundColor = '#F9D0C4';
	}

	if (isEmailCorrect) {
		document.getElementsByName('email')[0].style.backgroundColor = '#C2E0C6';
	} else {
		document.getElementsByName('email')[0].style.backgroundColor = '#F9D0C4';
	}
	
	if (isPasswordCorrect) {
		document.getElementsByName('password')[0].style.backgroundColor = '#C2E0C6';
	} else {
		document.getElementsByName('password')[0].style.backgroundColor = '#F9D0C4';
	}
});

document.querySelectorAll('[data-show]').forEach(function (button) {
	button.addEventListener('click', function (e) {
		document.querySelector('#description').classList.add('d-none');
		document.querySelector('#preview').classList.add('d-none');

		document.querySelector('#' + e.currentTarget.getAttribute('data-show')).classList.remove('d-none');
	});
});
