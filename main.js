var Home = document.querySelector('.navbar li a');
Home.addEventListener('onclick' , runEvent(e));
function runEvent() {
    e.preventdefault();
    console.log(e.type());
}