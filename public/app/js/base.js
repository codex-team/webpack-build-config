var indexPage = (function(){

    var draw = function() {
        
        var output = document.getElementById('js-output');

        output.classList.add('colored-div');
    };

    return {
        draw: draw
    };

})();

module.exports = indexPage;