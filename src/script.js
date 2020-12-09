//Track Element
let input = document.getElementById('dummy-id');
let btn = document.getElementById('btn');

//Add Event Listener
btn.onclick = event =>{
    input.select();
    document.execCommand('copy');
}