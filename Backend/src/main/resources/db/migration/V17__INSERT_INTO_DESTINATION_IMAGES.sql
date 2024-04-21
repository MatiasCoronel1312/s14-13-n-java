SET @destination_id = (SELECT id FROM destinations WHERE title = 'Salta: la Linda.');
INSERT INTO destinations_images (destination_id, image_url)
VALUES
    (@destination_id, 'https://infonegocios.info/content/images/2022/07/21/105568/conversions/salta-linda-times-julio2022-3-medium-size.jpg'),
    (@destination_id, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2npBS3LQN7oY5Az-FJ9jzWJ8W7SnEekJ-2TwVO3YeaEjsxSLPlbpl2wNiJW0S6NMP7Bo&usqp=CAU'),
    (@destination_id, 'https://i.pinimg.com/736x/c4/2b/67/c42b676dbae8b7f6362b78a6d68d46a9.jpg'),
    (@destination_id, 'https://www.todowebsalta.com.ar/wp-content/uploads/2021/08/septiembre-en-salta-el-milagro.jpg');


SET @destination_id = (SELECT id FROM destinations WHERE title = 'Cataratas del Iguazú: Maravilla Natural');

INSERT INTO destinations_images (destination_id, image_Url)
VALUES
    (@destination_id, 'https://turismo.uncuyo.edu.ar/cache/iguazu2_558_992_c.jpg'),
    (@destination_id, 'https://www.infobae.com/new-resizer/y_q2tI7HTou7q1KnqJa44E2wd88=/1200x900/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/OAEVWVQYYFF4RKB6B3BR7L5AH4.jpg'),
    (@destination_id, 'https://hoteldonhoracio.com/wp-content/uploads/2020/09/img-20181215-162407-543.jpg'),
    (@destination_id, 'https://hoteldonhoracio.com/wp-content/uploads/2020/09/Cataratas-desde-Mendoza-Portada.jpg');

SET @destination_id = (SELECT id FROM destinations WHERE title = 'El Calafate: Glaciares Eternos');

INSERT INTO destinations_images (destination_id, image_Url)
VALUES
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2023/05/C1-1920-x-448.jpg'),
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2023/05/c3-704-x-832-254x300.jpg'),
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2023/05/c5-844-x-492-300x175.jpg'),
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2023/05/C1-704-x-832-2-254x300.jpg');

SET @destination_id = (SELECT id FROM destinations WHERE title = 'Ushuaia: Fin del Mundo');

INSERT INTO destinations_images (destination_id, image_Url)
VALUES
    (@destination_id, 'https://media.istockphoto.com/id/610883992/es/foto/vista-a%C3%A9rea-de-ushuaia-argentina.jpg?s=612x612&w=0&k=20&c=dei3CUgVIdLG3XS37EMGzPZmmOWcnrw_nxLv_cmkPtg='),
    (@destination_id, 'https://visitchile.cl/wp-content/uploads/2022/07/Viaje-a-Ushuaia-Argentina-2023.jpg'),
    (@destination_id, 'https://casaldemochilao.com.br/wp-content/uploads/2017/01/portal-entrada-cidade-Ushuaia-2.jpg'),
    (@destination_id, 'https://excursionesenushuaia.com/wp-content/uploads/2022/06/Diseno-sin-titulo-2019-12-19T120100.657.jpg');

SET @destination_id = (SELECT id FROM destinations WHERE title = 'Bariloche: Paraíso Patagónico');

INSERT INTO destinations_images  (destination_id, image_Url)
VALUES
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2022/07/BLOGPOST-BARILOCHE-1920x448-1-2.jpg'),
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2022/07/BLOGPOST-BARILOCHE-1-300x200.jpg'),
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2022/07/BLOGPOST-BARILOCHE-3-300x200.jpg'),
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2022/07/BLOGPOST-BARILOCHE-4-300x200.jpg');

SET @destination_id = (SELECT id FROM destinations WHERE title = 'Córdoba: La Docta');

INSERT INTO destinations_images (destination_id, image_Url)
VALUES
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2023/06/MicrosoftTeams-image-47.jpg'),
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2023/06/GettyImages-973280152.png'),
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2023/06/GettyImages-610986518.png'),
    (@destination_id, 'https://cdn-site.localiza.com/wp-content/uploads/2023/06/GettyImages-1193678792.png');