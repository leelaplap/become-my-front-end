(function() {

    // store the slider in a local variable
    var $window = $(window),
        flexslider = {
            vars: {}
        };

    // tiny helper function to add breakpoints
    function getGridSize() {
        return (window.innerWidth < 600) ? 2 :
            (window.innerWidth < 900) ? 2 : 2;
    }

    $(function() {
        SyntaxHighlighter.all();
    });

    $window.on("load", function() {
        $('.flexslider').flexslider({
            animation: "slide",
            animationSpeed: 400,
            animationLoop: false,
            itemWidth: 210,
            itemMargin: 35,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize(), // use function to pull in initial value
            start: function(slider) {
                $('body').removeClass('loading');
                flexslider = slider;
            }
        });
    });

    // check grid size on resize event
    $window.resize(function() {
        var gridSize = getGridSize();

        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
    });
}());



var questionAnswer = {
    1: {
        question: '#title-1',
        answer: '#content-1'
    },
    2: {
        question: '#title-2',
        answer: '#content-2'
    },
    3: {
        question: '#title-3',
        answer: '#content-3'
    },
    4: {
        question: '#title-4',
        answer: '#content-4'
    },
    5: {
        question: '#title-5',
        answer: '#content-5'
    },
    6: {
        question: '#title-6',
        answer: '#content-6'
    },

};

$(document).ready(function() {
    // $.each(questionAnswer, function() {
    $('#title-1').on("click", function() {
            $('#content-1').slideToggle();
        })
        // })

    $('#title-2').on("click", function() {
        $('#content-2').slideToggle();
    })
    $('#title-3').on("click", function() {
        $('#content-3').slideToggle();
    })
    $('#title-4').on("click", function() {
        $('#content-4').slideToggle();
    })
    $('#title-5').on("click", function() {
        $('#content-5').slideToggle();
    })
    $('#title-6').on("click", function() {
        $('#content-6').slideToggle();
    })

})