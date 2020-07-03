<?php
phpinfo();
exit;

set_time_limit(300); 
use ParseCsv\Csv;

$start = microtime(true);
require_once "/home/admin/web/gonzoo.me/public_html/wp-includes/wp-db.php";
require_once "/home/admin/web/gonzoo.me/public_html/wp-config.php";
require_once 'vendor/autoload.php';


$stocks = [];
$i = 0;
$out = fopen("out.csv","w");
$stocks = new ParseCsv\Csv();
$stocks->auto('prodotti.csv');

$tempdata = $stocks->data;
$data = [];
$ttt = new Csv();
foreach ( $stocks->data as $stock){
    if (strpos($stock['SKU'],"_")===false && $stock['Stock']!="0" && $stock['Type']=="PRODUCT"){
        //echo "Выполняю обработку для sku=".$stock['SKU']."\n";
        $product_id = $wpdb->get_var( $wpdb->prepare( "SELECT post_id FROM $wpdb->postmeta WHERE meta_key='_sku' AND meta_value='%s'", $stock['SKU']));
        if ($wpdb->num_rows==0){
            foreach ($tempdata as $temp){
                if ($temp['ProductId']==$stock['SKU']) {
                    $data[] = $temp;
                }

            }
        }
    }
    $i++;
}
echo "Обработано $i SKU";
$ttt->titles = $stocks->titles;
$ttt->data = $data;
$ttt->enclose_all = true;
$ttt->save('out3.csv');
?>
