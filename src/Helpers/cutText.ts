/* eslint-disable no-param-reassign */
const cutText = (text: string, maxWords: number) => {
    const words = text.trim().split(' ')

    if (words.length <= maxWords) {
        return text
    }

    let truncatedText = words.slice(0, maxWords).join(' ')

    while (truncatedText.slice(-1) !== '.' && words.length > maxWords) {
        truncatedText += ` ${words[maxWords]}`
        maxWords += 1
    }

    return truncatedText
}
export default cutText
