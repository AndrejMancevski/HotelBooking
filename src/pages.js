var modalDis = function (imgClicked, imgModal, modal) {
    var img = imgClicked;

    modal.style.display = 'block';
    imgModal.src = img.getAttribute('src');
}
var closeModal = function (modalToBeClosed) {
    modalToBeClosed.style.display = 'none';
}