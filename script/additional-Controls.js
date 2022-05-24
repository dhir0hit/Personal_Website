let Container = document.getElementById("flex-container");

let FlexContainerElements = Container.children;

for (i=0; i < FlexContainerElements.length; i++) {
    FlexContainerElements[i].onclick = function (event) {
        SelectElement(event);
    }
}


//function to add new child element
document.getElementById("AddNewElement").onclick = function () {
    addNewChildElement(FlexContainerElements.length);
}

function SelectElement(element) {
    // displaying additional controls
    // document.getElementById("generator-additional-controls").classList.remove("hide-container");
    additionalControlDisplayButton(true);

    selected_element = element.path[0];
    computed_element_styles = window.getComputedStyle(selected_element, null);

    // changing element name on top
    document.getElementById("element-name").innerText = selected_element.innerText;

    // deleting current element
    document.getElementById("DeleteCurrentElement").onclick = function () {
        document.getElementById("flex-container").removeChild(selected_element);
        additionalControlDisplayButton();
    }


    // putting element name in input
    document.getElementById("element-name__input").value = selected_element.innerText;
    document.getElementById("element-name__input").oninput = function () {
        elementNameInputHandle(selected_element);
    }

    // putting element width in input
    if (selected_element.style.width === '') {
        document.getElementById("element-width__input").value = "auto";
    } else {
        document.getElementById("element-width__input").value = selected_element.style.width;
    }
    document.getElementById("element-width__input").oninput = function () {
        elementWidthChange(selected_element);
    }

    // putting element height in input
    if (selected_element.style.height === '') {
        document.getElementById("element-height__input").value = "auto";
    } else {
        document.getElementById("element-height__input").value = selected_element.style.height;
    }
    document.getElementById("element-height__input").oninput = function () {
        elementHeightChange(selected_element);
    }

    if (selected_element.style.backgroundColor === '') {
        document.getElementById("element-background-color__input").value = "transparent";
    } else {
        document.getElementById("element-background-color__input").value = selected_element.style.backgroundColor;
    }
    document.getElementById("element-background-color__output").style.backgroundColor = document.getElementById("element-background-color__input").value;
    document.getElementById("element-background-color__input").oninput = function () {
        elementBackgroundColorChange(selected_element);
    }

    if (selected_element.style.color === '') {
        document.getElementById("element-color__input").value = "#000";
        console.log(computed_element_styles.getPropertyPriority("border-width"))
    } else {
        document.getElementById("element-color__input").value = selected_element.style.color;
    }
    document.getElementById("element-color__output").style.backgroundColor = document.getElementById("element-color__input").value;
    document.getElementById("element-color__input").oninput = function () {
        elementColorChange(selected_element);
    }

    if (selected_element.style.padding === '') {
        document.getElementById("element-padding__input").value = '0';
    } else {
        document.getElementById("element-padding__input").value = selected_element.style.padding;
    }
    document.getElementById("element-padding__input").oninput = function () {
        elementPaddingChange(selected_element);
    }

    if(selected_element.style.margin === '') {
        document.getElementById("element-margin__input").value = '0';
    } else {
        document.getElementById("element-margin__input").value = selected_element.style.margin;
    }
    document.getElementById("element-margin__input").oninput = function () {
        elementMarginChange(selected_element);
    }

    if(selected_element.style.borderWidth === '') {
        document.getElementById("element-border-width__input").value = '2px';
    } else {
        document.getElementById("element-border-width__input").value = selected_element.style.borderWidth;
    }
    document.getElementById("element-border-width__input").oninput = function () {
        elementBorderWidthChange(selected_element);
    }

    if (selected_element.style.borderColor === '') {
        document.getElementById("element-border-color__input").value = "red";
    } else {
        document.getElementById("element-border-color__input").value = selected_element.style.borderColor;
    }
    document.getElementById("element-border-color__output").style.backgroundColor = document.getElementById("element-border-color__input").value
    document.getElementById("element-border-color__input").oninput = function () {
        elementBorderColorChange(selected_element);
    }

    if (selected_element.style.borderRadius === '') {
        document.getElementById("element-border-radius__input").value = "0";
    } else {
        document.getElementById("element-border-radius__input").value = selected_element.style.borderRadius;
    }
    document.getElementById("element-border-radius__input").oninput = function () {
        elementBorderRadiusChange(selected_element);
    }
}

function elementNameInputHandle(selected_element) {
    selected_element.innerText = document.getElementById("element-name__input").value;
}

function elementWidthChange(selected_element) {
    let input_Width = document.getElementById("element-width__input").value;

    if (lengthInputCorrect(input_Width)){
        selected_element.style.width = input_Width;
        document.getElementById("element-width__error").style.visibility = "hidden";
    } else {
        document.getElementById("element-width__error").style.visibility = "visible";
    }
}

function elementHeightChange(selected_element) {
    let input_height = document.getElementById("element-height__input").value;

    if (lengthInputCorrect(input_height)) {
        selected_element.style.height = input_height;
        document.getElementById("element-height__error").style.visibility = "hidden";
    } else {
        document.getElementById("element-height__error").style.visibility = "visible";
    }
}

function elementBackgroundColorChange(selected_element) {
    input_color = document.getElementById("element-background-color__input").value;
    selected_element.style.backgroundColor = input_color;
    document.getElementById("element-background-color__output").style.backgroundColor = input_color;
}

function elementColorChange(selected_element) {
    input_color = document.getElementById("element-color__input").value;
    selected_element.style.color = input_color;
    document.getElementById("element-color__output").style.backgroundColor = input_color;
}

function elementPaddingChange(selected_element) {
    let input_padding = document.getElementById("element-padding__input").value;

    if (lengthInputCorrect(input_padding)) {
        selected_element.style.padding = input_padding;
        document.getElementById("element-padding__error").style.visibility = "hidden";
    } else {
        document.getElementById("element-padding__error").style.visibility = "visible";

    }
}

function elementMarginChange() {
    let input_margin = document.getElementById("element-margin__input").value;

    if (lengthInputCorrect(input_margin)) {
        selected_element.style.margin = input_margin;
        document.getElementById("element-margin__error").style.visibility = "hidden";
    } else {
        document.getElementById("element-margin__error").style.visibility = "visible";
    }
}


function elementBorderWidthChange() {
    let input_borderWidth = document.getElementById("element-border-width__input").value;

    if (lengthInputCorrect(input_borderWidth)) {
        selected_element.style.borderWidth = input_borderWidth;
        document.getElementById("element-border-width__error").style.visibility = "hidden";
    } else {
        document.getElementById("element-border-width__error").style.visibility = "visible";
    }
}

function elementBorderColorChange(selected_element) {
    let input_color = document.getElementById("element-border-color__input").value;

    selected_element.style.borderColor = input_color;
    document.getElementById("element-border-color__output").style.backgroundColor = input_color;
}

function elementBorderRadiusChange(selected_element) {
    let input_borderRadius = document.getElementById("element-border-radius__input").value;

    if (lengthInputCorrect(input_borderRadius)) {
        selected_element.style.borderRadius = input_borderRadius;
        document.getElementById("element-border-radius__error").style.visibility = "hidden";
    } else {
        document.getElementById("element-border-radius__error").style.visibility = "visible";
    }
}







function additionalControlDisplayButton(isElementSelect = false) {
    let AdditionalControls = document.getElementById("generator-additional-controls");
    let image = document.getElementById("additional-controls__display-button").children[0].children[0];

    if (AdditionalControls.classList.contains('hide-container') || isElementSelect) {
        AdditionalControls.classList.remove("hide-container");
        document.getElementById("additional-controls__display-button").style.transform = "translate(-640px)";
        image.setAttribute("src", "../../Media/close_FILL0_wght400_GRAD0_opsz48.svg");
    } else {
        AdditionalControls.classList.add("hide-container");
        document.getElementById("additional-controls__display-button").style.transform = "translate(-380px)";
        image.setAttribute("src", "../../Media/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg");
    }

}


function addNewChildElement(totalChildren) {
    newChild = document.createElement("div");
    newChild.classList.add("flex-container__elements");
    newChild.innerHTML = "element" + (totalChildren + 1);
    newChild.onclick = function (event) {
        SelectElement(event);
    }

    document.getElementById("flex-container").appendChild(newChild);
}


function lengthInputCorrect(edge) {
    let correctValue = false;
    let units = ["%", "px", "pt", "pc","em", "rem", "ex", "in", "vmin", "vmax", "pt", "vw", "ch", "vh", "gd", "cm", "vm", "mm", "cm"]

    for (let unit of units) {
        // console.log(unit);
        if (edge.endsWith(unit) && edge !== unit) {
            correctValue = true;
        } else if (edge === 'auto' || edge === 'initial' || edge === 'inherit' || edge === "0") {
            correctValue = true;
        }
    }
    return correctValue;
}






