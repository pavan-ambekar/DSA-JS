const longestSequenceOfUni2queChar = (str) => {
    let uniqueSequence = '';
    let TempUniqueSequence = '';
    for (let i = 0; i < str.length; i++) {
        let index = TempUniqueSequence.indexOf(str[i]);
        if (index !== -1) {
            TempUniqueSequence = TempUniqueSequence.substring(index + 1);
        }
        TempUniqueSequence += str[i];
        if (uniqueSequence.length < TempUniqueSequence.length)
            uniqueSequence = TempUniqueSequence;
    }
    return uniqueSequence;
};

console.log(longestSequenceOfUni2queChar('hellothere'));
