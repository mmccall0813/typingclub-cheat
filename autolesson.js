var wpm = parseInt(prompt("How many WPM do you want the bot to type?"));
var origwpm = wpm;
if(isNaN(wpm)) return alert("Are you sure you entered a number? Try again please.");
if(wpm > 150) if(!confirm("Are you sure you want your wpm that high? This could cause you to possibly be detected for cheating or cause you to lag.")) return alert("Ok, exiting.")
if(wpm <= 0) return alert("Your WPM cant be that low!");
alert("Starting auto-type.\nPlease note that mini-games currently dont work very well with auto-type.")
var i = 0;
var lastIndex = -1;
var cheat; 
function setCheat() {
    clearInterval(cheat )
    cheat = setInterval( () => {
setTimeout( () => {
if(core.cur_char_index == core.text.length-1) clearInterval(cheat);
var wordLength = core.words[core.cur_word_index].char_list.length;
core.bound_keypress_handler({key: core.cur_char.chr});
}, (Math.floor(Math.random() * 15) + 10))
}, (12000)/wpm)}
setInterval( () => {
    if(typeof document.querySelector(".navbar-continue") != null){
        document.querySelector(".navbar-continue").click()
        var variation = 8;
        wpm = origwpm + (Math.floor(Math.random() * variation) - variation/2);
        setTimeout(setCheat, 3000);
    }
}, 2500)
setCheat()
