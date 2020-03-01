$(function () {
//1
    $("#schedule").accordion();
//2
    var i = 0;
    $("#dragable").draggable()
    $("#droppable").droppable({
        drop: function (event, ui) {
            i++;
            $(this)
                .addClass('ui-state-highlight')
                .find('p')
                .html('Дякую що зайшов ' + i + ' раз')
            console.log(i);
        }
    });
});
