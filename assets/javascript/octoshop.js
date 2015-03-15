(function() {

    console.log("Initialising Octoshop... Hello!");

    $('.product-toolbar .btn').bind('click', function() {
        var style = $(this).data('style');

        console.log("Setting product style to "+style);

        $('.product-layout').hide();
        $('.product-layout.product-layout-'+style).show();
    });
    $('.product-toolbar .btn[data-style="thumb"]').click();

})();
