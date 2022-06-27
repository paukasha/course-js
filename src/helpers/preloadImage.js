export const preloadImage = async (url) => {

  if (!url) {
    return new Promise((resolve) => {
      resolve('');
    });
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Client-ID avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo`,
    },
  });

  const blob = await response.blob();
  const reader = new FileReader();

  reader.readAsDataURL(blob);

  const promise =  new Promise((resolve) => {
     reader.onload = () => {
      resolve(reader.result)
      const img = new Image()
       img.src = reader.result
    }
  })
return promise

};




