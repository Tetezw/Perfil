function mudarModo() {

    const html = document.documentElement

    // OUTRA MANEIRA DE FAZER COM IF E ELSE

    // if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add("light")
    // }

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto do perfil em modo claro")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Foto do perfil em modo escuro")

    }


}