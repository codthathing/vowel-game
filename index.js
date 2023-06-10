let cheBtn = document.getElementById("che-btn")
let text = document.getElementById("text")
let pass = document.getElementById("pass")

const vowels = () => {
    if(text.value) {
        let textString = text.value
        let textUpper = textString.toUpperCase()
        const aVowel = [...textUpper].filter(a => a === "A").length
        const eVowel = [...textUpper].filter(e => e === "E").length
        const iVowel = [...textUpper].filter(i => i === "I").length
        const oVowel = [...textUpper].filter(o => o === "O").length
        const uVowel = [...textUpper].filter(u => u === "U").length
        const totalVowel = aVowel + eVowel + iVowel + oVowel + uVowel

        pass.innerHTML = `
            <caption>There are ${totalVowel} vowels in the world ${textUpper}</caption>
            <tr>
                <th>Vowel</th>
                <th>Amount present</th>
            </tr>
            <tr>
                <th>A</th>
                <td>${aVowel}</td>
            </tr>
            <tr>
                <th>E</th>
                <td>${eVowel}</td>
            </tr>
            <tr>
                <th>I</th>
                <td>${iVowel}</td>
            </tr>
            <tr>
                <th>O</th>
                <td>${oVowel}</td>
            </tr>
            <tr>
                <th>U</th>
                <td>${uVowel}</td>
            </tr>
        `
        text.value = ""
    }
}

cheBtn.addEventListener("click", vowels)