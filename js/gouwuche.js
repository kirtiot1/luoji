var box=document.querySelector(".centerC"),name1=getCookie("name"),url;name1||(alert("尚未登录，请登录之后在进入"),url=location.href,location.href="./denglu.html?url1="+url);var cartlist1=localStorage.getItem("cartlist1")||"[]";function show(){var t=cartlist1.every(t=>1==t.is_select);if(0<cartlist1.length){for(var i=`
    <div class="Ctop">
                <ul>
                    <li>购物车</li>
                    <li>您还差99元包邮，点击<span>积分兑换包邮卡</span> 或点击<span>凑单</span> </li>
                </ul>
            </div>
            <!-- 商品栏 -->
            <div class="shangp">
                <!-- 购物车上方 -->
                <div class="shangpTop">
                    <div style="width: 638px;height: 40px;line-height: 40px;float: left;">
                        <div style="padding-left: 30px;">
                            <input type="checkbox" name="quan" ${t?"checked":""} style="width: 15px;height: 15px;">全选
                        </div>
                    </div>
                    <div class="shangpTRight">
                        <ul>
                            <li style="color: #e3e3e3;">|</li>
                            <li>单价</li>
                            <li style="color: #e3e3e3;">|</li>
                            <li>数量</li>
                            <li style="color: #e3e3e3;">|</li>
                            <li>合计</li>
                            <li style="color: #e3e3e3;">|</li>
                            <li>操作</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
    `,l=0;l<cartlist1.length;l++)i+=`
    
                
                <!-- 购物车下方 -->
                <div class="shangpBot">
                    <div style="width: 638px;height: 120px;float: left;">
                        <div style="padding-left: 13px;float: left;">
                            <input type="checkbox" name="xuan" style="width: 15px;height: 15px; margin-top: 50px;"  id=${cartlist1[l].id} ${1==cartlist1[l].is_select?"checked":""}>
                        </div>
                        <div
                            style="width: 78px;height: 78px;border: 1px solid #e3e3e3;float: left;margin: 20px 0 0 20px;">
                            <img src="${cartlist1[l].tupian}"style="width:100%;height: 100%;">
                        </div>
                        <div style="width: 192px;height: 40px;float: left;margin: 44px 0 0 30px;">
                            <div>${cartlist1[l].bt}</div>
                            
                        </div>
                    </div>
                    <div class="shangpBRight">
                        <ul>
                            <li></li>
                            <li  class="abc">
                                ￥${cartlist1[l].jiage}
                            </li>
                            <li></li>
                            <li>
                                <button id=${cartlist1[l].id} ${cartlist1[l].geshu<=1?"disabled":""} style="background-color:white;border:1px solid gray;width:25px;height:30px">-</button>
                                <button style="background-color:white;border:1px solid gray;width:30px;height:30px">${cartlist1[l].geshu}</button>
                                <button id=${cartlist1[l].id} ${10<=cartlist1[l].geshu?"disabled":""} style="background-color:white;border:1px solid gray;width:25px;height:30px">+</button>
                            </li>
                            <li></li>
                            <li style='color:red;'>
                            ￥${parseInt(cartlist1[l].geshu)*parseFloat(cartlist1[l].jiage)}
                            </li>
                            <li></li>
                            <li>
                                <span><img src="https://store.logitech.com.cn/images/icon-delete.png" alt=""
                                        style="display: inline-block;"></span>
                                <span style="color: blue;" id=${cartlist1[l].id}>删除</span>
                            </li>
                            <li>&nbsp;</li>
                        </ul>
                    </div>
                  
                </div>


           
        `;i+=`
    <!-- 结算列 -->
            <div class="jiesuan">
                <div class="jiesuanT">商品金额 <span style="color: red;">￥<span>${total2()}</span></span></div>
                <div class="jiesuanB">
                    <div style="padding-left: 30px;padding-top: 26px; float: left;">
                        <input type="checkbox" name="quan" style="width: 15px;height: 15px;" ${t?"checked":""} >全选
                    </div>
                    <div class="shanchu">
                        <ul>
                            <li style="color: rgb(75, 75, 250);">批量删除</li>
                            <li>清空购物车</li>
                        </ul>
                    </div>
                    <div class="zongjia">
                        <div>商品总价</div>
                        <div style="color: red;font-size: 20px;padding-top: 5px;">￥<span>${total1()}</span></div>
                    </div>
                    <div class="jifen">
                        <div>所需积分</div>
                        <div style="color: red;font-size: 20px;padding-top: 5px;">0</div>
                    </div>
                    <button class="jieguo">确认结算</button>
                </div>
            </div>
    `,box.innerHTML=i}else box.innerHTML=`
    <div class="jumbotron" style="position: relative;height: 220px;padding-left: 550px;">
      <img src="https://store.logitech.com.cn/images/icon-cart-no-product.png" alt="" style="position: absolute;top: 30px;left: 350px;">
       <h1 style="font-size: 22px;">您的购物车还是空的</h1>
        <p><a class="btn btn-primary btn-lg" href="./list.html" role="button" style="background-color: red;border: none;margin-top: 10px;">去逛逛</a></p>
    </div> 
    `}function total1(){var i=0;return cartlist1.forEach(t=>{1==t.is_select&&(i+=parseInt(t.geshu)*parseFloat(t.jiage))}),i}function total2(){var i=0;return cartlist1.forEach(t=>{i+=parseInt(t.geshu)*parseFloat(t.jiage)}),i}cartlist1=eval("("+cartlist1+")"),show(),box.onclick=function(){var i,t=window.event,l=t.target||t.srcElement;"删除"==l.innerHTML&&(i=l.getAttribute("id"),cartlist1=cartlist1.filter(t=>t.id!=i),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"+"==l.innerHTML&&(i=l.getAttribute("id"),cartlist1.forEach(t=>{t.id==i&&t.geshu++}),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"-"==l.innerHTML&&(i=l.getAttribute("id"),cartlist1.forEach(t=>{t.id==i&&t.geshu--}),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"quan"==l.name&&(cartlist1.forEach(t=>{l.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"xuan"==l.name&&(i=l.getAttribute("id"),cartlist1.forEach(t=>{t.id==i&&(l.checked?t.is_select=1:t.is_select=0)}),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"确认结算"==l.innerHTML&&confirm("您确定要购买选中商品吗？")&&(alert("您已支付:￥"+total1()),cartlist1=cartlist1.filter(t=>1!=t.is_select),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"清空购物车"==l.innerHTML&&(confirm("您确定要删除所有物品吗？")&&(cartlist1.length=0,alert("已删除全部商品")),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"批量删除"==l.innerHTML&&(cartlist1.forEach(t=>{var i;console.log(t),1==t.is_select&&(i=t.id,cartlist1=cartlist1.filter(t=>t.id!=i))}),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show())};