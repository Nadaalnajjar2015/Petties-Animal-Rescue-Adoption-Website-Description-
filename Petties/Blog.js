function showpopup(image){
    const popUp=document.getElementById('profilePopUp');
    const popUpImg=document.getElementById('popUpImg');
     popUpImg.src=image;
     popUp.classList.add('show');
}
function closspopup(){
    document.getElementById('profilePopUp').classList.remove('show');

}

