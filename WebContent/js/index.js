function searchItems() {
	var keywords = $("#tf_searchProduct").val();
	console.log("Performing Search of " + keywords);

	$
			.getJSON(
					"http://localhost:8080/comp433Project2Estore/services/orderService/searchInventoryofProduct?keywords="
							+ keywords).done(function(data) {
				drawSearchResults(data);
			});

}
function drawSearchResults(data) {
	console.log(data);
	for ( var item in data) {
		var inventory = data[item];
		$("<div>").html(inventory.product.title + " " + inventory.price)
				.appendTo("#inventoryContainer");
	}
}