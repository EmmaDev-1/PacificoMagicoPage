let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

/*---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    const desarrolloSection = document.getElementById('Desarrollo');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      if (isInViewport(desarrolloSection)) {
        desarrolloSection.classList.add('animated');
        window.removeEventListener('scroll', handleScroll);
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  

/*---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------*/

var map = L.map('map').setView([15.867, -97.073], 10); // Coordenadas iniciales y nivel de zoom

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Ejemplo de un marcador
        L.marker([15.867, -97.073]).addTo(map)
            .bindPopup('Aquí es tu próxima inversión.')
            .openPopup();

        // Función para verificar si el elemento está en la vista
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Función para manejar el scroll
        function handleScroll() {
            const ubicacionSection = document.getElementById('ubicacion');
            if (isInViewport(ubicacionSection)) {
                ubicacionSection.classList.add('animated');
                window.removeEventListener('scroll', handleScroll);
            }
        }

        window.addEventListener('scroll', handleScroll);
        // Para ejecutar la función al cargar la página
        document.addEventListener('DOMContentLoaded', handleScroll);



/*---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------*/
