
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function(event) {
        console.log(this.innerHTML);
    };
};