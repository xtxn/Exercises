function fromJSONToHTMLTable(input) {
    let objArr = JSON.parse(input);
    let result = '<table>\n';

    function convertHTML(str) {
        return str
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/\//g, '&#x2F;');
    };

    for (let i = 0; i <= objArr.length; i++) {
        result += `<tr>`
        if (i == 0) {
            for (const key of Object.keys(objArr[i])) {
                result += `<th>${convertHTML(key.trim())}</th>`;
            }
        } else {
            for (const value of Object.values(objArr[i - 1])) {
                result += `<td>${convertHTML(value)}</td>`;
            }
        }
        result += `</tr>\n`;
    }
    result += `</table>`;
    console.log(result);
}

fromJSONToHTMLTable(`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`);