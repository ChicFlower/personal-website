function theme_switch()
{
    let theme = document.getElementById("theme");

    if (theme.getAttribute('href') == "styles_LM.css")
    {
        theme.setAttribute('href', "styles_DM.css");
    }
    
    else
    {
        theme.setAttribute('href', "styles_LM.css");
    }
}