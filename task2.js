/*Jimny, our secretary, went to the office late today, and it is urgently necessary to save time to have dinner, but before she needs N copies of the same document. 
There are two Xerox, one of which copies the list of paper for x seconds, and the other one - for y seconds. (You may use one Xerox machine, or both at the same time. You can not only copy from the original but also use a copy.) 
To help her to find out what is the minimum time it will take.
*/
function copy(x, y, n) {
    // Визначаємо який з ксероксів швидший
    let fasterXerox;
    let slowerXerox;
    if (x > y) {
      fasterXerox = y;
      slowerXerox = x;
    } else {
      fasterXerox = x;
      slowerXerox = y;
    }
    // Робимо першу копію на швидшому ксероксі
    let copyCount = 1;
    let time = fasterXerox;
    /* Визначаємо скільки копій може зробити швидший 
      ксерокс поки повільний робить одну */
    let a = slowerXerox / fasterXerox;
    // запускаємо два ксерокси
    while (copyCount < n) {
      // працює два ксерокса
      if (copyCount < n) {
        time += slowerXerox;
        /* за той час що повільний робив одну копію,
           швидший зробив а - копій */
        copyCount += 1 + a;
      }
      // швидший ксерокс продовжує роботу
      if (copyCount < n) {
        time += fasterXerox;
        copyCount++;
      }
  
    }
    // повертаємо мінімальний витрачений час на n - копій
    return time;
  };
  
  console.log('За скільки часу будуть зроблені копії ', copy(1, 3, 4));
  