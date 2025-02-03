// Selecting DOM elements
const lifestyleMenuItems = document.querySelectorAll(
  ".dropdown-blogs .menu ul li"
);
const lifestyleBlogSections = document.querySelectorAll(
  ".dropdown-blogs .life-style-blogs"
);
const topHeaderDateElement = document.querySelector("#date");
const lifestyleButtons = document.querySelectorAll(
  "#life-style-blogs-buttons button"
);
const lifestyleBlogShowSections = document.querySelectorAll(
  ".life-style-blogs .show-blogs"
);
const fashionButtons = document.querySelectorAll(
  "#fashion-blogs-buttons button"
);
const fashionBlogShowSections = document.querySelectorAll(
  ".fashion-blogs .show-blogs"
);
const postsButtons = document.querySelectorAll("#posts-buttons button");
const postsShowSections = document.querySelectorAll(".posts .show-blogs");
const postCountElements = document.querySelectorAll(".post .image .count p");
const burgerIcon = document.querySelector(".burger-icon");
const navigationBar = document.querySelector(".nav-bar");

// Get current date information
let currentDate = new Date();

const dateInfo = {
  days: {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  },

  months: {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  },
};

// Display current date in the top header
topHeaderDateElement.textContent = `${dateInfo.days[currentDate.getDay()]}, ${
  dateInfo.months[currentDate.getMonth()]
} ${currentDate.getDate()} ${currentDate.getFullYear()} `;

// Event listeners for lifestyle menu items
lifestyleMenuItems.forEach((e) => {
  e.addEventListener("mousemove", () => {
    // Handle mouse movement on lifestyle menu items
    removeClassFromAllElements(lifestyleMenuItems, "active");
    addClassToElement(e, "active");
    removeClassFromAllElements(lifestyleBlogSections, "active");
    addClassByIndex(lifestyleBlogSections, e, "active");
  });
});

// Event listeners for lifestyle buttons
lifestyleButtons.forEach((e) => {
  e.addEventListener("click", () => {
    removeClassFromAllElements(lifestyleBlogShowSections, "active");
    addClassByIndex(lifestyleBlogShowSections, e, "active");
  });
});

// Event listeners for fashion buttons
fashionButtons.forEach((e) => {
  e.addEventListener("click", () => {
    removeClassFromAllElements(fashionBlogShowSections, "active");
    addClassByIndex(fashionBlogShowSections, e, "active");
  });
});

// Event listeners for posts buttons
postsButtons.forEach((e) => {
  e.addEventListener("click", () => {
    removeClassFromAllElements(postsShowSections, "active");
    addClassByIndex(postsShowSections, e, "active");
  });
});

// Function to add a class to an element
function addClassToElement(ele, className) {
  ele.classList.add(className);
}

// Function to remove a class from all elements in a collection
function removeClassFromAllElements(ele, className) {
  for (i = 0; i < ele.length; i++) {
    ele[i].classList.remove(className);
  }
}

// Function to add a class to an element based on its index
function addClassByIndex(ele, elI, className) {
  const index = elI.dataset.index;
  ele[index].classList.add(className);
}

// Set post count elements based on their index
for (i = 0; i < postCountElements.length; i++) {
  postCountElements[i].textContent = `${i + 1}`;
}

// Event listener for burger icon click
burgerIcon.addEventListener("click", function () {
  addClassToElement(navigationBar, "active");
});

// Event listener to close navigation bar when clicking outside
window.addEventListener("click", closeOutSide);

// Function to close navigation bar when clicking outside
function closeOutSide(el) {
  if (el.target == navigationBar) {
    navigationBar.classList.remove("active");
  }
}
