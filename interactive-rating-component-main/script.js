let userRated = null;

function submitResponse() {
    const beforeC = document.getElementById("beforeCard");
    const afterC = document.getElementById('afterCard');
    const rating = document.getElementsByName('rating');
    const selected = document.getElementsByClassName("selectedNumber");
    for (var radio of rating) {
        if (radio.checked) {
            userRated = radio.value;
        }
    }
    beforeC.classList.add("hideCard");
    afterC.classList.remove("hideCard");
    selected[0].textContent = userRated;

}