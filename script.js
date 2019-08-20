const purchaseLink = document.querySelector("#link");

purchaseLink.addEventListener("click",function(){
    const formHtml = `<section id="product-form">
    <input id="product" type="text" placeholder="Product" >
    <br>
    <input id="company" type="text" placeholder="Company" >
    <button id="save-btn">Save</button>
    </section>

    <section id ="product-output">
    </section>
`;
console.log(purchaseLink)
document.querySelector("#input-container").innerHTML = formHtml;
});

const containerSection = document.querySelector("#input-container");
containerSection.addEventListener("click",function(){
if (event.target.id ==="save-btn"){
    const productNameValue = document.querySelector("#product").value;
    const companyNameValue = document.querySelector("#company").value;

    const productHTMLString =`<section class="product-complete">
    <p>
   I can purchase ${productNameValue}, at ${companyNameValue}.
    </p>
    </section>`;

    const productOutputSection = document.querySelector("#product-output");
    productOutputSection.innerHTML+=productHTMLString;
    document.querySelector("#product").value="";
    document.querySelector("#company").value="";

}
})