
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const projectBoxes = document.querySelectorAll('.project-box');
    const contactSection = document.getElementById('contact');
  
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    document.body.appendChild(darkModeToggle);
  
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode-header');
        sections.forEach(section => section.classList.toggle('dark-mode-section'));
        projectBoxes.forEach(box => box.classList.toggle('dark-mode-box'));
        contactSection.classList.toggle('dark-mode-section');
  
        invertBackgroundColors();
    });
  
    function invertBackgroundColors() {
        const elementsToInvert = [body, header, ...sections, ...projectBoxes, contactSection];
  
        elementsToInvert.forEach(element => {
            // Skip if the element has a background image or is an image
            if (hasBackgroundImage(element) || element.nodeName.toLowerCase() === 'img') {
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
  
    function invertColor(color) {
        const hexColor = colorToHex(color);
        const invertedColor = '#' + (0xFFFFFF ^ parseInt(hexColor.substring(1), 16)).toString(16).padStart(6, '0');
        return invertedColor;
    }
  
    function colorToHex(color) {
        const rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        return rgb ? '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]) : color;
    }
  
    function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2);
    }
  });