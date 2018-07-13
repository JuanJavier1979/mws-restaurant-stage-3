"use strict";var map,restaurant=void 0;window.initMap=function(){self.map=new google.maps.Map(document.getElementById("map"),{zoom:16,center:restaurant.latlng,scrollwheel:!1}),DBHelper.mapMarkerForRestaurant(self.restaurant,self.map)};var fetchRestaurantFromURL=function(){return new Promise(function(n,r){if(self.restaurant)return n(self.restaurant);var e=getParameterByName("id");if(!e){return r("No restaurant id in URL")}DBHelper.fetchRestaurantById(e,function(e,t){if(!(self.restaurant=t))return r(e);fillRestaurantHTML(),DBHelper.fetchReviewByRestaurant(t.id).then(function(e){return fillReviewsHTML(e),n(self.restaurant)}).catch(function(e){return r(e)})})})},fillRestaurantHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant;document.getElementById("restaurant-name").innerHTML=e.name,document.getElementById("restaurant-address").innerHTML=e.address;var t=document.getElementById("restaurant-img");t.className="restaurant-img";var n=document.createElement("source");n.srcset="/source/img/"+e.id+".webp",n.setAttribute("type","image/webp"),t.appendChild(n);var r=document.createElement("source");r.setAttribute("media","(min-width: 360px)"),r.srcset=DBHelper.imageUrlForRestaurant(e,"xsmall"),r.setAttribute("type","image/jpeg"),t.appendChild(r);var a=document.createElement("source");a.setAttribute("media","(min-width: 520px)"),a.srcset=DBHelper.imageUrlForRestaurant(e,"small"),a.setAttribute("type","image/jpeg"),t.appendChild(a);var i=document.createElement("source");i.setAttribute("media","(min-width: 800px)"),i.srcset=DBHelper.imageUrlForRestaurant(e,"medium"),i.setAttribute("type","image/jpeg"),t.appendChild(i);var l=document.createElement("source");l.setAttribute("media","(min-width: 1000px)"),l.srcset=DBHelper.imageUrlForRestaurant(e,"large"),l.setAttribute("type","image/jpeg"),t.appendChild(l);var u=document.createElement("source");u.setAttribute("media","(min-width: 1500px)"),u.srcset="/build/img/"+e.id+"-original.jpg",u.setAttribute("type","image/jpeg"),t.appendChild(u);var m=document.createElement("img");m.className="restaurant-img",m.src=DBHelper.imageUrlForRestaurant(e),m.alt="Image of "+e.name+" restaurant.",t.appendChild(m),document.getElementById("restaurant-cuisine").innerHTML=e.cuisine_type,e.operating_hours&&fillRestaurantHoursHTML()},fillRestaurantHoursHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant.operating_hours,t=document.getElementById("restaurant-hours");for(var n in e){var r=document.createElement("tr"),a=document.createElement("td");a.innerHTML=n,r.appendChild(a);var i=document.createElement("td");i.innerHTML=e[n],r.appendChild(i),t.appendChild(r)}},fillReviewsHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant.reviews,t=document.getElementById("reviews-container"),n=document.createElement("h3");if(n.innerHTML="Reviews",t.appendChild(n),!e){var r=document.createElement("p");return r.innerHTML="No reviews yet!",void t.appendChild(r)}var a=document.getElementById("reviews-list");e.forEach(function(e){a.appendChild(createReviewHTML(e))}),t.appendChild(a)},createReviewHTML=function(e){var t=document.createElement("li"),n=document.createElement("p");n.innerHTML=e.name,t.appendChild(n);var r=document.createElement("p");r.innerHTML=new Date(e.updatedAt).toLocaleDateString(),t.appendChild(r);var a=document.createElement("p");a.innerHTML="Rating: "+e.rating,t.appendChild(a);var i=document.createElement("p");return i.innerHTML=e.comments,t.appendChild(i),t},fillBreadcrumb=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant,t=document.getElementById("breadcrumb"),n=document.createElement("li");n.innerHTML=e.name,t.appendChild(n)},getParameterByName=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},submitReview=function(){for(var e={},t=document.getElementById("post-review-form"),n=0;n<t.length;++n){var r=t[n].name,a=t[n].value;""!==r&&""!==a&&("restaurant_id"!==r&&"rating"!==r||(a=parseInt(a)),e[t[n].name]=a)}console.log("submitReview()"),console.log(e),t.reset(),DBHelper.sendReview(e)};console.log("Init!!!"),fetchRestaurantFromURL().then(function(e){fillBreadcrumb(),document.getElementById("post-review-form").addEventListener("submit",function(e){e.preventDefault(),console.log("form.submit"),submitReview()})}).catch(function(e){console.error("Init Error: ",e)});
//# sourceMappingURL=restaurant_info.js.map
