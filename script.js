const convertButton = document.querySelector(".convert-button") // Botão de conversão
const currencySelect = document.querySelector(".select-currency-to-convert") // Seleciona a moeda que será convertida
const currencySelectPrimary = document.querySelector(".select-currency") // Seleciona a moeda que estou convertendo
const currencyConvertedName = document.querySelector(".currency-converted") // Nome da moeda convertida
const currencyConvertName = document.querySelector(".currency") // Nome da moeda que será convertida"
const imgConverted = document.querySelector(".img-currency-converted") // Imagem da moeda convertida
const imgConvert = document.querySelector(".img-currency-convert") // Imagem da moeda que será convertida
const currencyValorConverted = document.querySelector(".currency-value")    // Valor convertido
const currencyValue = document.querySelector(".currency-value-to-convert") // Valor à ser convertido
const inputCurrencyValue = document.querySelector(".input-currency").value
const libraToday = 6.1
const bitcoinToday = 633000
const euroToday = 5.2
const dolarToday = 5
const realToday = 1

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real

    console.log(currencySelectPrimary.value)
    console.log(currencySelect.value)

    if (inputCurrencyValue == "") {
        alert("Por favor, insira um valor para conversão.")
    }

    if (currencySelectPrimary.value === "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }
    if (currencySelectPrimary.value === "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelectPrimary.value === "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelectPrimary.value === "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelectPrimary.value === "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }


    if (currencySelect.value == "dolar") {
        currencyValorConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValorConverted.innerHTML = new Intl.NumberFormat("de-DE", {
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
        currencyValorConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday)

    }
    if (currencySelect.value == "real") {
        currencyValorConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue / realToday)
    }

}

function changeCurrency() {


    if (currencySelectPrimary.value == "dolar") {
        imgConvert.src = "./assets/dolar.png"
        currencyConvertName.innerHTML = "Dólar"
    }
    if (currencySelectPrimary.value == "euro") {
        imgConvert.src = "./assets/euro.png"
        currencyConvertName.innerHTML = "Euro"
    }
    if (currencySelectPrimary.value == "libra") {
        imgConvert.src = "./assets/libra.png"
        currencyConvertName.innerHTML = "Libra"
    }
    if (currencySelectPrimary.value == "bitcoin") {
        imgConvert.src = "./assets/bitcoin.png"
        currencyConvertName.innerHTML = "Bitcoin"
    }
    if (currencySelectPrimary.value == "real") {
        imgConvert.src = "./assets/real.png"
        currencyConvertName.innerHTML = "Real"
    }

    if (currencySelect.value == "real") {
        imgConverted.src = "./assets/real.png"
        currencyConvertedName.innerHTML = "Real"
    }

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


currencySelectPrimary.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)