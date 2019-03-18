//Funkcja obsługująca główny przycisk
const on = document.querySelector(".dol");
const turnOnOff = () => {
    const img = document.querySelector(".wyswietlacz");
    
    img.classList.toggle("active");
    
}
on.addEventListener("click", turnOnOff);


//Funkacja odpowiadająca za wywołanie czasu


const clock = () => {
    

    const time = new Date();
    const h2 = document.querySelector(".wyswietlacz h2");
    const spanDate = document.querySelector(".wyswietlacz span")
    const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    const day = time.getDate()  < 10 ? "0" + time.getDate() : time.getDate();
    const month = time.getMonth()+1;
    const year = time.getFullYear();

    h2.textContent = `${hours}:${minutes}`;

    spanDate.textContent = `${day}.${month}.${year}`;

}
setInterval(clock, 1000);


