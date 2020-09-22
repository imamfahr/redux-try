# redux-try

step by step using redux untuk react

1. Install react js dengan cara mengetik npx install-react-install my-app (untuk buat nama file)
2. Install redux dengan cara mngetik npm install redux
3. Install react redux dengan cara mengetik npm install react redux
4. Buat folder components, pages, dan redux. Masing-masing berfungsi untuk menyimpan komponen-komponen, halaman dan komponen redux

-----------------------------------------------------------dealing with redux folders----------------
5. Buat folder actons, reducer, dan store di dalam file redux.

6. Buat file javascript di dalam folder actions (misal: counter.actions.js). File ini akan berisi actions dalam bentuk function yang berisi object , yang akan diexport dan digunakan untuk merubah state dari salah suatu komponen. Dalam file ini, value pada key type yang ada di dalam fungsi harus menggunakan tanda kutip contoh: 'INCREMENT' yang ditulis dalam huruf kapital sebagai best practice. Namun dapat juga tidak menggunakan tanda kutip namun perlu melakukan local export import dalam file terlebih dahulu. Contoh : export const INCREMENT ='INCREMENT'. Dengan ini, value dari key type tidak perlu menggunakan tanda kutip.

7. Buat file javascript di dalam folder reducer (misal: counter.reducer.js). File ini akan mengimport actions yang sudah dibuat sebelumnya. File ini berisi state awal dari suatu state (initial state) yang akan dirubah dan fungsi yang berisi perintah-perintah yang akan digunakan untuk mengubah initial state. Perintah-perintah ini akan dibuat dalam bentuk fungsi yang berisi conditional operator, sehingga kita dapat memilih untuk menggunakan if else, switch ataupun ternary operator. Apapun operator yang dipilih, di pilihan terakhir perlu diberikan "default state return state" yang berguna untuk menghindari kemungkinan adanya kondisi yang tidak sesuai perintah. File ini kemudian ditutup dengan mengekspor default fungsi yang telah dibuat.

8. Buat file store di dalam folder store. File ini berisi import createstore module dari redux dan objek fungsi yang diimport dari file reducer sebelumnya. Objek fungsi yang telah diimport akan menjadi property dari fungsi createstore yang telah diimport.

9. Dalam file index.js import module provider  dari react redux dan juga import store dari file store yang telah dibuat sebelumnya. kemudian bungkus komponen <App /> dengan komponen <Provider store={store}> yang artinya halaman ini akan menggunakan store bernama store yang akan dibuat sebelumnya.



-----------------------------------------------------------dealing with common react components--------------

10. Buat komponen-komponen react sesuai kebutuhan di folder components.

11. Buat halaman-halaman react sesuai kebutuhan di folder pages.

12. Setelah komponen react jadi, import dan tempelkan react components ke dalam halaman-halaman react.



----------------------------------------------------------adding redux to page components----------------------

13. Untuk menggunakan redux di halaman yang sudah jadi, ada 2 cara. Yang pertama menggunakan connect atau menggunakan hooks. 

14. Untuk menggunakan connect maka tahapannya adalah sebagai berikut.
a.import {connect} dari modul 'react-redux'.
b.import fungsi-fungsi dari file actions.
c.masukan state dan fungsi-fungsi yang telah diimport sebagai props dalam bentuk object pada fungsi yang akan memanggil halaman tersebut. (Contoh : ({counter,addCounter, minusCounter}, disini counter adalah state atau object yang akan berubah sedangkan addCounter dan minusCounter adalah dispatch yang akan memicu perubahan pada state).
d.Tempelkan state pada lokasi yang diinginkan sebagai props.
e.Tempelkan dispatch sebagai fungsi kosong dalam property komponen. (contoh <button onClick={()=>{addCounter()}}>)
f.buat sebuah variabel yang memiliki property object counter (contoh({counter}) yang akan mengembalikan object dengan key dan value dengan nama yang sama dengan nama peroperti. Variabel ini akan digunakan untuk menghubungkan state.
g.buat sebuah variabel yang memiliki property dispatch yang akan mengembalikan object berupa key dan value yang masing-masing terdiri dari nama fungsi dan method dispatch yang memiliki properti fungsi tersebut.
h.export file tersebut dengan menjadikannya property connect dan tambahkan nama page yang dibungkus dengan kurung. Contoh : export default connect(mapStateToProps,mapDispatchToProps)(Counter);
i.pada console tulis npm start untuk menjalankan hasilnya ke local host

15. Untuk menggunakan hooks maka tahapannya adalah sebagai berikut
a.Import fungsi-fungsi dari file actions.
b.Import useDispatcher dan useSelector dari modul 'react-redux'.
c.Buat sebuah variabel hooks menggunakan useSelector yang memiliki properti (state)=>state.namaState. variabel ini akan digunakan sebagai penanda state.
d.Buat sebuah variabel hooks menggunakan useDispatch(). variabel ini akan digunakan untuk memanggil fungsi yang telah diimport dari file actions sebagai dispatch.
e.pada halaman yang akan dirender, masukan state yang akan dirubah di tempat yang diinginkan. Contoh : {counterselector}
f.masukan pula dispatcher ke dalam property fungsi yang akan dibuat sebagai fungsi. Contoh :  
<button onClick={() => {dispatch(addCounter());}}>+</button>
g.export default page yang telah dibuat.

16. Import dan masukan halaman yang telah selesai ke file App.js sebagai react component


