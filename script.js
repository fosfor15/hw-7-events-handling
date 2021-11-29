//1 задание
const buttonRandom = document.getElementById('buttonRandom');
const div = document.getElementById('number');

// Простые функции традиционно именуются с маленькой буквы. Также в именах функции по-хорошему должен присутствовать глагол.
function Random() {
    const max = 100;
    // Нет необходимости держать постоянное значение в отдельной константе – его можно использовать прямо в функции ниже

    return Math.round(Math.random() * max);
}

buttonRandom.onclick = function() {
    div.innerHTML = Random();
}

//2 задание
var redlight = document.getElementById("redlight");
var yellowlight = document.getElementById("yellowlight");
var greenlight = document.getElementById("greenlight");

function start() {
    if (redlight.classList.contains("on")) {
        redlight.classList.remove("on");
        yellowlight.classList.add("on"); 
    } else if (yellowlight.classList.contains("on")) {
        yellowlight.classList.remove("on");
        greenlight.classList.add("on");  
    } else if (greenlight.classList.contains("on")) {
        greenlight.classList.remove("on");
        redlight.classList.add("on");
    }
}


//3 задание 
//сворачивание списка

for (let li of list.querySelectorAll("li")) {
    let span = document.createElement("span"); //создает пространство для клика
    span.classList.add("show");
    li.prepend(span);
    span.append(span.nextSibling);

    // А почему вы не захотели провести эту работу в HTML?
}

list.onclick = function (event) {
    if (event.target.tagName != "SPAN") return;

    let childrenList = event.target.parentNode.querySelector("ul");

    if (!childrenList) return;
    childrenList.hidden = !childrenList.hidden;

    if (childrenList.hidden) {
        event.target.classList.add("hide");
        event.target.classList.remove("show");
    } else {
        event.target.classList.add("show");
        event.target.classList.remove("hide");
    }
    
};


//подсветка
const parentLi = list.getElementsByClassName('parent');

for(var i = 0; i < parentLi.length; i++) {
    light(parentLi[i].firstChild)

    // Таким образом у вас получилось множество слушателей событий mouseover и mouseout, однако здесь подошло бы делегирование событий к родительскому элементу списка ul
}

function light(parentLi) {
    parentLi.addEventListener('mouseover', function() {
        this.style.color = 'pink';
        this.style.backgroundColor = 'grey';
    })
    parentLi.addEventListener('mouseout', function() {
        this.style.color = null;
        this.style.backgroundColor = null;
    })
}

//задание 4
//автоматическое переключение при клике
// list.addEventListener('keydown', function(parentLi) {
//     for (var i = 0; i < parentLi.length; i++) { 
//         light(parentLi[i].firstChild); //подсветка 1го элемента
//         if (parentLi[i].classList.contains('active')) {
//             parentLi[i].classList.remove('active'); //удаляем пометку для подсветки 1го элемента
//         }
//     }
//     parentLi[i].classList.add('active'); //добавляем пометку для следующего эл-та
// });//не работает


var liSelected;
var index = -1;

document.addEventListener('keydown', function(event) {
    var len = parentLi.length-1;
        if(event.which === 40) {
    index++;
    //down 
        if (liSelected) {
            removeClass(liSelected, 'selected');
            next = parentLi[index];

            if (typeof next !== undefined && index <= len) {
                liSelected = next;
            } else {
                index = 0;
                liSelected = parentLi[0];
            }

            addClass(liSelected, 'selected');
            
        } else {
        index = 0;
        liSelected = parentLi[0];
        addClass(liSelected, 'selected');
        }

    } else if (event.which === 38) {
    //up
        if (liSelected) {
            removeClass(liSelected, 'selected');
            index--;
            next = parentLi[index];
                if (typeof next !== undefined && index >= 0) {
                    liSelected = next;
                } else {
                    index = len;
                    liSelected = parentLi[len];
                }
                addClass(liSelected, 'selected');
        } else {
            index = 0;
            liSelected = parentLi[len];
            addClass(liSelected, 'selected');
            }
    }
}, false);

function removeClass(el, className) {
    if(el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace();
    }
};

function addClass(el, className) {
    if(el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};

//привязка enter
document.addEventListener( 'keyup', event => {
    if ( event.code === 'Enter' ) {
        (event)  => {
            if (childrenList.hidden) {
                event.target.classList.add("hide");
                event.target.classList.remove("show");
            } else {
                event.target.classList.add("show");
                event.target.classList.remove("hide");
            }
        };
    }
});//todo


// Слишком сложная реализация. Необходимо было создать функции на сворачивание/разворачивание и на подсветку при наведении курсора мыши и прязать эти функции как обработчики событий. Данные функции должны были бы принмать элемент, над которым необходимо было бы совершить действие. Разница заключается только в способе определения элемента при каждом событии.


