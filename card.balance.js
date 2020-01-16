function balanceHeight(parent, firstChildren, secondChildren) {
    //Функция установки высоты
    function setHeight(el, val) {
        if (typeof val === "function") val = val();
        if (typeof val === "string") el.style.height = val;
        else el.style.height = val + "px";
    }

    //Массив высот
    let heightArray = new Array(arguments.length - 1);
    for (let i = 0; i < heightArray.length; heightArray[i++] = -1);

    //Массив потомков, которые выравниваются
    let childrenArguments = new Array(arguments.length - 1);
    for (let i = 0; i < childrenArguments.length; ++i) {
        childrenArguments[i] = arguments[i + 1];
    }

    //Выборка родительских элементов
    let elements = document.querySelectorAll(parent);

    //Получение высот
    Array.prototype.forEach.call(elements, function(el, i) {
        item = el;

        for (let i = 0; i < childrenArguments.length; i++) {
            let currentChild = item.querySelectorAll(childrenArguments[i]);
            let currentChildHeight = currentChild[0].offsetHeight;

            if (heightArray[i] < currentChildHeight) {
                heightArray[i] = currentChildHeight;
            }
        }
    });

    //Расстановка высот
    Array.prototype.forEach.call(elements, function(el, i) {
        item = el;

        for (let i = 0; i < childrenArguments.length; i++) {
            let currentChild = item.querySelectorAll(childrenArguments[i]);
            setHeight(currentChild[0], heightArray[i]);
        }
    });
}

// balanceHeight(".card", "h1", "p");