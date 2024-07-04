var infolists = document.getElementsByClassName("info-list");
var tablecontents = document.getElementsByClassName("table-contents");

function opentab(tabname){
    for(infolist of infolists){
        infolist.classList.remove("active-link");
    }
    for(tablecontent of tablecontents){
        tablecontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust offset for fixed nav
        behavior: 'smooth'
    });
};