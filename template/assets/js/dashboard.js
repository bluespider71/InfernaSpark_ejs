$( document ).ready(function() {
    /* nav bar link process */
    $("a.nav-link").click(function(e){
        e.preventDefault();        
        let href = $(this).attr('href');
        href = `/dashboard${href}`;
        console.log('href', href);
        
        // get the subpage //
        $.ajax({
            type: 'GET',
            url: href,
            success: function(result) {
                $('#wrapper').empty();
                $('#wrapper').append(result);
            }
        });

        // set the sub titles //         
        title = $(this).text();
        $('.iq-top-navbar > div > nav > div.navbar-breadcrumb > h4').text(title);

    });
    /* //- nav bar link process */

    /* show the main controller when loading */
    $('#dashboard > li:nth-child(1) > a.nav-link').click();
});