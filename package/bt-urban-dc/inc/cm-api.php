<?php

use Aws\Common\Enum\Size;

	function bones_theme_after_create_entry( $entry_id, $form_id ) {
		// Grab submitted data and forward to Campagin Monitor

		$key = "DBk5zvv7p6oGLsypQCiFNmaqG1hU6GX5JzhEagor3qfAUTsjK3goltPazN3T1txj71ROKSq8dkRfzVuHXLXK4riIWoRdb7v399cfaLL16c/EVkrbZo5L/rUUJx6xw5kRfyrzdCi5OhNzU/5flnJX9g==";

		// Live and test numbers differ
		$fid = array(
			'name' => 6, 
			'project' => 11, // 7 on local, // 11 on live
			'phone' => 8,
			'email' => 9,
			'comment' => 10
		);

		if( $_POST['form_key'] == 'contact' ) { // Check it is the correct form
			$name = $_POST['item_meta'][$fid['name']];
			$project = $_POST['item_meta'][$fid['project']];
			// $phone = $_POST['item_meta'][$fid['phone']];
			$email = $_POST['item_meta'][$fid['email']];
			// $comment = $_POST['item_meta'][$fid['comment']];

			// Split project ID and Name
			$project_split = explode( "::", $project );
			if( sizeof( $project_split ) > 1 ) {
				$project = $project_split[0];

				$url = "https://api.createsend.com/api/v3.3/subscribers/" . $project . ".json";
				
				$data = json_encode( 
					array(
						"EmailAddress" => $email,
						"Name" => $name,
						// "MobileNumber" => $phone,
						"Resubscribe" => true,
						"RestartSubscriptionBasedAutoresponders" => true,
						"ConsentToTrack" => "Unchanged"
					)
				);
				
				// POST data to CM
				$ch = curl_init();
				
				curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
				curl_setopt( $ch, CURLOPT_URL, $url );
				curl_setopt( $ch, CURLOPT_USERPWD, $key . ":x" );
				curl_setopt( $ch, CURLOPT_HEADER, 0 );
				curl_setopt( $ch, CURLOPT_POSTFIELDS, $data );

				$result = curl_exec( $ch );

				$result_decoded = json_decode( $result );
				// error_log( print_r( $result_decoded, true ) );
				if( isset( $result_decoded->Code ) ) {
					error_log( "Campaign Monitor List Error " . $result_decoded->Code . ": " . $result_decoded->Message );
				}
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