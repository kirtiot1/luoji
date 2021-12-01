<?php
include "./01.php";
//获取传入的参数
$id=$_GET['id'];
//SQL语句
$sql="select * from luoji where id=$id";
//执行SQL语句
$result=mysqli_query($link,$sql);
//创建数组，存放所有数据
$ar1=[];
//获取当前结果集中的数据
$row=mysqli_fetch_assoc($result);
//给当前数据进行编码，并返回
echo json_encode($row);
//关闭数据库连接
mysqli_close($link);

?>