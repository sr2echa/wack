const state=localStorage.getItem("nyt-wordle-state");
let convert = (state) => ((new Function( "return " + state) )())
answer=convert(state).solution;
function typeAnswer(x){
    window.dispatchEvent(new KeyboardEvent("keydown",x));
}
Array.from(answer).forEach(alphabet=>typeAnswer({key:alphabet}));
typeAnswer({key:"Enter"});
