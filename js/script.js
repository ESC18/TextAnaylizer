//Business Logic

function wordCounter(Text) {
    if (text.trim().length === 0) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function(word) {
        wordCount++;
});
    return wordCount;
}