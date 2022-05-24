let FlexContainer = document.getElementById("flex-container");

function FlexDirection(direction_value) {
    buttonList = document.getElementsByClassName("flex-direction__button");

    FlexContainer.style.flexDirection = direction_value;
    for (i = 0; i < buttonList.length; i++) {
        buttonList[i].disabled = false;
    }
    switch (direction_value) {
        case 'row':
            buttonList[0].disabled = true;
            break;
        case 'row-reverse':
            buttonList[1].disabled = true;
            break;
        case 'column':
            buttonList[2].disabled = true;
            break;
        case 'column-reverse':
            buttonList[3].disabled = true;
    }

}
function FlexWrap (wrap_value) {
    buttonList = document.getElementsByClassName("flex-wrap__button");

    FlexContainer.style.flexWrap = wrap_value;
    for(i=0; i < buttonList.length; i++) {
        buttonList[i].disabled = false;
    }
    switch (wrap_value) {
        case 'nowrap':
            buttonList[0].disabled = true;
            break;
        case 'wrap':
            buttonList[1].disabled = true;
            break;
        case 'wrap-reverse':
            buttonList[2].disabled = true;
    }
}

function AlignContent(alignContent_value) {
    buttonList = document.getElementsByClassName("align-content__button");

    FlexContainer.style.alignContent = alignContent_value;
    for(i=0; i < buttonList.length; i++) {
        buttonList[i].disabled = false;
    }
    switch (alignContent_value) {
        case 'normal':
            buttonList[0].disabled = true;
            break;
        case 'center':
            buttonList[1].disabled = true;
            break;
        case 'flex-start':
            buttonList[2].disabled = true;
            break;
        case 'flex-end':
            buttonList[3].disabled = true;
            break;
        case 'space-between':
            buttonList[4].disabled = true;
            break;
        case 'space-around':
            buttonList[5].disabled = true;
            break;
        case 'space-evenly':
            buttonList[6].disabled = true;
            break;
        case 'stretch':
            buttonList[7].disabled = true;
            break;
    }
}

function JustifyContent(justifyContent_value) {
    buttonList = document.getElementsByClassName("justify-content__button");

    FlexContainer.style.justifyContent = justifyContent_value;
    for(i=0; i < buttonList.length; i++) {
        buttonList[i].disabled = false;
    }
    switch (justifyContent_value) {
        case 'normal':
            buttonList[0].disabled = true;
            break;
        case 'center':
            buttonList[1].disabled = true;
            break;
        case 'flex-start':
            buttonList[2].disabled = true;
            break;
        case 'flex-end':
            buttonList[3].disabled = true;
            break;
        case 'space-between':
            buttonList[4].disabled = true;
            break;
        case 'space-around':
            buttonList[5].disabled = true;
            break;
        case 'space-evenly':
            buttonList[6].disabled = true;
            break;
    }
}

function AlignItems(alignItem_value) {
    buttonList = document.getElementsByClassName("align-items__button");

    FlexContainer.style.alignItems = alignItem_value;
    for(i=0; i < buttonList.length; i++) {
        buttonList[i].disabled = false;
    }
    switch (alignItem_value) {
        case 'normal':
            buttonList[0].disabled = true;
            break;
        case 'center':
            buttonList[1].disabled = true;
            break;
        case 'flex-start':
            buttonList[2].disabled = true;
            break;
        case 'flex-end':
            buttonList[3].disabled = true;
            break;
        case 'stretch':
            buttonList[4].disabled = true;
            break;
        case 'baseline':
            buttonList[5].disabled = true;
            break;
    }
}