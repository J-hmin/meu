
cate_lnb = document.getElementsByClassName("wrapper_lnb");
cate_lnb[0].style.display="none";
cateIcon = document.getElementById("icons");

var opened = 0;

function toggleCateBtn() {
    if(opened==0){
        cate_lnb[0].style.display="block";
        cateIcon.src='images/xxx.png';
        opened=1;
    }else if (opened==1){
        cate_lnb[0].style.display="none";
        cateIcon.src='images/bars.png';
        opened=0;
    }

}