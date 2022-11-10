function course() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let like = prompt("Do you like painting? Yes / No");
  if (like === "Yes") {
    alert(
      "Thank you " +
        name +
        "! Let's keep in touch by email, don't forget to check out my other tutorials!🎨"
    );
  } else {
    alert("Thank you " + name + "! See you next time 🙂");
  }
}

let courseButton = document.querySelector("button");
courseButton.addEventListener("click", course);
