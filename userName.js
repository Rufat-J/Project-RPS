/* const form = document.getElementById("form");
const uuserName = document.getElementById("uuserName");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const uuserNameValue = uuserName.value;

    localStorage.setItem("user-Name", uuserNameValue);

    window.location.href = "play.html";
});


const femaleAvatar= document.querySelector('#Female-checked')

femaleAvatar.addEventListener('change', function() {
    if(femaleAvatar.checked) {
        console.log('Female')
        localStorage.setItem('Female-checked', femaleAvatar.text)
        console.log(localStorage)
    }
})

const maleAvatar = document.querySelector('#Male-checked')
const male = document.querySelector('.male-avatar')

maleAvatar.addEventListener('change', function(){
    if(maleAvatar.checked) {
        console.log('Male')
        localStorage.setItem('Male-checked', maleAvatar.text)
        console.log(localStorage)
        male.style.display = 'block'
        window.location.href ="play.html"
    }
})
 */
