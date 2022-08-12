const scroll=window.onscroll;
function scroll() {
    if(document.body.scrollTop>200 || document.documentElement.scrollTop > 120){
        document.getElementById('header').style.top='0';
      }else{
        document.getElementById('header').style.backgroundColor='blue';
      }
}