# vitest-project
1. install vitest
    - npm install --save-dev vitest

2. install type script
    - npm install --save-dev typescript

3. Menjalankan unit test
    - npx vitest --run nama file => npx vitest --run tests/sample.test.ts

4. Watch Mode
    - Watch mode bisa mendeteksi perubahan yang terjadi pada file unit test , dan secara otomatis akan menjalankan unit test ulang
    - memjalankan perintha vitest watch mode : npx vitest

5. Configuration tambahan
    - walaupun vitest tdk membutuhkan configuration, namun jika ingin merubah configurasi default nya bisa menambahkan file vitest.config.js
    - web : https://vitest.dev/config/

6. Jest Compatible
    - semua fitur jest didukung oleh vitest

7. multi threading

8. Chai 
    - Chai adalah test assertions yang populer , krn penggunaannya sangat mudah dan mudah untuk dibaca
    - chai memiliki fitur expext dan assert
    - link : https://www.chaijs.com/
    - kalau mau gunakan chai : npm install chai 

9. mocking

10. Benchmarking
    - benchmarking adalah melakukan performance test thd kode yg dibuat
    - benchmarking bisa digunakan untuk menjalankan kode berulang.
    - membuat benchmarking menggunakan format file dengn akhiran .bench.ts/js atau benchmark.ts/js
    - menjalankan benchmarking run perintah : npx vitest bench --run namafile , conoth : npx vitest bench --run tests/hello.bench.ts

11. Coverage
    - Vitest support library V8 atau Istanbul sbg  library untuk melakukan COde Coverage
    - https://v8.dev/blog/javascript-code-coverage
    - https://istanbul.js.org/
    - untuk melakukan code coverage tambahkan --coverage ketika menjalankan vitest, misal : npx vitext --run --coverage namafile

12. Vitest UI
    - vitest ui adalah web dashboard untuk memonitor Unit Test yg kita buat, mana yg sukses , mana yg gagal.
    - 
