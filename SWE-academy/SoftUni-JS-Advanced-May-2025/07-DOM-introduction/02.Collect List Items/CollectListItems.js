function extractText() {
    let input = document.getElementById('items');
    let content = input.children;

    let list = [];
    for (const item of content) {
        list.push(item.textContent);
    }

    let outputArea = document.getElementById("result");

    outputArea.value = list.join('\n');
}