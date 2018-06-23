"use strict";var map,restaurants=void 0,neighborhoods=void 0,cuisines=void 0,observer=void 0,markers=[],fetchNeighborhoods=function(){DBHelper.fetchNeighborhoods(function(e,t){e?console.error(e):(self.neighborhoods=t,fillNeighborhoodsHTML())})},fillNeighborhoodsHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.neighborhoods,r=document.getElementById("neighborhoods-select");e.forEach(function(e){var t=document.createElement("option");t.innerHTML=e,t.value=e,r.append(t)})},fetchCuisines=function(){DBHelper.fetchCuisines(function(e,t){e?console.error(e):(self.cuisines=t,fillCuisinesHTML())})},fillCuisinesHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.cuisines,r=document.getElementById("cuisines-select");e.forEach(function(e){var t=document.createElement("option");t.innerHTML=e,t.value=e,r.append(t)})};document.addEventListener("DOMContentLoaded",function(e){fetchNeighborhoods(),fetchCuisines(),updateRestaurants()}),window.initMap=function(){self.map=new google.maps.Map(document.getElementById("map"),{zoom:12,center:{lat:40.722216,lng:-73.987501},scrollwheel:!1})};var updateRestaurants=function(){var e=document.getElementById("cuisines-select"),t=document.getElementById("neighborhoods-select"),r=e.selectedIndex,n=t.selectedIndex,a=e[r].value,i=t[n].value;DBHelper.fetchRestaurantByCuisineAndNeighborhood(a,i,function(e,t){e?console.error(e):(resetRestaurants(t),fillRestaurantsHTML())})},resetRestaurants=function(e){self.restaurants=[],document.getElementById("restaurants-list").innerHTML="",self.markers.forEach(function(e){return e.setMap(null)}),self.markers=[],self.restaurants=e},fillRestaurantsHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurants,t=document.getElementById("restaurants-list");e.forEach(function(e){t.append(createRestaurantHTML(e))})};observer=new IntersectionObserver(function(e){var t=!0,r=!1,n=void 0;try{for(var a,i=e[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;if(!s.isIntersecting)return;var o=s.target.childNodes,u=!0,l=!1,d=void 0;try{for(var c,m=o[Symbol.iterator]();!(u=(c=m.next()).done);u=!0){var p=c.value;p.setAttribute("srcset",p.getAttribute("data-srcset")),"IMG"===p.tagName&&p.setAttribute("src",p.getAttribute("data-srcset"))}}catch(e){l=!0,d=e}finally{try{!u&&m.return&&m.return()}finally{if(l)throw d}}observer.unobserve(s.target)}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}});var createRestaurantHTML=function(e){var t=document.createElement("li"),r=document.createElement("picture");t.appendChild(r),observer.observe(r);var n=document.createElement("source");n.setAttribute("data-srcset","/source/img/"+e.id+".webp"),n.setAttribute("type","image/webp"),r.appendChild(n);var a=document.createElement("source");a.setAttribute("media","(min-width: 360px)"),a.setAttribute("data-srcset",DBHelper.imageUrlForRestaurant(e,"xsmall")),a.setAttribute("type","image/jpeg"),r.appendChild(a);var i=document.createElement("source");i.setAttribute("media","(min-width: 520px)"),i.setAttribute("data-srcset",DBHelper.imageUrlForRestaurant(e,"small")),i.setAttribute("type","image/jpeg"),r.appendChild(i);var s=document.createElement("source");s.setAttribute("media","(min-width: 800px)"),s.setAttribute("data-srcset",DBHelper.imageUrlForRestaurant(e,"medium")),s.setAttribute("type","image/jpeg"),r.appendChild(s);var o=document.createElement("source");o.setAttribute("media","(min-width: 1000px)"),o.setAttribute("data-srcset",DBHelper.imageUrlForRestaurant(e,"large")),o.setAttribute("type","image/jpeg"),r.appendChild(o);var u=document.createElement("source");u.setAttribute("media","(min-width: 1500px)"),u.setAttribute("data-srcset","/build/img/"+e.id+"-original.jpg"),u.setAttribute("type","image/jpeg"),r.appendChild(u);var l=document.createElement("img");l.className="restaurant-img",l.setAttribute("data-srcset","/build/img/"+e.id+"-original.jpg"),l.alt="Image of "+e.name+" restaurant.",r.appendChild(l);var d=document.createElement("h3");d.innerHTML=e.name,t.append(d);var c=document.createElement("p");c.innerHTML=e.neighborhood,t.append(c);var m=document.createElement("p");m.innerHTML=e.address,t.append(m);var p=document.createElement("a"),f="Read "+e.name+"'s restaurant details.";return p.innerHTML="View Details",p.tabIndex="0",p.href=DBHelper.urlForRestaurant(e),p.setAttribute("aria-label",f),t.append(p),t},addMarkersToMap=function(){(0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurants).forEach(function(e){var t=DBHelper.mapMarkerForRestaurant(e,self.map);google.maps.event.addListener(t,"click",function(){window.location.href=t.url}),self.markers.push(t)})};
//# sourceMappingURL=main.js.map
