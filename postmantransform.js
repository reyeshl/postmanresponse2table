let jsonData = pm.response.json();

if (Array.isArray(jsonData) && jsonData.length > 0) {
    let keys = Object.keys(jsonData[0]);
    let table = "<table border='1'><thead><tr>";
    // Header
    keys.forEach(key => {
        table += `<th>${key}</th>`;
    });
    table += "</tr></thead><tbody>";

    // Rows
    jsonData.forEach(item => {
        table += "<tr>";
        keys.forEach(key => {
            table += `<td>${item[key]}</td>`;
        });
        table += "</tr>";
    });

    table += "</tbody></table>";

    pm.visualizer.set(table);  // Render the table
} else {
    console.log("The response is not an array of objects or is empty.");
}
