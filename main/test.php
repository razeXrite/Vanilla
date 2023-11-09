<?php
// require_once __DIR__ . './Frameworks/simple-xls/src/SimpleXLS.php'; 
require '../Frameworks\simle-xls\src\SimpleXLS.php';
 
if ( $xls = SimpleXLS::parseFile('./assets/smeta.xlsx') ) {
	print_r( $xls->rows() );
	// echo $xls->toHTML();	
} else {
	echo SimpleXLS::parseError();
}

?>