// Lấy ID trên url
const id = new URLSearchParams(window.location.search).get("id");

// tìm kiếm trong mảng products
// nếu ID phần tử trong mảng == id trên url
// thì trả về kết quả là cái phần tử tìm được
const products = [
    { id: 1, name: SonA, img: "https://picsum.photos/400/400" },
    { id: 2, name: NamA, img: "https://picsum.photos/400/400" },
]