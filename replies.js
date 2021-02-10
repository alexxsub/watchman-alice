

const cancelButton = {
    title: 'Отмена', hide: true
  },
  yesButton = {
     title: 'Да', hide: true 
  }
/**
 * Приветственное сообщение при входе в навык.
 */
exports.welcome = () => {
    return {
      text: 'Привет. Я электронный вахтер. Начнем аутентификацию?',
      tts: '<speaker audio="alice-music-harp-1.opus">Привет. Привет. Я электронный вахтер. Начнем аутентификацию?',
      buttons: [
        yesButton,
        cancelButton,
      ],
      end_session: false
    };
  };
  
  /**
   * Запрос на аутентификацию.
   *
   */
  exports.authQuestion = () => {
    return {
      text: `Назовите себя, произнесите имя и фамилию`,
      tts: `Назовите себя, произнесите имя и фамилию`,
      end_session: false
    };
  };
  
  /**
   * Реакция на неизвестного юзера.
   *
   */
  exports.unknownUser = () => {
    return {
      text: `Я о Вас ничего не знаю`,
      tts: `Я о Вас ничего не знаю`,
      end_session: false
    }
  }
  exports.unauthUser = () => {
    return {
      text: `У вас нет доступа`,
      tts: `У вас нет доступа`,
      end_session: false
    }
  }
  
  /**
   * Реакция на наличие пользователя.
   */
  exports.existUser = () => {
    return {
      text: `Здравствуйте! Есть запись о вас`,
      tts: `Здравствуйте! Есть запись о вас, посмотрите в камеру, чтобы я убедилась, что это вы.`,
      end_session: false
    }
  }