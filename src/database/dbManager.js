const MEMS_URL = "http://localhost:3000/mems";

export async function getMems() {
    let mems = [];

    await fetch(MEMS_URL)
        .then((response) => response.json())
        .then((response) => {
            mems = response;
        });

    return mems;
}