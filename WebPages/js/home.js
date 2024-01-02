window.onscroll=function(){
    var header=document.querySelector('.head1');
    var scrollPosition=window.scrollY;
    if(scrollPosition>122){
        document.body.classList.add('scrolled');

    }
    else{
        document.body.classList.remove('scrolled');
    }
}