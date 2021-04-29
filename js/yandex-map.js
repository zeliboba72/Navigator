function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [57.186606265104544, 65.21045004433623],
        zoom: 10,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    placemarkUshakovo = new ymaps.Placemark(
      [57.09823217327099, 65.15689169472684],
      {
        hintContent: "Ушаково",
        balloonContent: "Ушаково",
      },
      {
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "../assets/marker-ushakovo.svg",
        // Размеры метки.
        iconImageSize: [80, 80],
      }
    );
  placemarkElki = new ymaps.Placemark(
    [57.07879321245459, 65.17371450966826],
    {
      hintContent: "Ёлки",
      balloonContent: "Ёлки",
    },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#image",
      // Своё изображение иконки метки.
      iconImageHref: "../assets/marker-elki.svg",
      // Размеры метки.
      iconImageSize: [80, 80],
    }
  );
  placemarkEsenino = new ymaps.Placemark(
    [57.08664479354771, 65.06007467812526],
    {
      hintContent: "Есенино",
      balloonContent: "Есенино",
    },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#image",
      // Своё изображение иконки метки.
      iconImageHref: "../assets/marker-esenino.svg",
      // Размеры метки.
      iconImageSize: [80, 80],
    }
  );
  placemarkAlpDolina = new ymaps.Placemark(
    [57.23671495493798, 65.08661001977252],
    {
      hintContent: "Альпийская долина",
      balloonContent: "Альпийская долина",
    },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#image",
      // Своё изображение иконки метки.
      iconImageHref: "../assets/marker-alp-dolina.svg",
      // Размеры метки.
      iconImageSize: [80, 80],
    }
  );

  myMap.geoObjects
    .add(placemarkUshakovo)
    .add(placemarkElki)
    .add(placemarkEsenino)
    .add(placemarkAlpDolina);
}
