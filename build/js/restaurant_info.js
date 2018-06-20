"use strict";var map,restaurant=void 0;window.initMap=function(){fetchRestaurantFromURL(function(e,t){e?console.error(e):(self.map=new google.maps.Map(document.getElementById("map"),{zoom:16,center:t.latlng,scrollwheel:!1}),fillBreadcrumb(),DBHelper.mapMarkerForRestaurant(self.restaurant,self.map))})};var fetchRestaurantFromURL=function(r){if(self.restaurant)r(null,self.restaurant);else{var e=getParameterByName("id");if(e)DBHelper.fetchRestaurantById(e,function(e,t){(self.restaurant=t)?(fillRestaurantHTML(),r(null,t)):console.error(e)});else{r("No restaurant id in URL",null)}}},fillRestaurantHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant;document.getElementById("restaurant-name").innerHTML=e.name,document.getElementById("restaurant-address").innerHTML=e.address;var t=document.getElementById("restaurant-img");t.className="restaurant-img";var r=document.createElement("source");r.srcset="/source/img/"+e.id+".webp",r.setAttribute("type","image/webp"),t.appendChild(r);var n=document.createElement("source");n.setAttribute("media","(min-width: 360px)"),n.srcset=DBHelper.imageUrlForRestaurant(e,"xsmall"),n.setAttribute("type","image/jpeg"),t.appendChild(n);var a=document.createElement("source");a.setAttribute("media","(min-width: 520px)"),a.srcset=DBHelper.imageUrlForRestaurant(e,"small"),a.setAttribute("type","image/jpeg"),t.appendChild(a);var i=document.createElement("source");i.setAttribute("media","(min-width: 800px)"),i.srcset=DBHelper.imageUrlForRestaurant(e,"medium"),i.setAttribute("type","image/jpeg"),t.appendChild(i);var l=document.createElement("source");l.setAttribute("media","(min-width: 1000px)"),l.srcset=DBHelper.imageUrlForRestaurant(e,"large"),l.setAttribute("type","image/jpeg"),t.appendChild(l);var m=document.createElement("source");m.setAttribute("media","(min-width: 1500px)"),m.srcset="/build/img/"+e.id+"-original.jpg",m.setAttribute("type","image/jpeg"),t.appendChild(m);var d=document.createElement("img");d.className="restaurant-img",d.src=DBHelper.imageUrlForRestaurant(e),d.alt="Image of "+e.name+" restaurant.",t.appendChild(d),document.getElementById("restaurant-cuisine").innerHTML=e.cuisine_type,e.operating_hours&&fillRestaurantHoursHTML(),fillReviewsHTML()},fillRestaurantHoursHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant.operating_hours,t=document.getElementById("restaurant-hours");for(var r in e){var n=document.createElement("tr"),a=document.createElement("td");a.innerHTML=r,n.appendChild(a);var i=document.createElement("td");i.innerHTML=e[r],n.appendChild(i),t.appendChild(n)}},fillReviewsHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant.reviews,t=document.getElementById("reviews-container"),r=document.createElement("h3");if(r.innerHTML="Reviews",t.appendChild(r),!e){var n=document.createElement("p");return n.innerHTML="No reviews yet!",void t.appendChild(n)}var a=document.getElementById("reviews-list");e.forEach(function(e){a.appendChild(createReviewHTML(e))}),t.appendChild(a)},createReviewHTML=function(e){var t=document.createElement("li"),r=document.createElement("p");r.innerHTML=e.name,t.appendChild(r);var n=document.createElement("p");n.innerHTML=e.date,t.appendChild(n);var a=document.createElement("p");a.innerHTML="Rating: "+e.rating,t.appendChild(a);var i=document.createElement("p");return i.innerHTML=e.comments,t.appendChild(i),t},fillBreadcrumb=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant,t=document.getElementById("breadcrumb"),r=document.createElement("li");r.innerHTML=e.name,t.appendChild(r)},getParameterByName=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null};
//# sourceMappingURL=restaurant_info.js.map
