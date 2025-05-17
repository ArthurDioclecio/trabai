const host = 'https://dattebayo-api.onrender.com';

export async function infos(i) {
  try {
    const response = await fetch(`${host}/characters/${i}`)
    if (!response.ok) {
       throw new Error(`Erro: ${response.statusText}`)

    }

    const data = await response.json();
    return data;

  }catch(error){
    console.error(error)
    return []
  }
}
