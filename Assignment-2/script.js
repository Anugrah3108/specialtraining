async function fetchData() {
    const ret = await fetch("https://api.github.com/users/anugrah3108");
    const data = await ret.text();
    document.getElementById("dat").innerHTML = data;
}
document.getElementById("clickHere").addEventListener("click", event => {
    fetchData();
})