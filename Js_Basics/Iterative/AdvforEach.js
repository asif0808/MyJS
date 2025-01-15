const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
console.log(myCoding);
// filtering usingn forEach
// item => each object
myCoding.forEach(item => {
    console.log(item.languageName);
});
