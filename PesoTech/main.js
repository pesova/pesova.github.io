function TextOpener(el) {
    var parent = el.parentNode;
    var articleText = parent.lastElementChild;

    if (el.className == 'open') {
        //shrink the box
        el.className = '';
        el.innerHTML = "show";
        articleText.className = '';


    } else {
        //expand the box
        el.className = 'open';
        el.innerHTML = "showless";
        articleText.className = 'open';
    }
}

// (el.className == 'open') {

// console.log(articleText);


/*
    var Text = document.querySelectorAll('#articleT');

    var lock = Text[2].firstElementChild.innerHTML;
    lock = 'showless'
    var john = 2;

    if (john == 3) {
        alert('common getout!!');
    } else {

        Array.from(Text).forEach(function(Text) {
            Text.addEventListener('click', function() {
                if (Text.className == 'open') {
                    //shrink the box
                    Text.className = '';


                } else {
                    //expand the box
                    Text.className = 'open';
                    lock = 'showless';
                }
            });
        });

    }


    //}

    function TextOpener(e) {
        var btn = document.querySelectorAll('button');
        var btn2 = Array.from(btn).forEach;
        btn2.onclick = function() {
            if (btn2.innerHTML == 'show') {
                btn2.innerHTML = 'showless'
            } else {
                btn2.innerHTML = 'show'
            }
        }
        console.log(btn2.toString('b'));
    }
    


    
    function Alert(e) {
        var button2 = document.querySelectorAll('button')
        if (e.target !== button2) {
            alert('its not button you clicked')
        } else {
            TextOpener;
        }
    }


    function TextOpener(e) {

        var Text = document.querySelectorAll('#articleT');

        for (var i = 0; i < Text.length; i++) {
            if (Text[i].className == 'open') {
                //shrink the box
                Text[i].className = '';
                //$(#btn).innerHTML = "showmore";

            } else {
                //expand the box
                Text[i].className = 'open';
                //$(#btn).innerHTML = "showless";
            }
        }

    }


    var AllArticle = document.querySelector('#main');

    function Alert(e) {
        if (e.target !== e.currentTarget) {
            var clickedItem = e.target.tagName;
            var child = clickedItem.childNode;
            var add = clickedItem + child;
            console.log(add)
        }
    }

    AllArticle.addEventListener("click", Alert);
        


    function TextOpener() {

        var Text = document.querySelectorAll('#articleT');
        var btn = document.querySelectorAll('#btn');

        Array.from(Text).forEach(function(Text) {
            Text.addEventListener('click', function() {
                if (Text.className == 'open') {
                    //shrink the box
                    Text.className = '';
                    btn.innerHTML = "showmore";

                } else {
                    //expand the box
                    Text.className = 'open';
                    btn.innerHTML = "showless";
                }

            });
        });

        console.log(btn)
    }



    var Text = document.querySelectorAll('#articleT');
    var btn = document.querySelectorAll('#btn');

    Array.from(Text).forEach(function(Text) {
        Text.addEventListener('click', function() {
            if (Text.className == 'open') {
                //shrink the box
                Text.className = '';
                btn.innerHTML = "showmore";

            } else {
                //expand the box
                Text.className = 'open';
                btn.innerHTML = "showless";
            }

        });
    });
    


    //var Text = document.querySelectorAll('#articleT');
    //var btn = document.querySelectorAll('#btn');

    //var Text = document.getElementById("articleT");

    var Text = document.querySelector('#articleT');
    var btn = document.querySelector('#btn');

    function TextOpener() {

        if (Text.className == 'open') {
            //shrink the box
            Text.className = '';
            btn.innerHTML = "showmore";


        } else {
            //expand the box
            Text.className = 'open';
            btn.innerHTML = "showless";
        }
    }



    btn.addEventListener('click', function() {
        if (btn.innerHTML == 'show') {
            Text.className = 'open';
            btn.innerHTML = 'showless';

        } else {
            btn.innerHTML = 'show';
            Text.className = '';
        }
    });


    //Array.from(btn).forEach(function(btn) {
    //  btn.addEventListener('click', TextOpener);

    //});


    function TextOpener() {

    var Text = document.getElementById("articleT");
    if (Text.className == "open") {
        //shrink the box
        Text.className = "";
    } else {
        //expand the box
        Text.className = "open";
    }
    }

    btn.onclick = TextOpener;


    btn.onclick = function() {
        Array.from(Text).forEach(function(Text) {
            Text.addEventListener('click', function() {

                if (Text.className == "open") {
                    //shrink the box
                    Text.className = "";
                    btn.innerHTML = "showmore";

                } else {
                    //expand the box
                    Text.className = "open";
                    btn.innerHTML = "showless";
                }
            });
        });
    };




    /*var Text = document.querySelectorAll('#articleT');
    var btn = document.querySelectorAll('#btn');

    Array.from(btn).forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (Text.className == 'open') {
                //shrink the box
                Text.className = '';
                btn.innerHTML = "showmore";

            } else {
                //expand the box
                Text.className = 'open';
                btn.innerHTML = "showless";
            }

        });
    });




    var Text = document.getElementById("articleT");
    var button = document.getElementById("btn");

    //var text = document.getElementById("articleT");



    button.onclick = function() {
        if (Text.className == "open") {
            //shrink the box
            Text.className = "";
            button.innerHTML = "showmore";

        } else {
            //expand the box
            Text.className = "open";
            button.innerHTML = "showless";
        }


    };

    var Text = document.querySelectorAll('#articleT');
    var Text3 = document.querySelectorAll('.open');
    var btn = document.querySelectorAll('#btn');

    Array.from(btn).forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (Text.className == 'open') {
                //shrink the box
                Text.className = '';
                btn.innerHTML = "showmore";

            } else {
                //expand the box
                Text.className = 'open';
                btn.innerHTML = "showless";
            }

        });
    });

    
    var Text = document.querySelectorAll('#articleT');
    var Text3 = document.querySelectorAll('.open');
    var btn = document.querySelectorAll('#btn');

    Array.from(btn).forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (Text == Text3) {
                //shrink the box
                Text3 = '';
                btn.innerHTML = "showmore";

            } else {
                //expand the box
                Text = Text3;
                btn.innerHTML = "showless";
            }*/