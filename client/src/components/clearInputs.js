export const clearInputs = (className) => {
    const inputs = Array.from(document.getElementsByClassName(className));
    inputs.forEach(input => input.value = '');

}