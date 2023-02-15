let p_el = document.getElementById("point-h");
let p_ell = document.getElementById("point-g");


let count_1 = 0;
let count_2 = 0;

function one_h(){
    count_1 += 1;
    p_el.innerHTML = count_1;
}

function one_g(){
    count_2 += 1;
    p_ell.innerHTML = count_2;
}

function two_h(){
    count_1 += 2;
    p_el.innerHTML = count_1;
}

function two_g(){
    count_2 += 2;
    p_ell.innerHTML = count_2;
}

function three_h(){
    count_1 += 3;
    p_el.innerHTML = count_1;
}

function three_g(){
    count_2 += 3;
    p_ell.innerHTML = count_2;
}