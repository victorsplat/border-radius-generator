$('.copy').on('click', () => {
    const borderValue = $('.box').css('border-radius')
    const temporaryElement = document.createElement('textarea');
    temporaryElement.value = borderValue;
    document.body.appendChild(temporaryElement);
    temporaryElement.select();
    document.execCommand('copy');
    document.body.removeChild(temporaryElement);
    alert('You copied: ' + borderValue)
})