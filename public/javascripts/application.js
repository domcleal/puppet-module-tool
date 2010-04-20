$(document).ready(function() {
    watchingForm();
});
function watchingForm() {
    $('#watching form').ajaxForm({dataType: "script"}).find('a').click(function() {
        $(this).parents('form').trigger('submit');
        return false;
    });
    $('#watching .unwatch').click(function() {
        $.ajax({url: $(this).attr('href'),
                type: 'post',
                dataType: "script",
                data: {_method: 'delete'}
               });
        return false;
    });
}