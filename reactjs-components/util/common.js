export function fetchData(url) {
    /* Fetch from the API url */

    return fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            query: `{
                currencies {
                    landXProperty {
                        id
                        name
                        issuerName
                        mapImageUrl
                        launchProgress
                        totalPurchasePrice
                        category
                        settlementDate
                        initialTokenPrice
                        tokenSupply
                        dividendSchedule
                        annualRentYield
                        annualRentYieldUpper
                        description
                        address
                        token {
                            name
                            symbol
                        }
                        previewImages
                    }
                }
            }`
        })
    })
    .then(r => r.json())
    .then((data) => {
        return data;
    });
}

export function calculateRemainingDays(settlementDate) {
    const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
    const today = new Date().getTime();
    return Math.floor((settlementDate - today) / oneDay);
}

export function capitalizeTheFirstLetterOfEachWord(words) {
    let separateWord = words.toLowerCase().split(' ');
    for (let i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}
