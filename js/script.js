var menu_visible = false

function toggleMenu() {

    document.getElementById('link_list').classList.toggle('link_list_visible')

    document.getElementById('burger').classList.toggle('burger_x_form')

    if (menu_visible) {
        document.getElementById('nav').style.backgroundColor= "transparent";
        document.getElementById('grid_wrapper_start').style.display = "grid";
        menu_visible = false
    }
    else {
        document.getElementById('nav').style.backgroundColor= "rgb(" + 39 + ", " + 51 + ", " + 83 + ")";
        document.getElementById('grid_wrapper_start').style.display = "none";
        menu_visible = true
    }    
}

document.getElementById('burger').addEventListener('click', toggleMenu)



