$(document).ready(function() {
    $('#signIn').click(function() {
        $('.signin').fadeIn();
        $('body').addClass('hidden');
    });
    $('.menuIcon').click(function() {
        $('.header_detail_inner').slideDown('visible');
    });

    $('.closeNav').click(function() {
        $('.header_detail_inner').slideUp('visible');
    });
    $('#burgerBtn').click(function() {
        $('body').toggleClass('hidden');
        $('.wrapper').toggleClass('hidden');
        $('.demo1 .nav').fadeToggle();
    });
    $('#menuToggle').click(function() {
        $('.sidebar').toggleClass('show');
        $('body').toggleClass('hidden');
    });
    $('.sidebar_nav ul li a, body').click(function() {
        $('.sidebar').removeClass('show');
        $('body').removeClass('hidden');
        $('#menuToggle input').prop('checked', false);
    });
    $('.sidebar, #menuToggle').click(function(e) {
        e.stopPropagation();
    });

    var burgerBtn = document.getElementById('burgerBtn');
    var mobile = document.getElementById('mobile');
    var demo3 = document.getElementById('demo3');

    burgerBtn.addEventListener('click', function() {
        mobile.classList.toggle('navigation');
    }, false);

    demo3.addEventListener('click', function() {
        demo3.classList.add('active');
        demo1.classList.remove('active');
        demo2.classList.remove('active');
        mobile.classList.add('demo3');
        mobile.classList.remove('demo1', 'demo2', 'navigation');
    }, false);


    animation
    wow = new WOW({
        animateClass: 'animated',
        offset: 50,
        callback: function(box) {
            console.log("WOW: animating < " + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();
    document.getElementById('moar').onclick = function() {
        var section = document.createElement('section');
        section.className = 'section--purple wow fadeInDown';
        this.parentNode.insertBefore(section, this);
    };

});






// sticky header

$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
        $('body').addClass('fixed_header');
    } else {
        $('body').removeClass('fixed_header');
    }
});