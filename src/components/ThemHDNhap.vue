<template>
    <div class="add-invoice">
      <h2>Thêm Hóa Đơn Nhập</h2>
      <div class="container">
        <div class="product-list">
          <h3>Danh Sách Sản Phẩm</h3>
          <ul>
            <li v-for="product in products" :key="product.id" @click="addProductToInvoice(product)">
              {{ product.code }} - {{ product.name }} - {{ product.price }} VNĐ
            </li>
          </ul>
        </div>
        <div class="invoice-details">
          <h3>Thông Tin Hóa Đơn</h3>
          <ul>
            <li v-for="item in invoiceItems" :key="item.id">
              {{ item.code }} - {{ item.name }} - Số Lượng: {{ item.quantity }} - Đơn Giá: {{ item.price }} VNĐ
            </li>
          </ul>
          <button @click="addInvoice">Thêm Hóa Đơn</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddInvoice',
    data() {
      return {
        products: [
          { id: 1, code: 'SP001', name: 'Sản phẩm 1', price: 100000 },
          { id: 2, code: 'SP002', name: 'Sản phẩm 2', price: 200000 },
          { id: 3, code: 'SP003', name: 'Sản phẩm 3', price: 150000 },
        ],
        invoiceItems: [],
      };
    },
    methods: {
      addProductToInvoice(product) {
        const existingItem = this.invoiceItems.find(item => item.id === product.id);
        if (existingItem) {
          existingItem.quantity += 1; // Tăng số lượng nếu sản phẩm đã có trong hóa đơn
        } else {
          this.invoiceItems.push({ ...product, quantity: 1 }); // Thêm sản phẩm mới vào hóa đơn
        }
      },
      addInvoice() {
        // Logic để thêm hóa đơn vào hệ thống
        console.log('Hóa đơn đã được thêm:', this.invoiceItems);
        // Reset hóa đơn sau khi thêm
        this.invoiceItems = [];
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between;
  }
  
  .product-list, .invoice-details {
    width: 45%;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }
  
  .product-list ul, .invoice-details ul {
    list-style-type: none;
    padding: 0;
  }
  
  .product-list li {
    cursor: pointer;
    padding: 5px;
    border-bottom: 1px solid #eee;
  }
  
  .product-list li:hover {
    background-color: #f0f0f0;
  }
  
  .invoice-details button {
    margin-top: 10px;
  }
  </style>