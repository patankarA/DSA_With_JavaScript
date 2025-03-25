const data = [
    {
        "albumId": 1,
        "id": 1,
        "title": "Sample text for entry 1"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "Sample text for entry 2"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "Sample text for entry 3"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "Sample text for entry 4"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "Sample text for entry 5"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "Sample text for entry 6"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "Sample text for entry 7"
    },
    {
        "albumId": 1,
        "id": 8,
        "title": "Sample text for entry 8"
    },
    {
        "albumId": 1,
        "id": 9,
        "title": "Sample text for entry 9"
    },
    {
        "albumId": 2,
        "id": 10,
        "title": "Sample text for entry 10"
    },
    {
        "albumId": 2,
        "id": 11,
        "title": "Sample text for entry 11"
    },
    {
        "albumId": 2,
        "id": 12,
        "title": "Sample text for entry 12"
    },
    {
        "albumId": 2,
        "id": 13,
        "title": "Sample text for entry 13"
    },
    {
        "albumId": 2,
        "id": 14,
        "title": "Sample text for entry 14"
    },
    {
        "albumId": 2,
        "id": 15,
        "title": "Sample text for entry 15"
    },
    {
        "albumId": 2,
        "id": 16,
        "title": "Sample text for entry 16"
    },
    {
        "albumId": 2,
        "id": 17,
        "title": "Sample text for entry 17"
    },
    {
        "albumId": 2,
        "id": 18,
        "title": "Sample text for entry 18"
    },
    {
        "albumId": 2,
        "id": 19,
        "title": "Sample text for entry 19"
    },
    {
        "albumId": 3,
        "id": 20,
        "title": "Sample text for entry 20"
    },
    {
        "albumId": 3,
        "id": 21,
        "title": "Sample text for entry 21"
    },
    {
        "albumId": 3,
        "id": 22,
        "title": "Sample text for entry 22"
    },
    {
        "albumId": 3,
        "id": 23,
        "title": "Sample text for entry 23"
    },
    {
        "albumId": 3,
        "id": 24,
        "title": "Sample text for entry 24"
    },
    {
        "albumId": 3,
        "id": 25,
        "title": "Sample text for entry 25"
    },
    {
        "albumId": 3,
        "id": 26,
        "title": "Sample text for entry 26"
    },
    {
        "albumId": 3,
        "id": 27,
        "title": "Sample text for entry 27"
    },
    {
        "albumId": 3,
        "id": 28,
        "title": "Sample text for entry 28"
    },
    {
        "albumId": 3,
        "id": 29,
        "title": "Sample text for entry 29"
    },
    {
        "albumId": 4,
        "id": 30,
        "title": "Sample text for entry 30"
    },
    {
        "albumId": 4,
        "id": 31,
        "title": "Sample text for entry 31"
    },
    {
        "albumId": 4,
        "id": 32,
        "title": "Sample text for entry 32"
    },
    {
        "albumId": 4,
        "id": 33,
        "title": "Sample text for entry 33"
    },
    {
        "albumId": 4,
        "id": 34,
        "title": "Sample text for entry 34"
    },
    {
        "albumId": 4,
        "id": 35,
        "title": "Sample text for entry 35"
    },
    {
        "albumId": 4,
        "id": 36,
        "title": "Sample text for entry 36"
    },
    {
        "albumId": 4,
        "id": 37,
        "title": "Sample text for entry 37"
    },
    {
        "albumId": 4,
        "id": 38,
        "title": "Sample text for entry 38"
    },
    {
        "albumId": 4,
        "id": 39,
        "title": "Sample text for entry 39"
    },
    {
        "albumId": 5,
        "id": 40,
        "title": "Sample text for entry 40"
    },
]

const uniqueAlbums = new Map();

data.forEach((item) => {
    if (!uniqueAlbums.has(item.albumId)) {
        uniqueAlbums.set(item.albumId, []); // Initialize as an empty array
    }
    uniqueAlbums.get(item.albumId).push(item.title); // Push the title correctly
});


console.log(uniqueAlbums.entries());

