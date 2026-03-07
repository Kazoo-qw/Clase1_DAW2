function click() {
    let elemento = document.getElementById("numero")
    let texto = elemento.innerText
    let numero = Number(texto)
    numero++
    elemento.innerHTML = numero
    console.log(numero)
}

const clickMenos = () => {
    let elemento = document.getElementById("numero")
    let texto = elemento.innerText
    let numero = Number(texto)
    numero--
    elemento.innerHTML = numero
}

document.getElementById("boton").addEventListener('click', click)
document.getElementById("boton2").addEventListener('click', clickMenos)

const sumar = (event) => {
    event.preventDefault()
    let elemento_uno = document.getElementById("numero_uno")
    let elemento_dos = document.getElementById("numero_dos")

    let numero_uno = Number(elemento_uno.value)
    let numero_dos = Number(elemento_dos.value)

    const suma = numero_uno + numero_dos
    let res = document.getElementById("res")
    if (suma > 0){
        res.classList.add("positivo")
        res.classList.remove("negativo")
    }else if(suma < 0){
        res.classList.add("negativo")
        res.classList.remove("positivo")
    }else{
        res.classList.remove("positivo")
        res.classList.remove("negativo")
    }

    res.innerHTML = suma
}
document.getElementById("formulario").addEventListener('submit', sumar)

var persona = []
const saverPerson = (e) => {
    e.preventDefault()
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = Number(document.getElementById("edad").value)

    if(edad < 0){
        return document.getElementById("edad-error").innerHTML = "la edad no puede ser negativa"
    }
    document.getElementById("edad-error").innerHTML = ""
    personalbar.push(
        { nombre, apellido , edad }
    )
    let tbody = document.getElementById("tbody-result")
    let a = ''
    personalbar.forEach((dato) =>{
        a += `
            <tr>
                <td>${dato.nombre}</td>
                <td>${dato.apellido}</td>
                <td>${dato.edad}</td>
            </tr>
        `
    })
    tbody.innerHTML = a
    document.getElementById("nombre").value = ''
    document.getElementById("apellido").value = ''
    document.getElementById("edad").value = ''

}

document.getElementById("for-person").addEventListener("submit", saverPerson)