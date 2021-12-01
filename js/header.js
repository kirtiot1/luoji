function tou(){document.querySelector("header").innerHTML=`
    <!-- 头部 -->
    <div class="header1">
        <!-- 头部的顶端 -->
        <div class="headerTop1">
            <!-- 顶端版心 -->
            <div class="hdtcenter1">
                <!-- 顶端左边 -->
                <div class="hdtleft1">
                    <ul>
                        <li>您好，欢迎来到罗技官方商店</li>
                        <li style="display: flex;justify-content: space-evenly;width: 170px;">
                            <div class="dl"><a  style="color: RGB(143,143,143);" href="../index/denglu.html?url1=${location.href}" target=_parent>请登录</a> </div>
                            <div>|</div>
                            <div class="zc"><a style="color: RGB(143,143,143);" href="../index/zhuce.html" target=_parent>注册</a> </div>
                        </li>
                    </ul>
                </div>
                <!-- 顶端右边 -->
                <div class="hdtright1">
                    <ul>
                        <li style="display: flex;justify-content: space-evenly;width: 190px;">
                            <div>
                                <img src="https://store.logitech.com.cn/images/icon-account.png" alt="" style="display:inline-block;">
                                <span><a style="color: RGB(143,143,143);" href="">我的账户</a> </span>
                            </div>
                            <div>|</div>
                            <div>
                                 <img src="https://store.logitech.com.cn/images/icon-cart.png" alt="" style="display:inline-block;">
                                <span style="position: relative;"><a style="color: RGB(143,143,143);" href="../index/gouwuche.html"target=_parent>购物车</a>
                               
                                </span>
                            </div>
                        </li>
                        <li
                            style="width: 350px;display: flex;justify-content:space-between;font-size: 17px; color: black;">
                            <div>
                            <img src="https://store.logitech.com.cn/images/icon-phone.png" alt="" style="display:inline-block;">
                                <span>售前4006260228</span>
                            </div>
                            <div>
                            <img src="https://store.logitech.com.cn/images/icon-phone.png" alt="" style="display:inline-block;">
                                <span>售后4008200338</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 头部的底端 -->
        <div class="headerBot1">
            <!-- 头部底端得版心 -->
            <div class="hdbcenter2">
                <div class="hdbcleft1">
                    <ul class="hdbl1">
                        <a href="../index/index1.html"><img src="https://store.logitech.com.cn/images/logo.png" alt=""></a>
                    </ul>
                </div>
                <div class="hdbCenter1">
                    <img src="https://images.wincheers.net/UpLoad/Web/ProductImg/2020-11-19/NEW_XM/xq.gif" alt="">
                </div>
                <div class="sousuokaung1">
                    <input style="width: 285px;height: 36px; border: none; box-sizing: border-box;padding-left: 10px;"
                        type="text" placeholder="G923游戏方向盘">
                    <div style="width: 80px;height: 36px;background-color: RGB(244,244,244);float: right;">
                        <a href="https://store.logitech.com.cn/"><span
                                style="font-size: 25px;float: right;margin-top: 5px;margin-right: 10px;"
                                class="iconfont icon-fangdajing"></span></a>

                    </div>
                    <div style="width: 370px;height: 30px;line-height: 30px;color: RGB(106,106,106);">热门搜索: PRO X无线游戏耳机
                        M低75轨迹球鼠标 G102二代</div>
                </div>
                <div class="sxt1">
                    <img src="https://images.wincheers.net/UpLoad/Web/ProductImg/2020-06-29/NEW_XM/%E8%A7%86%E9%A2%91%E5%8A%9E%E5%85%AC(1).gif"
                        alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- 中间部分 -->
    <div class="Center1">
        <div class="Ccenter">
            <div style="width: 1050px;height: 30px;">
                <ul>
                    <li class="bg" style='width:216px';text-algin:'center'><a href="../index/list.html" target="_blank" style='color:white;    text-decoration: none;'>全部产品分类</a> </li>
                    <li>会员福利</li>
                    <li style="position: relative;">新品专区
                        <img style="position: absolute;right: 0;top: 0;" src="https://store.logitech.com.cn/images/icon-nav-hot.jpg" alt="">
                    </li>
                    <li>配件专区</li>
                    <li>会议专区</li>
                    <li style="position: relative;">企业采购
                        <img style="position: absolute;right: 0;top: 0;" src="https://store.logitech.com.cn/images/icon-nav-hot.jpg" alt="">
                    </li>
                    <li>关于罗技</li>
                </ul>
            </div>
        </div>
    </div>
    
    `;const i=document.querySelector(".hdtleft1");console.log(i);var e=getCookie("name");console.log(e),""==e||(i.innerHTML=`
        <ul>
        <li>${e}&nbsp;您好，欢迎来到罗技官方商店</li>
        <li >
            <div class="zc">[退出]</div>
        </li>
    </ul>
        `);const t=document.querySelector(".zc");console.log(t),t.onclick=function(){delCookie("name"),location.reload()}}function getCookie(i){for(var e=document.cookie.split("; "),t="",l=0;l<e.length;l++){var o=e[l].split("=");o[0]===i&&(t=o[1])}return t}function setCookie(i,e,t){t?(t=new Date-288e5+1e3*t,document.cookie=i+`=${e};expires=`+new Date(t)):document.cookie=i+"="+e}function delCookie(i){setCookie(i,"",-1)}export{tou};