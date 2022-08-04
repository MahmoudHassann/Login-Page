let inpName = document.getElementById("inp_name")
let inpMail = document.getElementById("inp_mail")
let inpPass = document.getElementById("inp_pass")
let logMail = document.getElementById("log_inp")
let logPass = document.getElementById("log_pass")


let usersid
if (localStorage.getItem("id") == null) {
    usersid = [];
}
else {
    usersid = JSON.parse(localStorage.getItem("id"));
}

function register() {
    document.getElementById("name-alert").style.display = "none"
    document.getElementById("mail-alert").style.display = "none"
    nameValue = inpName.value;
    mailValue = inpMail.value;
    passValue = inpPass.value;
    let product = {
        name: nameValue,
        mail: mailValue,
        pass: passValue
    }
    if (valid()) {
        usersid.push(product)
        localStorage.setItem("id", JSON.stringify(usersid));
         window.open('login.html', '_parent') 
    }

}


function valid() {
    let regexName = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let bool = false
    if (!regexName.test(inpName.value)) {
        document.getElementById("name-alert").style.display = "block"
        inpName.value = ""
        inpPass.value = ""
        return bool = false
    }
    else if (!regexMail.test(inpMail.value)) {
        document.getElementById("mail-alert").style.display = "block"
        inpMail.value = ""
        inpPass.value = ""
        return bool = false

    }
    else {
        let counter = 0
        for (let i = 0; i < usersid.length; i++) {
            if (inpMail.value == usersid[i].mail) {
                inpName.value = ""
                inpMail.value = ""
                inpPass.value = ""
                return bool = false
            }
            else {
                counter++
                
            }
        }
        if (counter == usersid.length) {
            return bool = true
        }
        else {
            inpName.value = ""
            inpMail.value = ""
            inpPass.value = ""
            return bool = false
        }

    }


}
function ref() {
    window.open('login.html', '_parent')
}

let userName = []
function login() {
    for (let i = 0; i < usersid.length; i++) {
        if (logMail.value == usersid[i].mail && logPass.value == usersid[i].pass) {
            localStorage.setItem("log", JSON.stringify(usersid[i]))
            window.open('home.html', '_parent')
        }
    }
    logMail.value = ""
    logPass.value = ""

}
userName = JSON.parse(localStorage.getItem("log"))
document.getElementById("body").addEventListener("load", Myfunction(userName.name))

function Myfunction(x) {
    document.getElementById("Welcome_msg").innerHTML = `Welcome To The LeagueOfLegends ${x}`
}


