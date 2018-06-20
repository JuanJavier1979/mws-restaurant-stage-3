"use strict";var map,restaurants=void 0,neighborhoods=void 0,cuisines=void 0,markers=[],fetchNeighborhoods=function(){DBHelper.fetchNeighborhoods(function(e,t){e?console.error(e):(self.neighborhoods=t,fillNeighborhoodsHTML())})},fillNeighborhoodsHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.neighborhoods,n=document.getElementById("neighborhoods-select");e.forEach(function(e){var t=document.createElement("option");t.innerHTML=e,t.value=e,n.append(t)})},fetchCuisines=function(){DBHelper.fetchCuisines(function(e,t){e?console.error(e):(self.cuisines=t,fillCuisinesHTML())})},fillCuisinesHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.cuisines,n=document.getElementById("cuisines-select");e.forEach(function(e){var t=document.createElement("option");t.innerHTML=e,t.value=e,n.append(t)})};document.addEventListener("DOMContentLoaded",function(e){fetchNeighborhoods(),fetchCuisines(),updateRestaurants()}),window.initMap=function(){self.map=new google.maps.Map(document.getElementById("map"),{zoom:12,center:{lat:40.722216,lng:-73.987501},scrollwheel:!1})};var updateRestaurants=function(){var e=document.getElementById("cuisines-select"),t=document.getElementById("neighborhoods-select"),n=e.selectedIndex,r=t.selectedIndex,a=e[n].value,s=t[r].value;DBHelper.fetchRestaurantByCuisineAndNeighborhood(a,s,function(e,t){e?console.error(e):(resetRestaurants(t),fillRestaurantsHTML())})},resetRestaurants=function(e){self.restaurants=[],document.getElementById("restaurants-list").innerHTML="",self.markers.forEach(function(e){return e.setMap(null)}),self.markers=[],self.restaurants=e},fillRestaurantsHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurants,t=document.getElementById("restaurants-list");e.forEach(function(e){t.append(createRestaurantHTML(e))}),addMarkersToMap()},createRestaurantHTML=function(e){var t=document.createElement("li"),n=document.createElement("picture");t.appendChild(n);var r=document.createElement("source");r.srcset="/source/img/"+e.id+".webp",r.setAttribute("type","image/webp"),n.appendChild(r);var a=document.createElement("source");a.setAttribute("media","(min-width: 360px)"),a.srcset=DBHelper.imageUrlForRestaurant(e,"xsmall"),a.setAttribute("type","image/jpeg"),n.appendChild(a);var s=document.createElement("source");s.setAttribute("media","(min-width: 520px)"),s.srcset=DBHelper.imageUrlForRestaurant(e,"small"),s.setAttribute("type","image/jpeg"),n.appendChild(s);var i=document.createElement("source");i.setAttribute("media","(min-width: 800px)"),i.srcset=DBHelper.imageUrlForRestaurant(e,"medium"),i.setAttribute("type","image/jpeg"),n.appendChild(i);var o=document.createElement("source");o.setAttribute("media","(min-width: 1000px)"),o.srcset=DBHelper.imageUrlForRestaurant(e,"large"),o.setAttribute("type","image/jpeg"),n.appendChild(o);var l=document.createElement("source");l.setAttribute("media","(min-width: 1500px)"),l.srcset="/build/img/"+e.id+"-original.jpg",l.setAttribute("type","image/jpeg"),n.appendChild(l);var u=document.createElement("img");u.className="restaurant-img",u.src=DBHelper.imageUrlForRestaurant(e),u.alt="Image of "+e.name+" restaurant.",n.appendChild(u);var d=document.createElement("h3");d.innerHTML=e.name,t.append(d);var c=document.createElement("p");c.innerHTML=e.neighborhood,t.append(c);var m=document.createElement("p");m.innerHTML=e.address,t.append(m);var p=document.createElement("a"),h="Read "+e.name+"'s restaurant details.";return p.innerHTML="View Details",p.tabIndex="0",p.href=DBHelper.urlForRestaurant(e),p.setAttribute("aria-label",h),t.append(p),t},addMarkersToMap=function(){(0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurants).forEach(function(e){var t=DBHelper.mapMarkerForRestaurant(e,self.map);google.maps.event.addListener(t,"click",function(){window.location.href=t.url}),self.markers.push(t)})};
//# sourceMappingURL=main.js.map
