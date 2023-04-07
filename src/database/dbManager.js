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

export async function updateMem(mem) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mem)
    };

    await fetch(`${MEMS_URL}/${mem.id}`, requestOptions);
}