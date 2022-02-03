const state=localStorage.getItem("gameState");
let convert = (state) => ((new Function( "return " + state) )())
answer=convert(state).solution;
function typeAnswer(x){
    window.dispatchEvent(new KeyboardEvent("keydown",x));
}
Array.from(answer).forEach(alphabet=>typeAnswer({key:alphabet}));
typeAnswer({key:"Enter"});
