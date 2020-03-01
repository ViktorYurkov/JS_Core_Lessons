// comit1
//comit2
$(function () {
    $(document).tooltip();

    $('#dateOfbirth').datepicker({
        dateFormat: 'dd-mm-yy'
    });

    $('#age').spinner({
        numberFormat: 'n',
        min: 1,
        max: 111,
        //        stop: function (event, ui) {
        //            if ($('#age').spinner('value') == null) {
        //                runCustomEffect("shake");
        //            };
        //        }
    });


    $('#sendDataUser').on('click', function () {

        if ($('#name').val() == '') {
            $('#name').attr('placeholder', 'ввеіть імя');
            runCustomEffect("shake");
        } else if ($('#age').spinner('value') == null) {
            $('#age').val(null);
            $('#age').attr('placeholder', 'введіть вік ');
            runCustomEffect("shake");
        } else if ($('#dateOfbirth').val() == '') {
            $('#dateOfbirth').attr('placeholder', 'введіть дату');
            runCustomEffect("shake");
        } else {
            runCustomEffect("blind");
            console.log($('#dateOfbirth').val());
        };
        return false;
    })
});



function runCustomEffect(effectValue) {
    var options = {};
    $('#userForm').effect(effectValue, options, 500, function () {
        setTimeout(function () {
            $('#userForm').removeAttr('style').hide().fadeIn();
        }, 1000);
    });
}
