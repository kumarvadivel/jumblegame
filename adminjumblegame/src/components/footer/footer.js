import React from 'react';
import '../footer/footer.css';
export default function Footer(){

    return(
        <div class="footer__quick-link-list-wrap"><div class="flexrow ggh"><div class="col-md-2 col-sm-3 list-col"><header><svg xmlns="http://www.w3.org/2000/svg" width="75" height="24" viewBox="0 0 75 24"><path fill="#FFF" d="M74.972 9.503c-.172-1.758-2.66-.876-4.146-.608-.56.1-2.272.416-4.242.781-.076-1.982-.041-1.584-.07-2.791-.041-1.75-.15-3.106-.25-4.654-.064-.973-.205-2.311-2.007-2.064-2.078.285-2.432 1.297-2.985 2.521-1.443 3.193-1.406 3.208-3.049 6.758a58.578 58.578 0 0 0-.832 1.982c-.071.02-.198.054-.36.096l-2.382.514.014-.085c.207-1.625.472-3.244.705-4.866.212-1.48.434-3.885.615-5.368C56.177.13 54.285.17 54.285.17c-1.153-.067-1.602.266-2.327 1.184-1.254 1.589-2.763 3.303-4.102 5.05-2.42 3.159-4.21 5.548-6.408 8.715-.639.92-1.621 2.325-2.466 3.408-.566-1.103-1.052-2.31-1.526-3.412-.68-1.58-1.186-2.564-1.521-3.616-.295-.925.058-1.053.763-1.572 2.025-1.493 4.304-2.52 6.371-3.956 1.464-1.016 3.227-2.138 4.66-3.195 0 0 .838-.482 1.288-1.084.573-.77-1.038-1.553-1.038-1.553-.905-.14-1.423.06-2.054.341-.655.292-1.494.939-2.06 1.369-1.215.924-2.765 2.02-3.98 2.945-1.485 1.131-2.49 1.823-4.117 2.767l4.138-6.037c1.352-1.7-2.227-2.18-3.601-.39-1.275 1.609-2.13 3.018-3.135 4.475-2.402 3.481-4.363 7.128-6.331 10.96a108.79 108.79 0 0 0-2.164 4.497c-.333.73-1.29 2.42.038 2.58 2.818.343 3.281-.96 3.916-2.522 1.051-2.583 1.393-3.062 2.06-4.672.645-1.553 1.12-2.45 1.853-3.779.013-.023.233-.35.23-.355.136.27.992 3.067 1.11 3.377.58 1.514 1.618 5.036 2.199 6.638.42 1.327.545 1.71 2.375 1.663.914-.022 1.309-.36 1.908-1.478.599-1.12 3.217-5.844 3.217-5.844.778-.133 1.904-.324 2.633-.444a47.1 47.1 0 0 0 .826-.152c.271-.036.509-.078.685-.127l.03-.008 2.629-.506c-.179.87-.74 2.799-.84 3.285 0 0-1.206 4.58.36 4.81.98.143 1.482-.018 1.482-.018 1.833-.213 1.853-2.608 1.853-2.608l.988-6.213c.722-.14 1.44-.278 2.13-.41l-2.152 7.077c-.308 1.004-.534 2.287 1.303 2.285 1.502.075 1.6-.846 1.6-.846.037-.142 1.223-3.876 1.52-5.217.19-.862.891-3.066 1.177-3.957a82.191 82.191 0 0 1 1.65-.299c.326-.051.966-.155 1.787-.29a59.83 59.83 0 0 0 .01 2.128c.179 2.502-.012 5.114.514 7.579.084.394.252.902.762.902.626 0 .808-.057 1.461-.11 1.884-.153 1.543-2.024 1.427-3.2a79.387 79.387 0 0 0-.447-3.696c-.153-1.066-.25-2.459-.27-4.14l-.001-.029c3.09-.507 6.431-1.058 6.926-1.139.869-.142 1.52-.07 1.348-1.828m-24.026 3.128a.06.06 0 0 1-.019.03l-5.053 1.157c1.082-1.865 5.82-8.657 6.553-9.454-.396 2.1-1.055 6.008-1.481 8.267m12.395-2.368a1.967 1.967 0 0 1-.007.11l-2.897.536c1.036-2.557 2.113-5.693 2.746-7.273-.046 1.169.215 5.46.158 6.627m-41.65-9.112C22.497-.377 19.876.057 19.876.057c-.95 0-1.372 1.119-1.565 1.443l-2.85 5.498c-.541.903-2.3 4.794-2.896 5.66-.042-.874.011-2.63.04-3.049.116-1.66.234-2.913.409-4.44.134-1.18.389-2.507.14-3.686-.155-.735-.402-.789-1.474-.9C10.566.47 9.793 2.07 9.423 2.819c-1.37 2.771-2.899 5.49-4.116 8.325-.355.826-.803 1.651-1.164 2.475-.433.987-.847 1.968-1.32 2.937-.503 1.027-2.08 4.37-2.525 5.418-.487 1.148-.589 2.074 1.37 2.025.301-.007.99.07 1.834-.825.658-.7.793-1.356 1.189-2.326 1.402-3.44 2.382-5.73 3.913-9.132.153-.34.494-1.302.833-2.06-.016 1.067-.2 2.348-.27 3.192-.255 3.09-.441 6.078-.714 9.137-.037.41-.15.903.049 1.29.196.382.675.484 1.075.532 1.564.185 1.725-.571 2.213-1.63.43-.937.698-1.703 1.086-2.656 1.202-2.947 2.471-5.87 3.874-8.73.357-.73.72-1.457 1.105-2.174.71-1.321 1.302-2.57 2.079-4.032.576-1.084 1.14-2.266 1.756-3.433M32.922 2.45c.313-.573 1.034-1.723.144-2.155-.52-.252-1.227-.408-1.765-.136-.452.228-.782.687-1.004 1.11l-3.42 5.276c-.552.752-1.08 1.696-2.214 1.819-.75.082-1.296-.23-1.283-.887.014-.665.411-1.57.72-2.144.89-1.657 1.002-2.222 1.865-3.871.824-1.574-1.883-1.935-2.555-.795-.481.814-1.402 2.346-1.615 2.862-.385.935-3.252 5.407-2.007 7.18 1.602 2 5.849-1.15 3.672 2.488-1.75 2.925-2.852 4.593-4.384 7.303-.33.585-.747 1.164-.86 1.841-.16.967 1.2.961 1.782.919 1.042-.075 1.53-.542 1.95-1.472.218-.481.526-1.083.749-1.56 2.016-4.305 4.153-8.037 6.805-12.206 1.248-1.963 2.376-3.665 3.42-5.572"></path></svg></header><ul class="list-unstyled quick-link-list"><li class="quick-link"><a href="/who_are_we/?utm_source=Desktop_web_footer" target="_blank">WHO ARE WE?</a></li><li class="quick-link"><a href="/who_are_we#wwrcopen" target="_blank">CAREERS</a></li><li class="quick-link"><a href="/authenticity-nykaa-guarantee?utm_source=Desktop_web_footer" target="_blank">AUTHENTICITY</a></li><li class="quick-link"><a href="/who_are_we#wwrpress" target="_blank">PRESS</a></li><li class="quick-link"><a href="/who_are_we#wwrtestimonial" target="_blank">TESTIMONIALS</a></li><li class="quick-link"><a href="/nykaa-csr" target="_blank">NYKAA CSR</a></li><li class="quick-link"><a href="/responsible-disclosure" target="_blank">RESPONSIBLE DISCLOSURE</a></li></ul></div><div class="col-md-3 col-sm-3 list-col"><header>help</header><ul class="list-unstyled quick-link-list"><li class="quick-link"><a href="/contactscustom/index/zendeskAuthentication?utm_source=Desktop_web_footer&amp;utm_term=Contactus" target="_blank">CONTACT US</a></li><li class="quick-link"><a href="/contactscustom/index/zendeskAuthentication?utm_source=Desktop_web_footer&amp;utm_term=FAQ" target="_blank">FREQUENTLY ASKED QUESTIONS</a></li><li class="quick-link"><a href="/nykaa-stores-and-events/?utm_source=Desktop_web_footer" target="_blank">STORE LOCATOR</a></li><li class="quick-link"><a href="/cancellation-policy/?utm_source=Desktop_web_footer" target="_blank">CANCELLATION &amp; RETURN</a></li><li class="quick-link"><a href="/shipping-policy/?utm_source=Desktop_web_footer" target="_blank">SHIPPING &amp; DELIVERY</a></li></ul></div><div class="col-md-2 col-sm-3 list-col"><header>inspire me</header><ul class="list-unstyled quick-link-list"><li class="quick-link"><a href="https://www.nykaa.com/beauty-blog/?utm_source=Desktop_web_footer" target="_blank">BEAUTY BOOK</a></li><li class="quick-link"><a href="https://nykaatv-web.nykaa.com/?utm_source=Desktop_web_footer" target="_blank">Nykaa TV</a></li><li class="quick-link"><a href="https://www.nykaa.com/nykaa-network/?utm_source=Desktop_web_footer" target="_blank">Nykaa Network</a></li><li class="quick-link"><a href="https://www.nykaa.com/routinefinder?utm_source=Desktop_web_footer" target="_blank">Routine Finder</a></li><li class="quick-link"><a href="https://www.nykaa.com/buying-guides/?utm_source=Desktop_web_footer" target="_blank">BUYING GUIDES</a></li></ul></div><div class="col-md-2 col-sm-3 list-col"><header>quick links</header><ul class="list-unstyled quick-link-list"><li class="quick-link"><a href="/offers.html/?utm_source=Desktop_web_footer" target="_blank">OFFER ZONE</a></li><li class="quick-link"><a href="/new-launches-at-nykaa/?utm_source=Desktop_web_footer" target="_blank">NEW LAUNCHES</a></li><li class="quick-link"><a href="https://www.nykaaman.com/?utm_source=Desktop_web_footer" target="_blank">NYKAA MAN</a></li><li class="quick-link"><a href="https://www.nykaafashion.com/?utm_source=Desktop_web_footer" target="_blank">NYKAA FASHION</a></li><li class="quick-link"><a href="https://www.nykaa.com/nykaa-pro/?utm_source=Desktop_web_footer" target="_blank">NYKAA PRO</a></li><li class="quick-link"><a href="https://www.nykaa.com/nfba-nominees-sale-online-2019/?utm_source=Desktop_web_footer" target="_blank">NYKAA FEMINA BEAUTY AWARDS WINNERS 2019</a></li><li class="quick-link"><a href="/sitemap?root=nav_footer" target="_blank">Sitemap</a></li></ul></div><div class="col-md-3 col-sm-12 list-col"><header>top categories</header><div class="row"><div class="col-sm-6 col-md-6"><ul class="list-unstyled quick-link-list group"><li class="quick-link"><a href="/makeup.html?root=nav_footer&amp;utm_source=Desktop_web_footer" target="_blank">Makeup</a></li><li class="quick-link"><a href="/skin-care.html?root=nav_footer&amp;utm_source=Desktop_web_footer" target="_blank">Skin</a></li><li class="quick-link"><a href="/hair-care.html?root=nav_footer&amp;utm_source=Desktop_web_footer" target="_blank">Hair</a></li><li class="quick-link"><a href="/personal-care.html?root=nav_footer&amp;utm_source=Desktop_web_footer" target="_blank">Personal Care</a></li><li class="quick-link"><a href="/best-personal-care-appliances-online?utm_source=Desktop_web_footer" target="_blank">APPLIANCES</a></li></ul></div><div class="col-sm-6 col-md-6"><ul class="list-unstyled quick-link-list group"><li class="quick-link"><a href="/mom-and-baby.html?root=nav_footer&amp;utm_source=Desktop_web_footer" target="_blank">Mom and Baby</a></li><li class="quick-link"><a href="/wellness.html?root=nav_footer&amp;utm_source=Desktop_web_footer" target="_blank">Wellness</a></li><li class="quick-link"><a href="/fragrance.html?root=nav_footer&amp;utm_source=Desktop_web_footer" target="_blank">Fragrance</a></li><li class="quick-link"><a href="/herbal/c/214&amp;utm_source=Desktop_web_footer" target="_blank">NATURAL</a></li><li class="quick-link"><a href="/luxury?root=nav_footer&amp;utm_source=Desktop_web_footer" target="_blank">Luxe</a></li></ul></div></div></div></div></div>
    )
}