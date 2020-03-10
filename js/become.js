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

    function getGridSize2() {
        return (window.innerWidth < 600) ? 2 :
            (window.innerWidth < 900) ? 2 :
            (window.innerWidth > 900) ? 3 : 2;
    }

    $(function() {
        SyntaxHighlighter.all();
    });

    $window.on("load", function() {
        $('.slider .flexslider').flexslider({
            animation: "slide",
            animationSpeed: 400,
            animationLoop: true,
            itemWidth: 371,
            itemMargin: 35,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize(), // use function to pull in initial value
            start: function(slider) {
                $('body').removeClass('loading');
                flexslider = slider;
            }
        });
    });

    $window.on("load", function() {
        $('.slider2 .flexslider').flexslider({
            animation: "slide",
            animationSpeed: 400,
            animationLoop: true,
            itemWidth: 371,
            itemMargin: 15,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize(), // use function to pull in initial value
            start: function(slider) {
                $('body').removeClass('loading');
                flexslider = slider;
            }
        });
    });

    $window.on("load", function() {
        $('.slider3 .flexslider').flexslider({
            animation: "slide",
            animationSpeed: 400,
            animationLoop: true,
            itemWidth: 371,
            itemMargin: 5,
            minItems: getGridSize2(), // use function to pull in initial value
            maxItems: getGridSize2(), // use function to pull in initial value
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


        var gridSize2 = getGridSize2();

        flexslider.vars.minItems = gridSize2;
        flexslider.vars.maxItems = gridSize2;
    });
}());



var questionAnswer = {
    1: {
        question: '#title-1',
        answer: '#content-1',
        iconClosed: "#question-icon-closed1",
        iconOpened: "#question-icon-opened1",
    },
    2: {
        question: '#title-2',
        answer: '#content-2',
        iconClosed: "#question-icon-closed2",
        iconOpened: "#question-icon-opened2",
    },
    3: {
        question: '#title-3',
        answer: '#content-3',
        iconClosed: "#question-icon-closed3",
        iconOpened: "#question-icon-opened3",
    },
    4: {
        question: '#title-4',
        answer: '#content-4',
        iconClosed: "#question-icon-closed4",
        iconOpened: "#question-icon-opened4",
    },
    5: {
        question: '#title-5',
        answer: '#content-5',
        iconClosed: "#question-icon-closed5",
        iconOpened: "#question-icon-opened5",
    },
    6: {
        question: '#title-6',
        answer: '#content-6',
        iconClosed: "#question-icon-closed6",
        iconOpened: "#question-icon-opened6",
    },
    7: {
        question: '#title-7',
        answer: '#content-7',
        iconClosed: "#question-icon-closed7",
        iconOpened: "#question-icon-opened7",
    },
    8: {
        question: '#title-8',
        answer: '#content-8',
        iconClosed: "#question-icon-closed8",
        iconOpened: "#question-icon-opened8",
    },
    9: {
        question: '#title-9',
        answer: '#content-9',
        iconClosed: "#question-icon-closed9",
        iconOpened: "#question-icon-opened9",
    },
    10: {
        question: '#title-10',
        answer: '#content-10',
        iconClosed: "#question-icon-closed10",
        iconOpened: "#question-icon-opened10",
    },

};

$(document).ready(function() {
    $.each(questionAnswer, function(index, value) {
        $(questionAnswer[index].question).on("click", function() {
            if (!$(questionAnswer[index].answer).is(':visible')) {
                $(questionAnswer[index].iconClosed).hide();
                $(questionAnswer[index].iconOpened).show();
            } else {
                $(questionAnswer[index].iconClosed).show();
                $(questionAnswer[index].iconOpened).hide();
            }
            $(questionAnswer[index].answer).slideToggle();
        })
    })

})