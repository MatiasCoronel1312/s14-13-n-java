const lugares =[
            {
                "id": 0,
                "images": ["https://c1.wallpaperflare.com/preview/79/779/771/argentina-salta-hills-nature-arid.jpg","https://images.unsplash.com/photo-1603415017286-5c4e3492610f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FsdGElMkMlMjBhcmdlbnRpbmF8ZW58MHx8MHx8fDA%3D","https://www.welcomeargentina.com/salta/imagenes/panoram-noche.jpg","https://i.pinimg.com/originals/fa/6d/f8/fa6df84a24020a2ec30cb2e5929117f3.jpg"],
                "city": "Salta",
                "title": "Salta la Linda te deslumbra con su historia, cultura y paisajes",
                "subtitle": "Salta te espera para unas vacaciones inolvidables. Disfrutá de sus paisajes, su cultura y su gente",
                "location": "Salta Province, Argentina",
                "locationTitle": "Noreste Argentino",
                "highSeason": "March to May, September to November",
                "highSeasonTitle": "Otoño y Primavera",
                "celebrations": "Carnaval de Salta, Gaucho Güemes Parade",
                "celebrationsTitle": "Febrero, septiembre",
                "phase": "¿Que hacer en Salta?",
                "tag": ["Historia","Fiesta","Cultura"]
            },
            {
                "id": 1,
                "images": ["https://turismo.uncuyo.edu.ar/cache/iguazu2_558_992_c.jpg","https://hoteldonhoracio.com/wp-content/uploads/2020/09/iguazu-turismo-1.jpg","https://hoteldonhoracio.com/wp-content/uploads/2020/09/img-20181215-162407-543.jpg","https://hoteldonhoracio.com/wp-content/uploads/2020/09/Cataratas-desde-Mendoza-Portada.jpg"],
                "city": "Iguazú Falls",
                "title": "Maravilla Natural",
                "subtitle": "Las Cataratas del Iguazú te impactarán con su belleza y magnitud",
                "location": "Misiones Province, Argentina",
                "locationTitle": "Noreste Argentino",
                "highSeason": "May to September",
                "highSeasonTitle": "Otoño e Invierno",
                "celebrations": "National Iguazú Park Anniversary (October)",
                "celebrationsTitle": "Octubre",
                "phase": "¿Que hacer en Iguazú Falls?",
                "tag": ["Aventura","Cultura","Naturaleza"]
            },
            {
                "id": 2,
                "images": ["https://cdn-site.localiza.com/wp-content/uploads/2023/05/C1-1920-x-448.jpg","https://cdn-site.localiza.com/wp-content/uploads/2023/05/c3-704-x-832-254x300.jpg","https://cdn-site.localiza.com/wp-content/uploads/2023/05/c5-844-x-492-300x175.jpg","https://cdn-site.localiza.com/wp-content/uploads/2023/05/C1-704-x-832-2-254x300.jpg"],
                "city": "El Calafate",
                "title": "Glaciares Eternos",
                "subtitle": "El Calafate, la puerta de entrada al majestuoso Parque Nacional Los Glaciares",
                "location": "Santa Cruz Province, Argentina",
                "locationTitle": "Sur Argentino",
                "highSeason": "December to February",
                "highSeasonTitle": "Verano",
                "celebrations": "National Glacier Day (August)",
                "celebrationsTitle": "Agosto",
                "phase": "¿Que hacer en El Calafate?",
                "tag": ["Naturaleza","Turismo","Aventura"]
            },
            {
                "id": 3,
                "images":["https://media.istockphoto.com/id/610883992/es/foto/vista-a%C3%A9rea-de-ushuaia-argentina.jpg?s=612x612&w=0&k=20&c=dei3CUgVIdLG3XS37EMGzPZmmOWcnrw_nxLv_cmkPtg=","https://visitchile.cl/wp-content/uploads/2022/07/Viaje-a-Ushuaia-Argentina-2023.jpg","https://casaldemochilao.com.br/wp-content/uploads/2017/01/portal-entrada-cidade-Ushuaia-2.jpg","https://excursionesenushuaia.com/wp-content/uploads/2022/06/Diseno-sin-titulo-2019-12-19T120100.657.jpg"],
                "city": "Ushuaia",
                "title": "Fin del Mundo",
                "subtitle": "Ushuaia, la ciudad más austral del mundo, te espera con aventura y naturaleza",
                "location": "Tierra del Fuego Province, Argentina",
                "locationTitle": "Extremo Sur",
                "highSeason": "December to February, June to August",
                "highSeasonTitle": "Verano e Invierno",
                "celebrations": "End of the World Festival (September)",
                "celebrationsTitle": "Septiembre",
                "phase": "¿Que hacer en Ushuaia?",
                "tag": ["Naturaleza", "Turismo", "Gastronomía"]
            },
            {
                "id": 4,
                "images": ["https://cdn-site.localiza.com/wp-content/uploads/2022/07/BLOGPOST-BARILOCHE-1920x448-1-2.jpg","https://cdn-site.localiza.com/wp-content/uploads/2022/07/BLOGPOST-BARILOCHE-1-300x200.jpg","https://cdn-site.localiza.com/wp-content/uploads/2022/07/BLOGPOST-BARILOCHE-3-300x200.jpg","https://cdn-site.localiza.com/wp-content/uploads/2022/07/BLOGPOST-BARILOCHE-4-300x200.jpg"],
                "city": "Bariloche",
                "title": "Paraíso Patagónico",
                "subtitle": "Bariloche, un destino ideal para disfrutar de la naturaleza y los deportes de invierno",
                "location": "Río Negro Province, Argentina",
                "locationTitle": "Patagonia Argentina",
                "highSeason": "July to August, December to February",
                "highSeasonTitle": "Invierno y Verano",
                "celebrations": "National Snow Week (July)",
                "celebrationsTitle": "Julio",
                "phase": "¿Que hacer en Bariloche?",
                "tag": ["Naturaleza", "Deportes", "Fiestas"]
            },
            {
                "id": 5,
                "images": ["https://cdn-site.localiza.com/wp-content/uploads/2023/06/MicrosoftTeams-image-47.jpg","https://cdn-site.localiza.com/wp-content/uploads/2023/06/GettyImages-973280152.png","https://cdn-site.localiza.com/wp-content/uploads/2023/06/GettyImages-610986518.png","https://cdn-site.localiza.com/wp-content/uploads/2023/06/GettyImages-1193678792.png"],
                "city": "Ciudad de Córdoba",
                "title": "La Docta",
                "subtitle": "Córdoba, la ciudad universitaria con historia y cultura vibrante",
                "location": "Córdoba Province, Argentina",
                "locationTitle": "Centro de Argentina",
                "highSeason": "September to November, March to May",
                "highSeasonTitle": "Primavera y Otoño",
                "celebrations": "Cosquín National Folklore Festival (January), Córdoba Film Festival (September)",
                "celebrationsTitle": "Enero, Septiembre",
                "phase": "¿Que hacer en Ciudad de Córdoba?",
                "tag": ["Fiestas", "Naturaleza", "Gastronomía"]
            }
];

export default lugares;