const submit_btn = document.getElementById('submit_btn');
const main_container = document.getElementById('main_container');
const thanks_container = document.getElementById('thank_container');
const print_rating_number = document.getElementById('rating_number');
let rating = 0;

const btn_rating_one = document.getElementById('btn_rating_one').onclick = function() {rating = 1};
const btn_rating_two = document.getElementById('btn_rating_two').onclick = function() {rating = 2};
const btn_rating_three = document.getElementById('btn_rating_three').onclick = function() {rating = 3};
const btn_rating_four = document.getElementById('btn_rating_four').onclick = function() {rating = 4};
const btn_rating_five = document.getElementById('btn_rating_five').onclick = function() {rating = 5};

submit_btn.addEventListener('click', () => {
    if (rating != 0) {
        main_container.classList.add('hide');  
        thanks_container.classList.add('show');
        print_rating_number.textContent = `You selected ${rating} out of 5`;
    }
})