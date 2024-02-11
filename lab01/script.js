`use strict`

var submitButton = document.getElementById('submitButton');

var surnameContainer = document.getElementById('Surname');
var nameContainer = document.getElementById('Name');
var emailContainer = document.getElementById('Email');
var phoneContainer = document.getElementById('Phone');
var studyCheckboxContainer = document.getElementById('Study');
var coursesRadioContainer = document.getElementById('Courses');
var infoContainer = document.getElementById('Info');

// при нажатии кнопки происходит проверка введенных данных
submitButton.addEventListener('click', function(event){
    event.preventDefault();

    let errorFlag = false

    // проверка значения в поле Фамилия
    if(IsEmpty(surnameContainer)){
        surnameContainer.querySelector('p').innerText = 'Укажите фамилию!'
        errorFlag = true
    }
    else{
        if(CheckRegex(surnameContainer, /^[A-Za-zА-Яа-я]+$/)){
            if(CheckLength(surnameContainer, 20))
                surnameContainer.querySelector('p').innerText = ''
            else{
                surnameContainer.querySelector('p').innerText = 'Значение должно содержать меньше 20 символов!'
                errorFlag = true
            }
        }
        else{
            surnameContainer.querySelector('p').innerText = 'Некорректное значение!'
            errorFlag = true
        }
    }

    // проверка значения в поле Имя
    if(IsEmpty(nameContainer)){
        nameContainer.querySelector('p').innerText = 'Укажите имя!'
        errorFlag = true
    }
    else{
        if(CheckRegex(nameContainer, /^[A-Za-zА-Яа-я]+$/)){
            if(CheckLength(nameContainer, 20))
                nameContainer.querySelector('p').innerText = ''
            else{
                nameContainer.querySelector('p').innerText = 'Значение должно содержать меньше 20 символов!'
                errorFlag = true
            }
        }
        else{
            nameContainer.querySelector('p').innerText = 'Некорректное значение!'
            errorFlag = true
        }
    }
    
    // проверка значения в поле Email
    if(IsEmpty(emailContainer)){
        emailContainer.querySelector('p').innerText = 'Укажите email!'
        errorFlag = true
    }
    else{
        if(CheckRegex(emailContainer, /^[\w\_]+@\w{2,5}(\.\w{2,3})+$/)){
            emailContainer.querySelector('p').innerText = ''
        }
        else{
            emailContainer.querySelector('p').innerText = 'Неверный формат данных!(@xxxxx.xxx)'
            errorFlag = false
        }
    }

    // проверка значения в поле Телефон
    if(IsEmpty(phoneContainer)){
        phoneContainer.querySelector('p').innerText = 'Укажите номер телефона!'
        errorFlag = true
    }
    else if(CheckRegex(phoneContainer, /^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/)){
        phoneContainer.querySelector('p').innerText = ''
    }
    else{
        phoneContainer.querySelector('p').innerText = 'Неверный формат!((0xx)xxx-xx-xx)'
        errorFlag = true
    }

    // проверка значения в поле Расскажите о себе
    if(IsEmpty(infoContainer)){
        infoContainer.querySelector('p').innerText = 'Укажите информацию о себе!'
        errorFlag = true
    }
    else{
        if(CheckLength(infoContainer, 250))
            infoContainer.querySelector('p').innerText = ''
        else{
            infoContainer.querySelector('p').innerText = 'Значение должно содержать меньше 250 символов!'
            errorFlag = true
        }
    }

    // прооверка поля Курс
    if(IsEmptyRadioButtons()){
        coursesRadioContainer.querySelector('p').innerText = 'Выберите курс!'
        errorFlag = true
    }
    else{
        coursesRadioContainer.querySelector('p').innerText = ''
    }

    let IsBSTU = studyCheckboxContainer.querySelector('input').checked
    let Course = coursesRadioContainer.querySelector('input[id="radio3"]:checked')
    let City = document.getElementById('citylist').value

    if(!errorFlag){
        if(!(IsBSTU && Course !== null && City === 'Minsk')){
            if(confirm("Вы уверены в своем выборе?")){
                document.getElementById('form').reset()
                alert("Форма отправлена")
            }
        }
        else{
            document.getElementById('form').reset()
            alert("Форма отправлена")
        }
    }
})

// проверка пустоты строки ввода
function IsEmpty(inputContainer){
    let inputEl = inputContainer.querySelector('input')
    let inputValue
    if(inputEl == null) 
        inputValue = inputContainer.querySelector('textarea').value
    else 
        inputValue = inputEl.value
    return inputValue.trim() === '';
}

// проверка на допустимый формат ввода
function CheckRegex(inputContainer, regex){
    let inputValue = inputContainer.querySelector('input').value;
    return regex.test(inputValue)
}

// проверка допустимой длины строки
function CheckLength(inputContainer, length){
    let inputEl = inputContainer.querySelector('input')
    let inputValue
    if(inputEl == null) 
        inputValue = inputContainer.querySelector('textarea').value
    else 
        inputValue = inputEl.value
    return inputValue.length <= length
}

// проверка на пустые радиокнопки
function IsEmptyRadioButtons(){
    let radioButtons = coursesRadioContainer.querySelectorAll('input[type="radio"]')
    let flag = true
    for(let el of radioButtons){
        if(el.checked){
            flag = false
            break
        }
    }
    return flag
}

// проверка активна может быть только одна кнопка
/*function CheckRadioButton(){
    let radioButtons = coursesRadioContainer.querySelectorAll('input[type="radio"]')
    let flag = false
    for(let el of radioButtons){
        if(flag && el.checked)
            return false
        if(el.checked)
            flag = true
    }
    return true
}*/

var radioButtonsGroup = document.getElementById('coursesDiv');

// Добавляем обработчик событий для всей группы радиокнопок
radioButtonsGroup.addEventListener('change', function(event) {
  var selectedRadioButton = event.target;
  // Отключаем предыдущую активную радиокнопку
  var allRadioButtons = document.getElementsByName('courses')
  allRadioButtons.forEach(function(radioButton) {
    if (radioButton !== selectedRadioButton) {
      radioButton.checked = false
    }
  })
})




