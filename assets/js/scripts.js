//DARK MODE
const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark");

if(toggle){
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
        } else {
            window.localStorage.setItem("theme", "dark"); 
        }
    });
}

//TAMANHO DA FONTE
$(document).ready(function(){
    $("#click-tamanho-fonte").click(function(){
    $("#tamanho-fonte").toggle();
    });

    $("#fechar-tamanho-fonte").click(function(){
    $("#tamanho-fonte").hide();
    });
});

//MENU PESQUISA
$(document).ready(function(){
    $("#click-menu-pesquisa").click(function(){
    $("#menu-pesquisa").toggle();
    });

    $("#fechar-menu-pesquisa").click(function(){
    $("#menu-pesquisa").hide();
    });
});

//MENU HAMBURGUER
$(document).ready(function(){
    $("#click-menu-hamburguer").click(function(){
    $("#menu-hamburguer").toggle();
    });

    $("#fechar-menu-hamburguer").click(function(){
    $("#menu-hamburguer").hide();
    });
});

///FILTRO
$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});