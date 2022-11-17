function saveGame() {
    localStorage.setItem("moners", JSON.stringify(data))
    document.getElementById("saved").innerHTML = "game saved"
}

let autoSave = setInterval(function() {
    localStorage.setItem("moners", JSON.stringify(data))
    saveData.a += 1
    document.getElementById("saved").innerHTML = "game auto saved " + "(" + saveData.a + ")"
}, 10000)

let load = JSON.parse(localStorage.getItem("moners"))
if (load !== null) {
    data = load
}