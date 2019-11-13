let back = document.getElementById('back');
back.onmouseover = (e) => {
    document.body.style.cursor = "pointer";
}
back.onclick = (e) => {
    history.back();
}
