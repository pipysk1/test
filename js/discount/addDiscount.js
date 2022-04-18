var token = localStorage.getItem('token');
console.log(token);

var url = 'https://hieuhmph12287-lab5.herokuapp.com/'



var btnCreate = document.getElementById('create-discount');

btnCreate.onclick = function(e) {
    e.preventDefault();
    var code = document.getElementById('code').value;
    console.log(code);
    var value = document.getElementById('value').value;
    console.log(value)
    var max_used_by_user = document.getElementById('max_used_by_user').value;
    console.log(max_used_by_user)
    var max_used = document.getElementById('max_used').value;
    console.log(max_used)
    var date_start = document.getElementById('date_start').value;
    console.log(date_start)
    var date_end = document.getElementById('date_end').value;
    console.log(date_end)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "code": code,
        "value": value,
        "max_used_by_user": max_used_by_user,
        "max_used": max_used,
        "date_start": date_start,
        "date_end": date_end
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch(url + 'discounts/addDiscount' + '?token=' + token, requestOptions)
        .then(response => {
            if (!response.ok) {
                alert("Thêm mã khuyến mại không thành công");
            } else {
                alert("Thêm mã khuyến mại thành công");

            }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}