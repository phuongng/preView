//Precede offical opening <br> to your favorite movie 
let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.homepage', //when we want the animation to run -> when we hit the homepage
        start: '0%', //the point in the element that we want to start running animation
        end: '80%', // speed of animation
        scrub: 1, //smooth scrubbing- it takes 1 second to catch up to the scroll bar
    },
});

//preView title
let timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.homepage', //when we want the animation to run -> when we hit the homepage
        start: '0%', //the point in the element that we want to start running animation
        end: '70%', // speed of animation
        scrub: 1, //smooth scrubbing- it takes 1 second to catch up to the scroll bar
    },
});

let timeline4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.homepage', //when we want the animation to run -> when we hit the homepage
        start: '0%', //the point in the element that we want to start running animation
        end: '80%', // speed of animation
        scrub: 1, //smooth scrubbing- it takes 1 second to catch up to the scroll bar
    },
});

timeline.fromTo(".sliding-text", { y: 0 }, { y: -400 });
timeline2.fromTo(".logo", { scale: 6 }, { scale: 1.5, top: "2rem", left: "3rem", x: '50%', y: '50%' });
timeline4.fromTo(".square", { left: "70%" }, { left: "100%", opacity: 0, rotation: 90 });

//pinning the homepage on the screen
let timeline3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.homepage', //when we want the animation to run -> when we hit the homepage
        start: '0%', //the point in the element that we want to start running animation
        end: '80%', //speed of animation
        scrub: 1, //smooth scrubbing- it takes 1 second to catch up to the scroll bar
        pin: true,
        pinSpacing: false,
    },
});
//search bar on the screen
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        //Remove toUpperCase() if you want to perform a case-sensitive search.
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//login sign up button
$(".info-item .btn").click(function() {
    $(".container").toggleClass("log-in");
});
$(".container-form .btn").click(function() {
    $(".container").addClass("active");
});

//footer 

function todayDate() {
    var d = new Date();
    var n = d.getFullYear() + "  ";
    return document.getElementById("date").innerHTML = n;
}