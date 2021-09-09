
window.onload = () => {
        getRandomUser()
}

const userTitle = document.querySelector(".c-card__title");
const cardIcons = document.querySelector(".card-ul");
const userImage = document.querySelector(".c-card__image");


const getRandomUser = () => {
fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json()
}).then((data) => {

    let userInfo = data.results[0];
    console.log(userInfo)
    showRandomUser(userInfo)
})
    
}

showRandomUser = (userInfo) => {

    let date = `${userInfo.dob.date}`.slice(0,10);
    birthday = new Date(date).toLocaleDateString('en-GB');
    let imgSrc = `<img src="${userInfo.picture.large}">`;
    let name = `${userInfo.name.first} ${userInfo.name.last}`;
    let details_ = `
    <li class="icon user active" data-title="Hi, My name is" data-value="${userInfo.name.first} ${userInfo.name.last}">
    <a><img src="./assets/icons/svg/misc/user.svg"  class="c-card--li__image"> </a></li>

    <li class="icon email" data-title="My email address is" data-value="${userInfo.email}">
    <a ><img src="./assets/icons/svg/misc/email.svg"  class="c-card--li__image"></a></li>

    <li class="icon calendar" data-title="My age is" data-value=" ${birthday}">
    <a><img src="./assets/icons/svg/misc/calendar.svg"  class="c-card--li__image"></a></li>

    <li class="icon location" data-title="My addres is" data-value="${userInfo.location.street.number} - ${userInfo.location.street.name}">
    <a><img src="./assets/icons/svg/misc/map-location.svg"  class="c-card--li__image"></a></li>

    <li class="icon call" data-title="My phone number is " data-value="${userInfo.cell}">
    <a><img src="./assets/icons/svg/misc/call.svg"  class="c-card--li__image"></a></li>

    <li class="icon password" data-title="My password is" data-value="${userInfo.login.password}">
    <a><img src="./assets/icons/svg/misc/locked.svg"  class="c-card--li__image"></a></li>        
    `
    cardIcons.innerHTML = details_;
    userImage.innerHTML = imgSrc;
    userTitle.innerHTML = name;

    const icon = document.querySelectorAll(".icon");
    const title_info = document.querySelector(".c-card__subtitle");
    const title_details = document.querySelector(".c-card__title");

    icon.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            let titleData = item.getAttribute("data-title");
            let dataValue = item.getAttribute("data-value");

            title_info.innerHTML = titleData;
            title_details.innerHTML = dataValue;

            let activeClass = document.querySelectorAll(".active");

            activeClass.forEach(function (active_) {
                active_.className = active_.className.replace(" active", "");
            })
            item.className += " active";
    
 });
}
    )}