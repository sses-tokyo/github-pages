$(function() {
    $('#image_map').rwdImageMaps();
    
    // 体の部位を選択
    $('area').on('click', function() {
        alert($(this).attr('alt'));
        return false;
    });
});
