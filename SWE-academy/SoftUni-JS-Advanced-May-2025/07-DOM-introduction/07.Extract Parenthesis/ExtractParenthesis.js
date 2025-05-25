function extract(content) {
    let input = document.getElementById(content)

    const regex = /\(([^)]+)\)/g;
    const matches = input.textContent.matchAll(regex);
    let result = [];
    for (const match of matches) {
        result.push(match[1]);
    }

    return result.join('; ');
}