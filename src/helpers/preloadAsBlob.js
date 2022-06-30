
export async function preloadAsBlob(url) {
  if (!url) {
    return new Promise((resolve) => {
      resolve('');
    });
  }

  const responce = await fetch(url);

  const blob = await responce.blob();

  const reader = new FileReader();

  reader.readAsDataURL(blob);

  const promise = new Promise(
    (resolve) =>
      (reader.onload = () => {
        resolve(reader.result);
      }),
  );

  return promise;
}


