document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const projectBoxes = document.querySelectorAll('.project-box');
    const contactSection = document.getElementById('contact');
    const nav = document.querySelector('nav');

    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode-header');
        nav.classList.toggle('dark-mode-nav');

        sections.forEach(section => section.classList.toggle('dark-mode-section'));
        projectBoxes.forEach(box => box.classList.toggle('dark-mode-box'));
        contactSection.classList.toggle('dark-mode-section');

        invertBackgroundColors();
    });

  function invertBackgroundColors() {
    const elementsToInvert = [body, header, nav, ...sections, ...projectBoxes, contactSection];

    elementsToInvert.forEach(element => {
        // Skip if the element has a background image or is an image with the 'no-invert' class
        if (hasBackgroundImage(element) || (isImageElement(element) && element.classList.contains('no-invert'))) {
            return;
        }

        // Revert to original colors if dark mode is toggled off
        if (!body.classList.contains('dark-mode')) {
            element.style.backgroundColor = '';
            element.style.color = '';
            return;
        }

        // Invert colors for all elements
        element.style.backgroundColor = invertColor(getComputedStyle(element).backgroundColor);
        element.style.color = invertColor(getComputedStyle(element).color);
    });

    // Special handling for the contact section background and text
    if (body.classList.contains('dark-mode')) {
        contactSection.style.backgroundColor = invertColor(getComputedStyle(contactSection).backgroundColor);
        contactSection.style.color = invertColor(getComputedStyle(contactSection).color);
    } else {
        contactSection.style.backgroundColor = '';
        contactSection.style.color = '';
    }
}

    function hasBackgroundImage(element) {
        const backgroundImage = getComputedStyle(element).backgroundImage;
        return backgroundImage !== 'none' && !backgroundImage.includes('url("data:image');
    }

    function isImageElement(element) {
        return element.nodeName.toLowerCase() === 'img' && !element.classList.contains('no-invert');
    }

    function invertColor(color) {
        // Basic color inversion logic, you may need to enhance this based on your requirements
        return color.replace(/rgb\((\d+), (\d+), (\d+)\)/, (_, r, g, b) => {
            r = 255 - parseInt(r);
            g = 255 - parseInt(g);
            b = 255 - parseInt(b);
            return `rgb(${r}, ${g}, ${b})`;
        });
    }
});
