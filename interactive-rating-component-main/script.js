let userRated = 0;

function submitResponse() {
    const beforeC = document.getElementById("beforeCard");
    const afterC = document.getElementById('afterCard');
    const selected = document.getElementsByClassName("selectedNumber");
    const checkRadio = document.querySelector('input[name="rating"]:checked')

    if(checkRadio != null) {
        userRated = checkRadio.value;
    } else {
        noneSelected();
        return;
    }
    beforeC.classList.add("hide");
    afterC.classList.remove("hide");
    selected[0].textContent = userRated;

}

function noneSelected() {
    const dialog = document.querySelector('.none');
    dialog.classList.remove("hide");
    return;
}