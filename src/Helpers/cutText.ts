const shortenOverview = (text: string, maxWords: number) => {
    const words = text.trim().split(' ')

    if (words.length <= maxWords) {
        return text
    }

    let truncatedText = words.slice(0, maxWords).join(' ')
    let currentWordIndex = maxWords

    while (truncatedText.slice(-1) !== '.' && currentWordIndex < words.length) {
        truncatedText += ` ${words[currentWordIndex]}`
        currentWordIndex += 1
    }

    return truncatedText
}

export default shortenOverview
