var token = localStorage.getItem('token');
var url = 'https://hieuhmph12287-lab5.herokuapp.com/'


function handleCreateForm() {

    var createBtn = document.querySelector('#create-add');
    createBtn.onclick = function(e) {
        e.preventDefault();
        var name_products = document.querySelector('input[name="name_products"]').value;
        var status = document.querySelector('input[name="optionsRadios"]:checked').value;
        console.log(status)
        var gender = document.querySelector('input[name="optionsRadios1"]:checked').value;
        var type = document.getElementById('list-type').value;
        let file = document.getElementById("imgFile").files[0];
        var collection_id = document.querySelector('input[name="collection_id"]').value;
        var price = document.querySelector('input[name="numbernew"]').value;
        var old_price = document.querySelector('input[name="numberold"]').value;
        var product_detail = document.getElementById('product_detail').value;

        console.log(name_products);
        var formData = new FormData();
        formData.append("name", name_products);
        formData.append("gender", gender);
        formData.append("price", price);
        formData.append("old_price", old_price);
        formData.append("product_detail", product_detail);
        formData.append("status", status);
        formData.append("collection_id", collection_id);
        formData.append("type", type);
        formData.append("file", file);
        createProduct(formData);

    }
}

function createProduct(data) {

    var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow'
    };
    fetch(url + "products/addProduct?token=" + token, requestOptions)
        .then(response => {
            if (!response.ok) {

                alert("Thêm sản phẩm không thành công");
                throw new Error('Network response was not OK');

            } else {

                alert("Thêm sản phẩm thành công");
                window.location.href = "home.html";
                return response.text();
            }

        })

    .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

$(".image-box").click(function(event) {
    var previewImg = $(this).children("img");

    $(this)
        .siblings()
        .children("input")
        .trigger("click");

    $(this)
        .siblings()
        .children("input")
        .change(function() {
            var reader = new FileReader();

            reader.onload = function(e) {
                var urll = e.target.result;
                $(previewImg).attr("src", urll);
                previewImg.parent().css("background", "transparent");
                previewImg.show();
                previewImg.siblings("p").hide();
            };
            reader.readAsDataURL(this.files[0]);
        });
});
handleCreateForm();