webpackJsonp([1],[function(o,e,n){o.exports=n(1)},function(o,e,n){var t=function(){var o=document.getElementById("dialog"),e=document.getElementById("dialog-toggle"),n=document.getElementById("dialog-close");e.addEventListener("click",function(){return o.showModal()}),n.addEventListener("click",function(){return o.close()})};void 0===window.HTMLDialogElement?(console.log("No native dialog support! Loading polyfill…"),n.e(0).then(n.bind(null,2)).then(function(o){Array.from(document.getElementsByTagName("dialog")).forEach(function(e){o.registerDialog(e)}),console.log("dialog polyfill loaded!"),t()})):t()}],[0]);
//# sourceMappingURL=client.c18f9897.js.map