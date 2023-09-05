var mobileNav = false;

document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
  if (!mobileNav) {
    document.querySelector('header h1').style.opacity = "0";
    document.querySelector('.container').style.display = "none";
    document.querySelector('footer').style.display = "none";
    document.querySelector('.mobile-nav').style.display = "block";

    document.querySelector('.mobile-nav-toggle span:first-child').style.transform = 'rotate(45deg) translateX(5px)';
    document.querySelector('.mobile-nav-toggle span:nth-child(2)').style.display = "none";
    document.querySelector('.mobile-nav-toggle span:last-child').style.transform = 'rotate(-45deg) translateX(4px)';

    mobileNav = true;
  } else {
    document.querySelector('header h1').style.opacity = "1";
    document.querySelector('.container').style.display = "block";
    document.querySelector('footer').style.display = "block";
    document.querySelector('.mobile-nav').style.display = "none";

    document.querySelector('.mobile-nav-toggle span:first-child').style.transform = 'none';
    document.querySelector('.mobile-nav-toggle span:nth-child(2)').style.display = "block";
    document.querySelector('.mobile-nav-toggle span:last-child').style.transform = 'none';

    mobileNav = false;
  }
});