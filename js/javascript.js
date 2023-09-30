const filterButtons = document.querySelectorAll("#gallery .filter_buttons button");
const filterableCards = document.querySelectorAll(" #gallery .filterable_cards .card");

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    filterableCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));


// DOM 
function dom(){
    var input = prompt("Masukkan Nama Anda : ");
    alert("Selamat datang " + input + ".");
}

