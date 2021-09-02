var wpm = parseInt(prompt("How many WPM do you want the bot to type?"));
if(isNaN(wpm)) return alert("Are you sure you entered a number? Try again please.");
if(wpm > 150) if(!confirm("Are you sure you want your wpm that high? This could cause you to possibly be detected for cheating or cause you to lag.")) return alert("Ok, exiting.")
if(wpm <= 0) return alert("Your WPM cant be that low!");
var i = 0;
function typingLoop(){
i++
if(i == core.text.length+1) return;
var wordLength = core.words[core.cur_word_index].char_list.length;
core.bound_keypress_handler({key: core.cur_char.chr});
setTimeout(typingLoop, (11500)/wpm)
}
typingLoop()
