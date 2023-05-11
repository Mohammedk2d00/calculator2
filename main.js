(function(){
    const screen = document.querySelector('.screen');
    const button = document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn-clear');
    const equal = document.querySelector('.btn-eaqul');


    button.forEach(function(button) {
        button.addEventListener('click', function(e){
            const value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e) {
            if (screen.value === '') {
                screen.value = "Please Enter";
            } else {
                let answer = eval(screen.value);
                screen.value = answer;
            }
        });

    clear.addEventListener('click', function(e) {
                screen.value = "";
        });
    

    
})();
