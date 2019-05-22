function xuly(){
    console.log('da vao ham...chuan bi chien nhe...');
    //buoc 1: lay du lieu tu mot phan tu co id la gi do?
    var a = document.getElementById('so1').value;
    var b = document.getElementById('so2').value;
    console.log('a:'+a+ ' b:'+b)
    //buoc 2: tinh toan, xu ly va kiem tra ket qua
    var tong = parseInt(a)+ parseInt(b);
    document.getElementById('ketqua').innerHTML = 'ket qua la:'+tong;
}