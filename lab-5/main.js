const url = "https://randomuser.me/api/";

let avatar = document.getElementById("avatar");
let fullname = document.getElementById("name");
let sex = document.getElementById("sex");
let address = document.getElementById("address");
let email = document.getElementById("email");
let birth = document.getElementById("birth");
let age = document.getElementById("age");
let phone = document.getElementById("phone");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(getRandomProfile)
        .catch(printError)
});

function handleErrors(res) {
    if (!res.ok) {
        throw error(res.status);
    }
    console.log(res);
    return res;
}

function parseJSON(res) {
    return res.json();
}

function printError(error) {
    console.log(error);
}

function getRandomProfile(profile) {
    avatar.src = profile.results[0].picture.large;
    // fullname.innerHTML = profile.results[0].name.first + " " + profile.result[0].name.last;
    fullname.innerHTML = profile.results[0].name.first ;
    sex.innerHTML = profile.results[0].gender;
    // address.innerHTML = profile.results[0].location.city + " " + profile.results[0].location.street;
    address.innerHTML = profile.results[0].location.city;
    email.innerHTML = profile.results[0].email;
    birth.innerHTML = profile.results[0].dob.date;
    age.innerHTML = profile.results[0].dob.age;
    phone.innerHTML = profile.results[0].phone;
    return 1;
}