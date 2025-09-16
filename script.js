// 1. Написание чистой функции
{
  const cart = ['apple', 'banana'];

  function addToCart(cart, item) {
    return [...cart, item];
  }
  let item = addToCart(cart, 'orange');
  console.log(cart);
  console.log(item);
}

// 2. Проблема поверхностного копирования
{
  const user = {
    name: 'Alice',

    profile: {
      settings: {
        theme: 'dark',

        notifications: true,
      },
    },
  };
  let userClone = structuredClone(user);
  userClone.profile.settings.theme = 'light';

  console.log(user.profile.settings.theme);
}

// 3. Возврат по ссылке
{
  function getLogger() {
    const logs = [];

    return {
      addLog(message) {
        logs.push(message);
      },

      getLogs() {
        return logs;
      },
    };
  }
  const logger = getLogger();
  logger.addLog('Session started');

  const logsReference = logger.getLogs();

  logsReference.push('User logged in');
  console.log(logsReference);

  // return logs передает наружу ссылку на внутренний массив, что позволяет менять случайно или намерено внутренний массив. Для обхода проблемы, нужно передавать КОПИЮ внутреннего объекта не предоставляя доступ к изменению , а именно:  return [...logs]
}

// 4. Чистая функция, изменяющая вложенный объект
{
  function enableDarkTheme(user) {
    let result = structuredClone(user);
    result.profile.settings.theme = 'dark';
    return result;
  }

  const user = {
    name: 'Alice',

    profile: {
      settings: {
        theme: 'light',
      },
    },
  };

  const updateUser = enableDarkTheme(user);
  console.log(updateUser.profile.settings.theme);
  console.log(user.profile.settings.theme);
}
