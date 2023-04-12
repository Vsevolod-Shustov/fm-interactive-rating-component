document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
  });

let state = new Map([
    ["initialPageVisible", true],
    ["thankyouPageVisible",false],
    ["ratingSelected", null]
]);

let ratingButtons = document.getElementsByClassName("rating-button");

let selectedRating = document.getElementById("selectedRating");

let initialPage = document.getElementById("state-initial");

let thankyouPage = document.getElementById("state-thankyou");

let handleSubmit = function(){
    if(state.get("ratingSelected") === null) {
        alert("please select a rating");
        return;
    }
    //console.log("submitting...");
    selectedRating.innerHTML = state.get("ratingSelected");
    initialPage.classList.remove("visible");
    initialPage.classList.add("hidden");
    thankyouPage.classList.remove("hidden");
    thankyouPage.classList.add("visible");
}

let handleRatingButtonsClick = function(e){
    state.set("ratingSelected", e.target.dataset.rating);
    for(let i = 0; i < ratingButtons.length; i++){
        ratingButtons[i].classList.remove("selected");
    }
    e.target.classList.add("selected");
    console.log(state.get("ratingSelected"));
}

document.getElementById("submit").addEventListener("click", handleSubmit);
document.getElementById("rating-buttons").addEventListener("click", handleRatingButtonsClick);
