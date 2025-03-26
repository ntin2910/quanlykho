<template>
    <div>
      <h2>Quản Lý Sản Phẩm</h2>
      <table>
        <thead>
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Số Lượng Tồn</th>
            <th>Đơn Giá</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button @click="openEditModal(product)">Sửa</button>
              <button @click="deleteProduct(product.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="showAddProductModal">Thêm Sản Phẩm</button>
  
      <!-- Popup Form Thêm Sản Phẩm -->
      <div v-if="isAddModalVisible" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeAddModal">&times;</span>
          <h3>Thêm Sản Phẩm</h3>
          <form @submit.prevent="addProduct">
            <div>
              <label for="code">Mã Sản Phẩm:</label>
              <input type="text" id="code" v-model="newProduct.code" required />
            </div>
            <div>
              <label for="name">Tên Sản Phẩm:</label>
              <input type="text" id="name" v-model="newProduct.name" required />
            </div>
            <div>
              <label for="quantity">Số Lượng Tồn:</label>
              <input type="number" id="quantity" v-model="newProduct.quantity" required />
            </div>
            <div>
              <label for="price">Đơn Giá:</label>
              <input type="number" id="price" v-model="newProduct.price" required />
            </div>
            <button type="submit">Thêm</button>
          </form>
        </div>
      </div>
  
      <!-- Popup Form Sửa Sản Phẩm -->
      <div v-if="isEditModalVisible" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeEditModal">&times;</span>
          <h3>Sửa Sản Phẩm</h3>
          <form @submit.prevent="updateProduct">
            <div>
              <label for="edit-code">Mã Sản Phẩm:</label>
              <input type="text" id="edit-code" v-model="currentProduct.code" required />
            </div>
            <div>
              <label for="edit-name">Tên Sản Phẩm:</label>
              <input type="text" id="edit-name" v-model="currentProduct.name" required />
            </div>
            <div>
              <label for="edit-quantity">Số Lượng Tồn:</label>
              <input type="number" id="edit-quantity" v-model="currentProduct.quantity" required />
            </div>
            <div>
              <label for="edit-price">Đơn Giá:</label>
              <input type="number" id="edit-price" v-model="currentProduct.price" required />
            </div>
            <button type="submit">Cập Nhật</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductManagement',
    data() {
      return {
        products: [
          { id: 1, code: 'SP001', name: 'Sản phẩm 1', quantity: 10, price: 100000 },
          { id: 2, code: 'SP002', name: 'Sản phẩm 2', quantity: 5, price: 200000 },
          { id: 3, code: 'SP003', name: 'Sản phẩm 3', quantity: 20, price: 150000 },
        ],
        isAddModalVisible: false,
        isEditModalVisible: false,
        newProduct: {
          code: '',
          name: '',
          quantity: 0,
          price: 0,
        },
        currentProduct: {
          id: null,
          code: '',
          name: '',
          quantity: 0,
          price: 0,
      },
    };
  },
  methods: {
    showAddProductModal() {
      this.isAddModalVisible = true;
    },
    closeAddModal() {
      this.isAddModalVisible = false;
      this.resetNewProduct();
    },
    openEditModal(product) {
      this.currentProduct = { ...product }; // Sao chép thông tin sản phẩm hiện tại
      this.isEditModalVisible = true; // Hiện modal sửa sản phẩm
    },
    closeEditModal() {
      this.isEditModalVisible = false;
      this.resetCurrentProduct();
    },
    addProduct() {
      const newId = this.products.length + 1; // Tạo ID mới
      this.products.push({ id: newId, ...this.newProduct });
      this.closeAddModal();
    },
    updateProduct() {
      const index = this.products.findIndex(product => product.id === this.currentProduct.id);
      if (index !== -1) {
        this.products.splice(index, 1, this.currentProduct); // Cập nhật sản phẩm
      }
      this.closeEditModal();
    },
    resetNewProduct() {
      this.newProduct = {
        code: '',
        name: '',
        quantity: 0,
        price: 0,
      };
    },
    resetCurrentProduct() {
      this.currentProduct = {
        id: null,
        code: '',
        name: '',
        quantity: 0,
        price: 0,
      };
    },
    deleteProduct(productId) {
      this.products = this.products.filter(product => product.id !== productId);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  margin-right: 5px;
}

/* CSS cho modal */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Nền mờ */
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>