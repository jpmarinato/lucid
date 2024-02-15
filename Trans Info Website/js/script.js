function hideClass(classTarget) {
    let className = document.querySelectorAll(classTarget);

    className.forEach((el) => 
    { 
        console.log("c9:" + el);  
        el.classList.add('hide');
    });
};


// --------------CLICK OPEN CLOSE--------------

const dropdownBoxes = document.querySelectorAll(".js-open-next");

dropdownBoxes.forEach( function (current_box) {

    current_box.addEventListener("click", function(e) {
        // console.log(this.nextElementSibling);

        const old_display = this.nextElementSibling.style.display;

        
        document.querySelectorAll('.child').forEach((other_list_el) => {
            other_list_el.style.display = "none";
        });
        
        if(old_display !== "grid") {
            openChild(this.nextElementSibling); 
        }

    })

});
        
function openChild(child){
    // let child = document.getElementById(childID);
    // console.log(child.style.display)
    if(child.style.display !== 'grid') {
        child.style.display = 'grid';
    } else {
        child.style.display = 'none';
    } 

    // child.style.display = 'grid';
}

function iFrame(){
    document.getElementById("iframe").style.display = "grid";


}

function closeID(id) {
    document.getElementById(id).style.display = "none";

}


// -------------FIRST PAGE SUBMIT-------------

document.querySelector("#userStats").addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.querySelector("input[name='name']").value;

    const age = document.querySelector("input[name='age']:checked").value;

    const id = document.querySelector("input[name='identity']").value;

    const gender = document.querySelector("input[name='gender']:checked").value;

    // for(var i=0;i<document.getElementsByClassName("recipe-type-button").length){
    //     if(document.getElementsByClassName("recipe-type-button")[i].checked){
    //         recipe_entry = {
    //             type : document.getElementsByClassName("recipe-type-button")[i].value
    //         }
    //  }
    // }

    console.log(name);
    console.log(age);
    console.log(id);
    console.log(gender);

})

