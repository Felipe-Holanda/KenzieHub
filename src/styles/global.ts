import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background-color: #121214;
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


header button{
    border: none;
    color: #fff;
    background-color: #212529;
    text-decoration: none;
    font-size: 15px;
    font-family: 'Inter', sans-serif;
    padding: .8em 2em;
    border-radius: .2em;
}

header button:hover{
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