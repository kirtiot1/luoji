var box2=document.querySelector(".mainCenter"),box3=document.querySelector(".xX"),search=location.search,o1,ar1;async function show(){o1=await PromiseAjax({url:"../php/xiangqing.php",data:"id="+ar1[1],datatype:"json"}),console.log(o1);var t=`
            <div class="left">
                <div class='box'>
                    <img src="${o1.l1}">
                    <div class='mb'></div>
                </div>
                <div class="bot">
                    <img src="${o1.l1}" class='border'>
                    <img src="${o1.l2}" alt="">
                    <img src="${o1.l3}" alt="">
                    <img src="${o1.l4}" alt="">
                    <img src="${o1.l5}" alt="">
                </div>
                <div class="big">
                    <img src="${o1.l1}" alt="">
                </div>
            </div>
            <div class="center">
                <div class="centerLeft">${o1.bt}</div>
                <div class="centerC"></div>
                <div class="jiage">
                    <div style="width: 400px;height: 45px;line-height: 45px;margin-left: 20px;float: left;">官方价:<del> ${o1.gfj}</del>  </div>
                    <div style="width: 400px;height: 45px;line-height: 45px;margin-left: 20px;float: left;">商城价:<span style="font-size: 20px;color: red;margin-left: 25px;"> ${o1.scj}</span> </div>
                    <div style="width: 36px;height: 36px;position: absolute;top: 13px;right:13px"><img style="width: 100%;height: 100%;" src="https://store.logitech.com.cn/images/icon-qrcode.png" alt=""></div>
                </div>
                <div class="xinghao">
                    <div style="width: 95px;height: 80px;text-align: center;line-height: 80px;float: left;">
                        可选型号:
                    </div>
                    <div class="kuang">
                        <ul>
                            <li><img src="${o1.l1}" alt=""></li>
                            <li><img src="${o1.l1}" alt=""></li>
                            <li><img src="${o1.l1}" alt=""></li>
                            <li><img src="${o1.l1}" alt=""></li>
                            <li><img src="${o1.l1}" alt=""></li>
                        </ul>
                    </div>
                </div>
                <div class="shuliang">
                    <div style="width: 95px;height: 42px;text-align: center;line-height: 42px;float: left;">
                        购买数量:
                    </div>
                    <div style="width: 100px;height: 42px;float: left;">
                        <ul style="display: flex; height: 42px;justify-content: space-between;align-items: center;">
                            <button style='background-color:white;border:1px solid black'>-</button>
                            <button style="width: 40px;height:25px;background-color:white;border:1px solid black">1</button>
                            <button style='background-color:white;border:1px solid black'>+</button>
                        </ul>
                    </div>
                    <div style="width: 68px;height: 42px;text-align: center;line-height: 42px;float: left;color: red;">
                        已售<span>${o1.geshu}</span>件
                    </div>
                    <button class="goumai"  style="border: none;">
                    <span class="iconfont icon-gouwuchexuanzhong "></span>加入购物车</button>
                   
                </div>
            </div>
            <div class="right">
                <div class="rightCenter">
                    <div class="rightT">
                        <img src="https://store.logitech.com.cn/images/xq.gif" alt="">
                    </div>
                    <div style="font-size:15px;color: #838383;height: 30px;">会员专享:</div>
                    <div class="libao">
                        <ul>
                            <li>
                                <img src="https://store.logitech.com.cn/images/icon-privilege-01.png" alt="">
                                <span>会员礼包</span>
                            </li>
                            <li>
                                <img src="https://store.logitech.com.cn/images/icon-privilege-02.png" alt="">
                                <span>会员俱乐部</span>
                            </li>
                            <li>
                                <img src="https://store.logitech.com.cn/images/icon-privilege-03.png" alt="">
                                <span>会员积分</span>
                            </li>
                        </ul>
                    </div>
                    <div style="font-size:15px;color: #838383;height: 35px;margin-top: 40px;">服务承诺:</div>
                    <div class="rightBot">
                        <ul>
                            <li>
                                <img src="https://store.logitech.com.cn/images/icon-servers-d-01.jpg" alt="" style="display: inline-block;">
                                <span>满99包邮</span>
                            </li>
                            <li>
                                <img src="https://store.logitech.com.cn/images/icon-servers-d-02.jpg" alt="" style="display: inline-block;">
                                <span>全国联保</span>
                            </li>
                            <li>
                                <img src="https://store.logitech.com.cn/images/icon-servers-d-03.jpg" alt="" style="display: inline-block;">
                                <span>闪电发货</span>
                            </li>
                            <li>
                                <img src="https://store.logitech.com.cn/images/icon-servers-d-05.jpg" alt="" style="display: inline-block;">
                                <span>信用卡支付</span>
                            </li>
                            <li style="width: 100%;">
                                <img src="https://store.logitech.com.cn/images/icon-servers-d-04.jpg" alt="" style="display: inline-block;">
                                <span>7天无理由退货(拆封后不支持)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
    `;box2.innerHTML=t;const s=document.querySelector(".box"),o=document.querySelector(".mb"),e=document.querySelector(".big"),a=e.querySelector("img"),l=document.querySelector(".bot").querySelectorAll("img");for(s.onmouseover=function(){o.style.display="block",e.style.display="block"},s.onmouseout=function(){o.style.display="none",e.style.display="none"},s.onmousemove=function(t){var i=(t=t||window.event).pageX-s.offsetLeft-parseInt(o.offsetWidth/2),e=t.pageY-s.offsetTop-parseInt(o.offsetHeight/2),l=s.offsetWidth-o.offsetWidth,t=s.offsetHeight-o.offsetHeight,i=i<=0?(o.style.left="0px",0):l<i?(o.style.left=l+"px",l):(o.style.left=i+"px",i),e=e<=0?(o.style.top="0px",0):t<e?(o.style.top=t+"px",t):(o.style.top=e+"px",e);a.style.left=-2*i+"px",a.style.top=-2*e+"px"},i=0;i<l.length;i++)l[i].onclick=function(){var t=this.getAttribute("src");for(s.querySelector("img").setAttribute("src",t),a.setAttribute("src",t),j=0;j<l.length;j++)l[j].className="";this.className="border"};t=`
                            <div class="tupian1"><img src="https://images.wincheers.net/UpLoad/Web/ProductImg/2021-01-07/NEW_XM/750X300.jpg" alt=""></div>
                            <div class="tupian1"><img src="https://images.wincheers.net/UpLoad/Web/ProductImg/2020-04-23/NEW_XM/StreamCam-750x300.jpg" alt=""></div>
                            <div class="tupian1"><img src="https://images.wincheers.net/UpLoad/Web/ProductImg/2020-04-23/NEW_XM/G102-%E7%AC%AC%E4%BA%8C%E4%BB%A3-750x300.jpg" alt=""></div>
                            <div class="tupian2"><img src="${o1.xx1}" alt=""></div>
                            <div class="tupian2"><img src="${o1.xx2}" alt=""></div>
                            <div class="tupian2"><img src="${o1.xx3}" alt=""></div>
                            <div class="tupian2"><img src="${o1.xx4}" alt=""></div>
                            <div class="tupian2"><img src="${o1.xx5}" alt=""></div>
 `;box3.innerHTML=t}search?(ar1=search.split("?")[1].split("="),"id"==ar1[0]?show():(alert("参数有误"),location.href="../index/list.html")):(alert("非法进入"),location.href="../index/list.html"),box2.onclick=function(e){var e=e||window.event,target=e.target||e.srcElement,num,num1;if("goumai"==target.className){const cookie1=document.cookie;if(console.log(cookie1),cookie1){var cartlist1=localStorage.getItem("cartlist1")||"[]",cartlist1=eval("("+cartlist1+")");if(0<cartlist1.length){for(var bool=!1,i=0;i<cartlist1.length;i++)cartlist1[i].id==o1.id&&(bool=!0,cartlist1[i].geshu<10&&(cartlist1[i].geshu++,localStorage.setItem("cartlist1",JSON.stringify(cartlist1))));bool||(o1.geshu=1,cartlist1.push(o1),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)))}else o1.geshu=1,cartlist1.push(o1),localStorage.setItem("cartlist1",JSON.stringify(cartlist1))}else{alert("尚未登录，请登录之后在进入");var url=location.href;location.href="./denglu.html?url1=list.html"}}"+"==target.innerHTML&&(num=target.previousElementSibling.innerHTML,num++,target.previousElementSibling.innerHTML=num),"-"==target.innerHTML&&(num1=target.nextElementSibling.innerHTML,console.log(num1),num1<=1&&(num1=2),num1--,target.nextElementSibling.innerHTML=num1),console.log(o1)};