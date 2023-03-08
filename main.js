window.addEventListener("load", init);

function init()
{
    const articles = document.querySelectorAll("article");
    letezoTagekKozeIr(articles[0], () =>
    {
        return ujTagekKozeIr("button", null, () =>
        {
            return "sus";
        });
    });
    const buttons = document.querySelectorAll("article button");
    buttons[0].onclick = () => alert("Amogus");
    letezoTagekKozeIr(articles[0], () =>
    {
        return ujTagekKozeIr("div", null, () =>
        {
            return `<img src="kepek/honse.jpeg" alt="honse">`;
        });
    });
    const images = document.querySelectorAll("article div img");
    images[0].addEventListener("mouseover", () =>
    {
        images[0].style.border = "5px solid black";
    });
    images[0].addEventListener("mouseleave", () =>
    {
        images[0].style.border = "none";
    });
}

function letezoTagekKozeIr(szuloElem, tartalom)
{
    szuloElem.innerHTML += tartalom();
}

function ujTagekKozeIr(tag, parameterek = null, tartalom = () => "")
{
    return `<${tag}${parameterek ? ` ${parameterek}` : ""}>${tartalom()}</${tag}>`;
}
