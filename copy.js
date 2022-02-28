class Copier {
  constructor(data) {
    this.data = data;
  }

  get() {
    setTimeout(function () {
      const data_ = new Promise((resolve) => {
        let data = this.data;
      });

      return data_;
    }, 1000);
  }

  delete(ObjData) {
    setTimeout(function () {
      const data_ = new Promise((resolve) => {
        let data = ObjData;
      });

      return data_;
    }, 2000);
  }

  copy(obj_data) {
    let data_obj = obj_data;

    for (let key in data_obj) {
      if (data_obj.hasOwnProperty(key)) {
        let value = data_obj[key];
      }
    }

    console.log('data_obj=', data_obj);
    return data_obj;
  }
}

const src = { b: 'a', c: 'd' };
const copier = new Copier(src);
console.log(copier.data);

console.log(copier.delete(null));

const src_ = {
  book: 'Sherlock Holmes',
  author: 'Arthur Conan Doyle',
  genre: 'Mystery',
};

const src1 = 'a';
const copier1 = new Copier(src1);

const src2 = { a: 'b', c: { d: 'e', f: ['g', { h: 'i' }] } };
const copier2 = new Copier(src2);

console.log('src_...');
copier.copy(src_);
console.log('src1...');
copier1.copy(src1);
console.log('src2...');
copier2.copy(src2);
