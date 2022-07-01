
export async function preloadAsBlob(url) {
  if (!url) {
    return new Promise((resolve) => {
      resolve('');
    });
  }

  const response = await fetch(url);

  const blob = await response.blob();

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


