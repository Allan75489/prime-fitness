// =============================
// SCROLL SUAVE NOS LINKS
// =============================

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {

        if (this.hash !== "") {
            e.preventDefault()

            const alvo = document.querySelector(this.hash)

            alvo.scrollIntoView({
                behavior: "smooth"
            })
        }

    })
})


// =============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =============================

const elementos = document.querySelectorAll(
    ".plano-card, .card, .post"
)

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"

        }

    })

}, { threshold: 0.2 })


elementos.forEach(el => {

    el.style.opacity = "0"
    el.style.transform = "translateY(40px)"
    el.style.transition = "0.6s"

    observer.observe(el)

})


// =============================
// EFEITO HOVER NOS PLANOS
// =============================

const planos = document.querySelectorAll(".plano-card")

planos.forEach(plano => {

    plano.addEventListener("mouseenter", () => {

        plano.style.transform = "scale(1.05)"

    })

    plano.addEventListener("mouseleave", () => {

        plano.style.transform = "scale(1)"

    })

})


// =============================
// BOTÃO VOLTAR AO TOPO
// =============================

const btnTopo = document.createElement("button")

btnTopo.innerText = "↑"
btnTopo.style.position = "fixed"
btnTopo.style.bottom = "20px"
btnTopo.style.right = "20px"
btnTopo.style.padding = "10px 15px"
btnTopo.style.fontSize = "20px"
btnTopo.style.border = "none"
btnTopo.style.borderRadius = "6px"
btnTopo.style.background = "#00d4ff"
btnTopo.style.color = "#0a0f1c"
btnTopo.style.cursor = "pointer"
btnTopo.style.display = "none"
btnTopo.style.zIndex = "999"

document.body.appendChild(btnTopo)

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        btnTopo.style.display = "block"

    } else {

        btnTopo.style.display = "none"

    }

})

btnTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

})


// =============================
// MENSAGEM DE BOAS-VINDAS
// =============================

window.addEventListener("load", () => {

    console.log("Bem-vindo ao site Prime Fitness 💪")

})