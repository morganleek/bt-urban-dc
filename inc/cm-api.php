<?php 
	function bones_theme_after_create_entry( $entry_id, $form_id ) {
		// Grab submitted data and forward to Campagin Monitor

		$key = "DBk5zvv7p6oGLsypQCiFNmaqG1hU6GX5JzhEagor3qfAUTsjK3goltPazN3T1txj71ROKSq8dkRfzVuHXLXK4riIWoRdb7v399cfaLL16c/EVkrbZo5L/rUUJx6xw5kRfyrzdCi5OhNzU/5flnJX9g==";
		$client_id = "af368c38f894d1defafdfd6f69e33522";

		if( $_POST['form_key'] == 'contact' ) { // Check it is the correct form
			$name = $_POST['item_meta'][6];
			$project = $_POST['item_meta'][7];
			$phone = $_POST['item_meta'][8];
			$email = $_POST['item_meta'][9];
			$comment = $_POST['item_meta'][10];

			if( $project != "" ) {

			}
		}
	}
	add_action('frm_after_create_entry', 'bones_theme_after_create_entry', 30, 2);

	// Update form dropdown with current options 

	// curl -u "DBk5zvv7p6oGLsypQCiFNmaqG1hU6GX5JzhEagor3qfAUTsjK3goltPazN3T1txj71ROKSq8dkRfzVuHXLXK4riIWoRdb7v399cfaLL16c/EVkrbZo5L/rUUJx6xw5kRfyrzdCi5OhNzU/5flnJX9g==:x" https://api.createsend.com/api/v3.3/clients.json?pretty=true
	// client id: af368c38f894d1defafdfd6f69e33522

	// curl -u "DBk5zvv7p6oGLsypQCiFNmaqG1hU6GX5JzhEagor3qfAUTsjK3goltPazN3T1txj71ROKSq8dkRfzVuHXLXK4riIWoRdb7v399cfaLL16c/EVkrbZo5L/rUUJx6xw5kRfyrzdCi5OhNzU/5flnJX9g==:x" 

	function bones_theme_cm_fetch_lists() {
		// Get Lists from CM
		// $key = "DBk5zvv7p6oGLsypQCiFNmaqG1hU6GX5JzhEagor3qfAUTsjK3goltPazN3T1txj71ROKSq8dkRfzVuHXLXK4riIWoRdb7v399cfaLL16c/EVkrbZo5L/rUUJx6xw5kRfyrzdCi5OhNzU/5flnJX9g==";
		// $client_id = "af368c38f894d1defafdfd6f69e33522";

		// $ch = curl_init();
		
		// curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
		// curl_setopt( $ch, CURLOPT_URL, 'https://api.createsend.com/api/v3.3/clients/' . $client_id . '/lists.json' );
		// curl_setopt( $ch, CURLOPT_USERPWD, $key . ":x" );
		// curl_setopt( $ch, CURLOPT_HEADER, 0 );

		// $result = curl_exec( $ch );
		// $result_decoded = json_decode( $result );
		
		wp_die();
	}

	add_action( 'wp_ajax_cm_fetch_lists', 'bones_theme_cm_fetch_lists' );
	add_action( 'wp_ajax_nopriv_cm_fetch_lists', 'bones_theme_cm_fetch_lists' );