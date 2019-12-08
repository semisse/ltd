const navigation = document.getElementsByTagName("nav");
const li = navigation[0].children[0].children;
const checkbox = document.getElementsByTagName("input");
for (let index = 0; index < li.length; index++) {
    const link = li[index].getElementsByTagName("a");
    link[0].addEventListener("click", (e) => {
        e.preventDefault();
        const destination = link[0].innerHTML;
        checkbox[0].checked = false;
        const section = document.getElementById(destination.toLowerCase());
        section.scrollIntoView();
    });
}




