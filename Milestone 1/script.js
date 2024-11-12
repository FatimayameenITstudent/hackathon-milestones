var button = document.getElementById('ref_btn');
var refrence = document.getElementById('ref');
button.addEventListener('click', function () {
    if (refrence.style.display === 'none') {
        refrence.style.display = 'block';
    }
    else {
        refrence.style.display = 'none';
    }
});
