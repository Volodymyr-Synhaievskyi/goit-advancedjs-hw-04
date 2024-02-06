import{a as g,s as h,i as c}from"./assets/vendor-c06089e9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const p="42188159-1454a2852e4ff5c9e0320bde0",y="https://pixabay.com/api/";function b({query:e,page:t=1,per_page:s=40}){const i=new URLSearchParams({q:e,page:t,per_page:s,key:p,image_type:"photo",orientation:"horizontal",safesearch:"true"});return g.get(`${y}?${i}`)}const n={searchForm:document.querySelector("#search-form"),gallery:document.querySelector("#gallery"),galleryEnd:document.querySelector("#gallery-end")},v=new h(".photo-card",{captionsData:"alt",sourceAttr:"data-image",captionDelay:250}),f=new IntersectionObserver((e,t)=>{e.forEach(s=>{s.isIntersecting&&w(t)})},{rootMargin:"250px"}),u=40;let l=1;n.searchForm.addEventListener("submit",L);async function L(e){e.preventDefault();try{q();const t=await d();t.totalHits!==0?c.success({title:"Success",position:"topRight",message:`Hooray! We found ${t.totalHits} images.`}):c.info({title:"Info",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again."}),t.totalHits>u?f.observe(n.galleryEnd):t.totalHits>=1&&c.info({title:"Info",position:"topRight",message:"You've reached the end of search results."})}catch(t){m(t)}}async function w(e){try{(await d(++l)).totalHits<=l*u&&(e.unobserve(n.galleryEnd),c.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(t){m(t)}}async function d(e=1){l=e;const t=P(e);E(t);const{data:s}=await b(t);return s.hits.length>0&&(S(s.hits),I()),s}function E(e){if(!e.query||e.query.length===0)throw new Error("Quey is empty. Please enter a search query")}function I(){v.refresh()}function S(e){n.gallery.insertAdjacentHTML("beforeend",e.map($).join(""))}function q(){n.gallery.innerHTML="",f.unobserve(n.galleryEnd)}function P(e=1){return{query:n.searchForm.elements.searchQuery.value.trim(),page:e,per_page:u}}function m(e){console.log(e),c.error({title:"Error",position:"topRight",message:e.message})}function $({webformatURL:e,largeImageURL:t,tags:s,likes:i,views:r,comments:o,downloads:a}){return`
    <div class="photo-card" data-image="${t}">
        <img class="photo-card-image" src="${e}" alt="${s}" loading="lazy" />
        <div class="info">
            <p class="info-item">
                <b>Likes</b><br>${i}
            </p>
                <p class="info-item">
            <b>Views</b><br>${r}
            </p>
            <p class="info-item">
                <b>Comments</b><br>${o}
            </p>
            <p class="info-item">
                <b>Downloads</b><br>${a}
            </p>
        </div>
    </div>`}
//# sourceMappingURL=commonHelpers.js.map
