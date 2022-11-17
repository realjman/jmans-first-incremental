function getMoney() {
    data.money += data.moneyPerClick
}

function autoMoney() {
    data.money += data.moneyPerSecond
}

function getMoreMoneyPerClick() {
    if (data.money < data.moreMoneyPerClickPrice) return alert("you dont have enough moners")
    data.money -= data.moreMoneyPerClickPrice
    data.moreMoneyPerClickPrice *= 2
    data.moneyPerClick += 1
}

let autoGenMoney = setInterval(function(){
    autoMoney()
}, 1000)

let autoUpdate = setInterval(function() {
    document.getElementById("moners").innerHTML = data.money
    document.getElementById("currentMonersPerClick").innerHTML = data.moneyPerClick
    document.getElementById("monersPerClick").innerHTML = data.moreMoneyPerClickPrice
    document.getElementById("version").innerHTML = data.version
}, 1)