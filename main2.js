'use strict;'
$(document).ready(function() {
    const form = $('#form');
    const errortAlert = $('#error');
    $('.send_btn').on('click', function( event ) {
        errortAlert.hide();
        event.preventDefault();
        if ( form.find( 'input[name="name"]' ).val() == '' ) {
            errortAlert.text('Enter your name').show();
            return false;
        }
    });
});

