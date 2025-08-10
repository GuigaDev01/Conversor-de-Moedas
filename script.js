const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-currency-to-convert")
const currencyConvertedName = document.querySelector(".currency-converted")
const imgConverted = document.querySelector(".img-currency-converted")
const currencyValorConverted = document.querySelector(".currency-value")    // Valor convertido

function changeCurrency() {
    if (currencySelect.value == "dolar") {
        imgConverted.src = "./assets/dolar.png"
        currencyConvertedName.innerHTML = "Dólar"
    }

    if (currencySelect.value == "euro") {
        imgConverted.src = "./assets/euro.png"
        currencyConvertedName.innerHTML = "Euro"
    }

    if (currencySelect.value == "libra") {
        imgConverted.src = "./assets/libra.png"
        currencyConvertedName.innerHTML = "Libra"
    }

    if (currencySelect.value == "bitcoin") {
        imgConverted.src = "./assets/bitcoin.png"
        currencyConvertedName.innerHTML = "Bitcoin"
    }

    convertValues()
}

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real


    console.log(currencySelect.value)
    const libraToday = 6.1
    const bitcoinToday = 9
    const euroToday = 5.2
    const dolarToday = 5

    if (currencySelect.value == "dolar") {
        currencyValorConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValorConverted.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValorConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday)

    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)