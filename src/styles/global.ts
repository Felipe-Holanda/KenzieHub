import { createGlobalStyle } from "styled-components";

const greys = {
    grey0: "#F8F9FA",
    grey1: "#868E96",
    grey2: "#343B41",
    grey3: "#212529",
    grey4: "#121214"
}

const GlobalStyle = createGlobalStyle`
body{
    background-color: #121214;
}

#linkToRegister{
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    text-align: center;
    color: white;
    padding: 1em;
    border-radius: 0.5em;
    background-color: ${greys.grey1};
}

#linkToRegister:hover{
    cursor: pointer;
    background-color: ${greys.grey2};
}

#modal{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

#modal #modal-content{
    width: 80%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
}

#modal #modal-content #modal-header{
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #343B41;
    padding: .5em 1em;
    border-radius: 1em 1em 0 0;
}

#modal #modal-content #modal-header i{
    font-size: 1.5em;
}

#modal #modal-content #modal-body{
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #212529;
    padding: .5em 1em;
    border-radius: 0 0 1em 1em;
}

#modal #modal-content form{
    display: flex;
    flex-direction: column;
    width: 100%;
}

header{
    display: flex;
    flex-direction: row;
    padding: 1em 2em;
    align-items: center;
    justify-content: space-between;
}

.bx{
    cursor: pointer;
}

#addForm{
    display: flex;
    flex-direction: column;
}

#techs .heading{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#techs .heading i{
    color: ${greys.grey0};
    font-size: 2em;
}

#techs li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5em 1em;
    background-color: ${greys.grey4};
    margin: 1em .5em;
    border-radius: 1em;
}

#techs li:hover{
    background-color: ${greys.grey2};
    cursor: pointer;
}

header #headerBtn, header button{
    border: none;
    color: #fff;
    background-color: #212529;
    text-decoration: none;
    font-size: 15px;
    font-family: 'Inter', sans-serif;
    padding: .8em 2em;
    border-radius: .2em;
}

header #headerBtn:hover, header button:hover{
    background-color: #1e2328;
    cursor: pointer;
}

section div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.center{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

article{
    display: none;
    width: 40%;
    margin: 0 auto;
}

.container{
    padding: 1em 2em;
}

ul{
    background-color: #212529;
    list-style: none;
    padding: .5em;
    border-radius: .2em;
}

.footerInformation{
    display: flex;
    flex-direction: column;
    padding: .5em 2em;
}

#errorPage{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    color: #868e9663;
}

#errorPage i{
    font-size: 100px;
}

#errorPage a{
    margin-top: 1em;
}

#editModal{
    width: 95vw;
    max-width: 500px;
}

#bySide{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .5em 1em;
}

#bySide button{
    margin: 1em;
}

#techsContainer{
    border-radius: .2em;
    padding: .5em 1em;
    outline: .2px solid #868e9660;
}

li div{
    display: flex;
    justify-content: space-between;
}

form i{
    position: inherit;
    width: fit-content;
    display: inline-flex;
    color: #868E96;
    font-size: 25px;
    align-self: flex-end;
    margin-right: .5em;
    transform: translateY(-1.4em);
}

a[href]{
    color: white;
    text-decoration: none;
}

#loginPage{
    justify-content: center;
}

@media screen and (min-width: 768px) {
    #root{
        width: 50%;
        margin: 0 auto;
    }


    .center{
        flex-direction: row;
        justify-content: space-between;
        padding: 1em 0;
    }

}
`

export default GlobalStyle;