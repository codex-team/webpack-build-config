var article = (function () {
    var print = function (text) {
        var output = document.getElementById('js-output');

        output.textContent = text;
    };

    return {
        print: print
    };
})();

module.exports = article;
