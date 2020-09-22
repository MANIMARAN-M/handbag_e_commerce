const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
searchBtn.onclick = () => {
    searchBox.classList.add("active-one");
    searchBtn.classList.add("active-one");
    searchInput.classList.add("active-one");
    cancelBtn.classList.add("active-one");
    searchInput.focus();
    if (searchInput.value != "") {
        var values = searchInput.value;
        searchData.classList.remove("active-one");
        searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
    } else {
        searchData.textContent = "";
    }
}
cancelBtn.onclick = () => {
    searchBox.classList.remove("active-one");
    searchBtn.classList.remove("active-one");
    searchInput.classList.remove("active-one");
    cancelBtn.classList.remove("active-one");
    searchData.classList.toggle("active-one");
    searchInput.value = "";
}
