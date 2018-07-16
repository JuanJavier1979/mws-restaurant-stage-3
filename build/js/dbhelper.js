"use strict";var _createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var DBHelper=function(){function i(){_classCallCheck(this,i)}return _createClass(i,null,[{key:"checkStatus",value:function(e){return 200===e.status?Promise.resolve(e):Promise.reject(new Error("Request has failed. Return status: "+e.statusText))}},{key:"json",value:function(e){return e.json()}},{key:"openDB",value:function(){return idb.open("restaurantsDB",3,function(e){switch(e.oldVersion){case 0:console.log("Creating IDB"),e.createObjectStore("restaurants",{keyPath:"id"}).createIndex("by-id","id");case 1:console.log("Upgrading to DB v2"),e.createObjectStore("reviews",{keyPath:"id"}).createIndex("restaurant","restaurant_id");e.createObjectStore("offline_reviews",{keyPath:"updatedAt"});case 2:console.log("Upgrading to DB v3"),e.createObjectStore("offline_favourites",{keyPath:"restaurant_id"}).createIndex("by-restaurant","restaurant_id")}})}},{key:"getRestaurantsFromDB",value:function(){return i.openDB().then(function(e){if(e)return e.transaction("restaurants").objectStore("restaurants").getAll()})}},{key:"getRestaurantsFromAPI",value:function(){return fetch(i.DATABASE_URL).then(i.checkStatus).then(i.json).then(function(e){return i.saveRestaurants(e),e})}},{key:"saveRestaurants",value:function(r){return i.openDB().then(function(e){if(e){var t=e.transaction("restaurants","readwrite"),n=t.objectStore("restaurants");return r.forEach(function(e){n.put(e)}),t.complete}}).then(function(){console.log("Restaurants Saved")})}},{key:"updateRestaurant",value:function(t){return i.openDB().then(function(e){if(e)return e.transaction("restaurants","readwrite").objectStore("restaurants").put(t)}).then(function(){console.log("Restaurant Updated")})}},{key:"fetchRestaurants",value:function(t){return i.getRestaurantsFromDB().then(function(e){return e.length?Promise.resolve(e):i.getRestaurantsFromAPI()}).then(function(e){t(null,e)}).catch(function(e){t(e,null)})}},{key:"fetchRestaurantById",value:function(r,a){i.fetchRestaurants(function(e,t){if(e)a(e,null);else{var n=t.find(function(e){return e.id==r});n?a(null,n):a("Restaurant does not exist",null)}})}},{key:"fetchRestaurantByCuisine",value:function(r,a){i.fetchRestaurants(function(e,t){if(e)a(e,null);else{var n=t.filter(function(e){return e.cuisine_type==r});a(null,n)}})}},{key:"fetchRestaurantByNeighborhood",value:function(r,a){i.fetchRestaurants(function(e,t){if(e)a(e,null);else{var n=t.filter(function(e){return e.neighborhood==r});a(null,n)}})}},{key:"fetchRestaurantByCuisineAndNeighborhood",value:function(r,a,o){i.fetchRestaurants(function(e,t){if(e)o(e,null);else{var n=t;"all"!=r&&(n=n.filter(function(e){return e.cuisine_type==r})),"all"!=a&&(n=n.filter(function(e){return e.neighborhood==a})),o(null,n)}})}},{key:"fetchNeighborhoods",value:function(a){i.fetchRestaurants(function(e,n){if(e)a(e,null);else{var r=n.map(function(e,t){return n[t].neighborhood}),t=r.filter(function(e,t){return r.indexOf(e)==t});a(null,t)}}),i.fetchReviews(function(e,t){e&&a(e,null)})}},{key:"fetchCuisines",value:function(a){i.fetchRestaurants(function(e,n){if(e)a(e,null);else{var r=n.map(function(e,t){return n[t].cuisine_type}),t=r.filter(function(e,t){return r.indexOf(e)==t});a(null,t)}})}},{key:"urlForRestaurant",value:function(e){return"./restaurant.html?id="+e.id}},{key:"imageUrlForRestaurant",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return null!==t?"/build/img/"+e.id+"-"+t+".jpg":"/build/img/"+e.id+"-original.jpg"}},{key:"imageSrcSetForRestaurant",value:function(e){return i.imageUrlForRestaurant(e,"xsmall")+" 360w, "+i.imageUrlForRestaurant(e,"small")+" 520w, "+i.imageUrlForRestaurant(e,"medium")+" 800w, "+i.imageUrlForRestaurant(e,"large")+" 1000w, "+i.imageUrlForRestaurant(e)+" 1500w"}},{key:"mapMarkerForRestaurant",value:function(e,t){return new google.maps.Marker({position:e.latlng,title:e.name,url:i.urlForRestaurant(e),map:t,animation:google.maps.Animation.DROP})}},{key:"getReviewsFromDB",value:function(){return i.openDB().then(function(e){if(e){e.transaction("reviews").objectStore("reviews").index("restaurant");return""}})}},{key:"getReviewsFromAPI",value:function(){return fetch(i.REVIEWS_URL).then(i.checkStatus).then(i.json).then(function(e){return i.saveReviews(e),e})}},{key:"checkOfflineReviews",value:function(){return new Promise(function(t,n){i.openDB().then(function(e){e&&e.transaction("offline_reviews").objectStore("offline_reviews").getAll().then(function(e){return t(e)}).catch(function(e){n(e)})})})}},{key:"saveReviews",value:function(r){return i.openDB().then(function(e){if(e){var t=e.transaction("reviews","readwrite"),n=t.objectStore("reviews");return r.forEach(function(e){n.put(e)}),t.complete}}).then(function(){console.log("Reviews saved")})}},{key:"saveReview",value:function(n){return i.openDB().then(function(e){if(e){var t=e.transaction("reviews","readwrite");return t.objectStore("reviews").put(n),t.complete}}).then(function(){console.log("Review saved");var e=new CustomEvent("update_reviews_list",{detail:{restaurant_id:n.restaurant_id}});document.dispatchEvent(e)})}},{key:"saveReviewOffline",value:function(n){return i.openDB().then(function(e){if(e){var t=e.transaction("offline_reviews","readwrite");return t.objectStore("offline_reviews").put(n),t.complete}}).then(function(){console.log("Review saved offline")})}},{key:"sendReview",value:function(t){return fetch(i.REVIEWS_URL,{body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"}).then(function(e){e.json().then(function(e){e.restaurant_id=parseInt(getParameterByName("id")),e.updatedAt=(new Date).getTime(),e.createdAt=(new Date).getTime(),i.saveReview(e)})}).catch(function(e){t.restaurant_id=parseInt(getParameterByName("id")),t.updatedAt=(new Date).getTime(),t.createdAt=(new Date).getTime(),i.saveReviewOffline(t)})}},{key:"removeOfflineReview",value:function(e){return new Promise(function(e,t){i.openDB().then(function(e){if(e){var t=e.transaction("offline_reviews","readwrite"),n=[];t.objectStore("offline_reviews").iterateCursor(function(e){e&&(i.sendReview(e.value),n.push(e.value),e.delete(),e.continue())}).then(function(){console.log("Item deleted")}).then(function(){return t.complete})}})})}},{key:"fetchReviews",value:function(t){return i.getReviewsFromDB().then(function(e){return e.length?Promise.resolve(e):i.getReviewsFromAPI()}).then(function(e){t(null,e)}).catch(function(e){t(e,null)})}},{key:"fetchReviewByRestaurant",value:function(t,e){return i.openDB().then(function(e){return e.transaction("reviews").objectStore("reviews").index("restaurant").getAll(t)}).then(function(e){return e})}},{key:"saveFavouriteOffline",value:function(e,t){var n=[];return n.restaurant_id=parseInt(e),n.is_favorite=t,i.openDB().then(function(e){if(e){var t=e.transaction("offline_favourites","readwrite");return t.objectStore("offline_favourites").put(n),t.complete}}).then(function(){console.log("Favourite saved offline")})}},{key:"sendFavourite",value:function(t,n){return fetch(i.DATABASE_URL+"/"+t+"/?is_favorite="+n,{method:"PUT"}).then(function(e){e.json().then(function(e){i.updateRestaurant(e)})}).catch(function(e){i.saveFavouriteOffline(t,n)})}},{key:"checkOfflineFavourites",value:function(){return new Promise(function(t,n){i.openDB().then(function(e){e&&e.transaction("offline_favourites").objectStore("offline_favourites").getAll().then(function(e){return t(e)}).catch(function(e){n(e)})})})}},{key:"removeOfflineFavourite",value:function(e){return new Promise(function(e,t){i.openDB().then(function(e){if(e){var t=e.transaction("offline_favourites","readwrite"),n=[];t.objectStore("offline_favourites").iterateCursor(function(e){e&&(i.sendFavourite(e.value.restaurant_id,e.value.is_favorite),n.push(e.value),e.delete(),e.continue())}).then(function(){console.log("Favourite deleted")}).then(function(){return t.complete})}})})}},{key:"DATABASE_URL",get:function(){return"http://localhost:1337/restaurants"}},{key:"REVIEWS_URL",get:function(){return"http://localhost:1337/reviews"}}]),i}();
//# sourceMappingURL=dbhelper.js.map
