document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const offcanvasNavbar = document.getElementById('offcanvasNavbar');

    offcanvasNavbar.addEventListener('show.bs.offcanvas', function () {
        hamburger.classList.add('active');
    });

    offcanvasNavbar.addEventListener('hide.bs.offcanvas', function () {
        hamburger.classList.remove('active');
    });
});

// indicators button carousel none
// let toggal_button=document.getElementById('toggal')


// toggal_button.addEventListener('click', function(){
//     let indicators_button=document.querySelector('.indicators')
//     indicators_button.classList.toggle('none')
    
// })
