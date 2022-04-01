function popop(){
    return `
    <div id="cart-popop">
    <div id="popopdiv1">
        Free shipping | COD available on orders above ₹3000
    </div>
    <div id="popopdiv2">
        <i id="close" class="fa-solid fa-angle-left"></i>
        <h3 id="popopdiv2-h3">YOUR CART</h3>
        <h3 id="popopdiv2-h3-2">(1 items)</h3>
       
    </div>

    <div id="cart-boxes">
       
    
         
         <!-- 2nd -->
     
        
         
         </div>

          <!-- payment -->
          <div id="payment">
            <h1>PROMO CODE</h1>
         <span><input id="promo-code-input" type="text"><button id="code-apply-button">Apply</button></span>
<div id="subtotal">
    <h1>Subtotal:</h1>
    <h1 id="priceshow">52853</h1>
</div>
<div id="shipping">
    <h1>Shipping:</h1>
    <h1 id="chargeshow">FREE</h1>
</div>

<div id="zest">
    <p id="zestp">Or 3 interest-free payments of ₹ 3632 with</p>
<img id="zestmg1" src="https://assets.zestmoney.in/assets/widget/zest-logo-name-info.svg" alt="">
</div>
<div id="payment-button">
    <button id="upibutton">Pay Via UPI</button>
    <button id="cardbutton">Pay Via Card</button>
</div>

        </div>
         
    </div>
    
</div>`
}
export default popop