'use strict';

function hideBirthdayCard() {
  $('#birthday-card').hide();
}

hideBirthdayCard();

  $('#card-reveal').on('click', function() {
    $('#birthday-card').show();
  });

  $('#card-reveal').on('click', function () {
    var birthdaySong = new Audio('happy-birthday-song.wav');
    birthdaySong.play();
  });
