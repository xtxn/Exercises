function editElement(ref, match, replacer) {
    let regexp = new RegExp(match, 'g');
    ref.textContent = ref.textContent.replace(regexp, replacer);
}