jQuery(document).ready(function() {
    jQuery('#campaign_d1').DataTable( {
    	"searching": false,
    	"paging":   false,
        "info":     false,
        "responsive": true,
        "order": [[ 3, "desc" ]]

    } );
} );