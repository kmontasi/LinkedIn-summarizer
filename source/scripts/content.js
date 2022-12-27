//gather all the relevant information from the site
const UserName = document.querySelector(".ph5 .mt2 .pv-text-details__left-panel .text-heading-xlarge");
const UserOccupation = document.querySelector(".ph5 .mt2 .pv-text-details__left-panel  .text-body-medium");
const UserLocation = document.querySelector(".ph5 .mt2 .mt2 .text-body-small");
//const UserEducation = document.querySelector("#ember136  .pvs-list__outer-container .pvs-list .artdeco-list__item .pvs-entity .display-flex .display-flex .optional-action-target-wrapper .display-flex .mr1 ");

if (UserName) {
    const Text = UserName.textContent;
    console.log(Text);
    document.getElementById('demo').appendChild(Text);
   // document.getElementById("demo").innerHtml = "fek";
}



if (UserOccupation) {
    const Text = UserOccupation.innerText;
    console.log(Text);
}
else {
    console.log("not found");
}

if (UserLocation) {
    const Text = UserLocation.innerText;
    console.log(Text);
}
else {
    console.log("not found");
}

/*if (UserEducation) {
    console.log(UserEducation)
    const Text = UserEducation.innerText;
    console.log(Text);
}
else {
    console.log("not found");
}
*/



