var box=document.querySelector(".bigBox"),pag=document.querySelector(".pagination");function ab1(i){!async function(){var t=await PromiseAjax({url:i,datatype:"json"}),a={pageInfo:{pagenum:1,pagesize:16,totalsize:t.length,totalpage:Math.ceil(t.length/16)},textInfo:{first:"第一页",prev:"上一页",list:"",next:"下一页",last:"最后一页"}};new Pagination(pag,a,a=>{for(var i=t.slice(16*(a-1),16*a),n="",e=0;e<i.length;e++)n+=`
            <div class="shangp">
                        <div class="shangpC">
                            <div class="shangpT">
                                <div class="tu"><a href="./xiangqing.html?id=${i[e].id}"  target="_blank"><img style="width: 100%;height: 100%;" src="${i[e].tupian}" alt=""></a></div>
                                <div class="zi">${i[e].name}</div>
                                <div class="jia">
                                    <span>商城价</span>
                                    <span class="qian">${i[e].jiage}</span>
                                    <span class="pl">${i[e].pinglun}评论</span>
                                </div>
                            </div>
                            
                        </div>
                        <button class="shangpB"><a href='../index/gouwuche.html'>进入购物车</a></button>
                    </div>
            `;box.innerHTML=n})}()}ab1("../php/list.php");var quanbu=document.querySelector(".quanbu");quanbu.onclick=function(){ab1("../php/list.php")};var jiu=document.querySelector(".jiu");jiu.onclick=function(){ab1("../jiageshaixuan/list2.php")};var bai=document.querySelector(".bai");bai.onclick=function(){ab1("../jiageshaixuan/list3.php")};var san=document.querySelector(".san");san.onclick=function(){ab1("../jiageshaixuan/list4.php")};var si=document.querySelector(".si");si.onclick=function(){ab1("../jiageshaixuan/list5.php")};var ba=document.querySelector(".ba");ba.onclick=function(){ab1("../jiageshaixuan/list6.php")};