function invertBackgroundColors() {
    const elementsToInvert = [body, header, ...sections, ...projectBoxes, contactSection];

    elementsToInvert.forEach(element => {
        // Skip if the element has a background image or is an image
        if (hasBackgroundImage(element) || isImageElement(element)) {
            return;
        }

        // Revert to original colors if dark mode is toggled off
        if (!body.classList.contains('dark-mode')) {
            element.style.backgroundColor = '';
            element.style.color = '';
            return;
        }

        const backgroundColor = getComputedStyle(element).backgroundColor;
        const textColor = getComputedStyle(element).color;

        element.style.backgroundColor = invertColor(backgroundColor);
        element.style.color = invertColor(textColor);
    });
}

function hasBackgroundImage(element) {
    const backgroundImage = getComputedStyle(element).backgroundImage;
    return backgroundImage !== 'none' && !backgroundImage.includes('url("data:image');
}

function isImageElement(element) {
    return element.nodeName.toLowerCase() === 'img';
}
function invertBackgroundColors() {
    const elementsToInvert = [body, header, ...sections, ...projectBoxes, contactSection];

    elementsToInvert.forEach(element => {
        // Skip if the element has a background image or is an image
        if (hasBackgroundImage(element) || isImageElement(element)) {
            return;
        }

        // Revert to original colors if dark mode is toggled off
        if (!body.classList.contains('dark-mode')) {
            element.style.backgroundColor = '';
            element.style.color = '';
            return;
        }

        const backgroundColor = getComputedStyle(element).backgroundColor;
        const textColor = getComputedStyle(element).color;

        element.style.backgroundColor = invertColor(backgroundColor);
        element.style.color = invertColor(textColor);
    });
}

function hasBackgroundImage(element) {
    const backgroundImage = getComputedStyle(element).backgroundImage;
    return backgroundImage !== 'none' && !backgroundImage.includes('url("data:image');
}

function isImageElement(element) {
    return element.nodeName.toLowerCase() === 'img';
}
