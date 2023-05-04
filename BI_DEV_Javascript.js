// berikut adalah syntax untuk menjawab soal https://www.testdome.com/questions/javascript/image-gallery/35768?visibility=1&skillId=2


function setup() {
  // Dapatkan semua tombol hapus di halaman
  const removeButtons = document.querySelectorAll('.remove');

  // Tambahkan click event listener ke setiap tombol hapus
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Dapatkan elemen parent tombol (div class image) dan hapus dari body
      const imageDiv = button.parentElement;
      imageDiv.remove();
    });
  });

}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);