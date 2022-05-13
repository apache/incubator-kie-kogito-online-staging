
let id = "";
function imageClicked() {
    alert("Dashbuilder logo!");
}

window.addEventListener("message", receiveMessage, false);

function sendMessage(props) {
    if (!props) {
        props = new Map();
    }
    props.set("component_id", id);
    window.parent.postMessage({
        type: "FILTER",
        properties: props
    });
}

function receiveMessage(event) {
    console.log(event.data);
    const params = new Map(event.data.properties);
    var fontSize = "10px";

    document.getElementById("age").innerHTML = params.get("age");
    document.getElementById("name").innerHTML = params.get("name");
    document.getElementById("container").style.color = params.get("color");
    document.getElementById("container").style.border = params.get("border");

    id = params.get("component_id");

    document.getElementById("componentId").textContent = "ComponentID: " + id;

    if (params.get("size") === "true") {
        fontSize = "18px";
    }
    document.getElementById("container").style.fontSize = fontSize;
    const dataSet = params.get("dataSet");
    const rows = dataSet.data;
    const cols = dataSet.columns;
    const tableBody = document.getElementById("dataTableBody");
    const tableHead = document.getElementById("dataTableHead");

    tableBody.innerHTML = "";
    tableHead.innerHTML = "";

    const headTr = document.createElement("tr");
    for (let i = 0; i < cols.length; i++) {
        const th = document.createElement("th");
        th.innerHTML = cols[i].name;
        headTr.appendChild(th);
    }

    tableHead.appendChild(headTr);

    for (let i = 0; i < rows.length; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < rows[i].length; j++) {
            const td = document.createElement("td");
            td.innerHTML = rows[i][j];
            td.onclick = e => filter(false, j, i);
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }
}

function filter(reset, col, row) {
    var props = new Map();

    props.set("filter", {
        reset: reset,
        column: col,
        row: row

    })
    sendMessage(props);
}