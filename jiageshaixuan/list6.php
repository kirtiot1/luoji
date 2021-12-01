<?php
include "../php/01.php";
//SQL语句
$sql = 'SELECT * FROM `luoji` WHERE `jiage`>800';
//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
//创建数组，存放所有数据
$ar1=[];
//遍历结果集中的每条数据
while($row=mysqli_fetch_assoc($result)){
    //把遍历出来的数据追加到数组
    array_push($ar1,$row);
}
//给当前数组进行编码操作，并返回操作结果
echo json_encode($ar1);
//关闭数据库连接
mysqli_close($link);

?>