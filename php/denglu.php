<?php
include "./01.php";
//获取传入的参数
$n=$_GET['name'];
$p=$_GET['pass'];
//SQL语句
$sql="select * from zhanghao where shoujihao='$n' and mima='$p'";
//执行SQL，并返回结果集
$result=mysqli_query($link,$sql);
//获取结果集中的数据
if($row=mysqli_fetch_assoc($result)){
    echo "1";
}else{
    echo "0";
}
mysqli_close($link);

?>