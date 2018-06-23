// button click listeners
// put listeners inside function to make sure DOM is fully loaded.
$(function(){
    //on click of the yum button, it will change state of devoured boolean.
    $('.change-dev').on('click', function(event){

        //data from partial burger button fields
        var id = $(this).data('id');
        var newDev = $(this).data('newdev');
        // create new data object to send in put request.
        var newDevState = {
            devoured: newDev
        };

        // Send the PUT request with id of burger to change boolean.
        $.ajax("/api/burgers/" + id, {
            type: 'PUT',
            data: newDevState
        }).then(
            function() {
                //must reload the page to get the updated list.
                location.reload();
            }
        );
    });

    // on click of submit button it will post new burger
    $('.create-form').on('submit', function(event){
        event.preventDefault();

        //new burger object data
        var newBurger = {
            // from text input in new burger form
            burger_name: $('#burg').val().trim(),
            //set to false since its newBurger and not devoured yet
            devoured: 0
        };

        // Send the post request with newBurger data
        $.ajax('api/burgers/',{
            type: 'POST',
            data: newBurger
        }).then(
            function(){
                //must reload the page to get the updated list.
                location.reload();
            }
        )
    });
});